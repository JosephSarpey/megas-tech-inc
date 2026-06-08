import { NextResponse } from 'next/server';

// Email validation helper
function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(request: Request) {
  try {
    // Parse JSON body
    const formData = await request.json().catch(() => {
      throw new Error('Invalid JSON payload');
    });

    // Validation
    const errors: Record<string, string> = {};

    // Required fields
    if (!formData.name?.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.testimonial?.trim()) {
      errors.testimonial = 'Testimonial is required';
    } else if (formData.testimonial.trim().length < 20) {
      errors.testimonial = 'Testimonial must be at least 20 characters';
    }

    // Validate rating is between 1-5
    const rating = Number(formData.rating);
    if (isNaN(rating) || rating < 1 || rating > 5) {
      errors.rating = 'Please select a valid rating between 1 and 5 stars';
    }

    // hCaptcha verification
    if (!formData.captchaToken) {
      errors.captcha = 'Please complete the captcha verification';
    } else {
      // Verify hCaptcha token
      const captchaSecret = process.env.HCAPTCHA_SECRET_KEY;
      if (captchaSecret) {
        try {
          const response = await fetch('https://hcaptcha.com/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
              secret: captchaSecret,
              response: formData.captchaToken,
            }),
          });
          
          const captchaResult = await response.json();
          if (!captchaResult.success) {
            errors.captcha = 'Captcha verification failed. Please try again.';
          }
        } catch (error) {
          console.error('hCaptcha verification error:', error);
          errors.captcha = 'Failed to verify captcha. Please try again.';
        }
      }
    }

    // Return validation errors if any
    if (Object.keys(errors).length > 0) {
      return new NextResponse(
        JSON.stringify({ 
          success: false,
          errors 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Send to Formspree
    const formspreeUrl = process.env.FORMSPREE_TESTIMONIALS_URL;
    
    if (!formspreeUrl) {
      console.warn('FORMSPREE_TESTIMONIALS_URL is not set. Simulating success.');
    } else {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          position: formData.position,
          company: formData.company,
          rating: formData.rating,
          testimonial: formData.testimonial,
          subject: `New Testimonial from ${formData.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send testimonial via Formspree');
      }
    }

    return new NextResponse(
      JSON.stringify({ 
        success: true,
        message: 'Thank you for your testimonial! We appreciate your feedback.'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error processing testimonial submission:', error);
    return new NextResponse(
      JSON.stringify({ 
        success: false,
        message: 'An error occurred while processing your testimonial. Please try again later.'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}