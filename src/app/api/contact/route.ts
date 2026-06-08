import { NextResponse } from 'next/server';

class ApiError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

const isValidEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export async function POST(request: Request) {
  try {
    const formData = await request.json().catch(() => {
      throw new ApiError('Invalid JSON payload', 400);
    });

    // Validation
    const errors: Record<string, string> = {};

    if (!formData.name?.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message?.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    if (Object.keys(errors).length > 0) {
      return new NextResponse(
        JSON.stringify({ errors }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Send data to Formspree
    const formspreeUrl = process.env.FORMSPREE_CONTACT_URL;
    
    if (!formspreeUrl) {
      console.warn('FORMSPREE_CONTACT_URL is not set. Simulating success.');
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
          subject: formData.subject || 'New Contact Form Submission',
          plan: formData.plan,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message via Formspree');
      }
    }

    return new NextResponse(
      JSON.stringify({ message: 'Message sent successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Error in contact form:', error);
    
    const statusCode = error instanceof ApiError ? error.statusCode : 500;
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    
    return new NextResponse(
      JSON.stringify({ 
        message: statusCode === 500 ? 'Internal server error' : message 
      }),
      {
        status: statusCode,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}