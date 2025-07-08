import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Reuse the existing transporter from contact form or create a new one
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

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

    // Prepare email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Testimonial Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #212121; }
          .container { max-width: 600px; margin: 0 auto; padding: 2rem; }
          .header { text-align: center; padding-bottom: 1rem; border-bottom: 1px solid #e5e7eb; margin-bottom: 1.5rem; }
          .content { background-color: #f8fafc; padding: 1.5rem; border-radius: 6px; margin-bottom: 1.5rem; }
          .field { margin-bottom: 1rem; }
          .label { font-weight: 500; color: #4b5563; display: block; margin-bottom: 0.25rem; }
          .value { color: #111827; background: white; padding: 0.5rem 0.75rem; border-radius: 4px; border: 1px solid #e5e7eb; }
          .rating { color: #f59e0b; font-size: 1.25rem; letter-spacing: 0.25rem; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Testimonial Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">From:</span>
              <div class="value">${formData.name} &lt;${formData.email}&gt;</div>
            </div>
            ${formData.position ? `
            <div class="field">
              <span class="label">Position:</span>
              <div class="value">${formData.position}</div>
            </div>` : ''}
            ${formData.company ? `
            <div class="field">
              <span class="label">Company:</span>
              <div class="value">${formData.company}</div>
            </div>` : ''}
            <div class="field">
              <span class="label">Rating:</span>
              <div class="rating">${'★'.repeat(Number(formData.rating))}${'☆'.repeat(5 - Number(formData.rating))}</div>
            </div>
            <div class="field">
              <span class="label">Testimonial:</span>
              <div class="value" style="white-space: pre-line;">${formData.testimonial}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Testimonial from ${formData.name}`,
      html: emailHtml,
      replyTo: formData.email,
    };

    console.log('Sending testimonial email to:', process.env.EMAIL_RECIPIENT);
    const info = await transporter.sendMail(mailOptions);
    console.log('Testimonial email sent:', info.messageId);

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