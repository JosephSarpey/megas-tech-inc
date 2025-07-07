import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

class ApiError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

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

    // Prepare email content
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #212121;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 2rem;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          .header {
            text-align: center;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
            margin-bottom: 1.5rem;
          }
          .logo {
            color: #00ff00;
            font-weight: 700;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            display: inline-block;
          }
          h1 {
            color: #111827;
            font-size: 1.5rem;
            margin: 0 0 1rem;
            font-weight: 600;
          }
          .content {
            background-color: #f8fafc;
            padding: 1.5rem;
            border-radius: 6px;
            margin-bottom: 1.5rem;
          }
          .field {
            margin-bottom: 1rem;
          }
          .label {
            font-weight: 500;
            color: #4b5563;
            display: block;
            margin-bottom: 0.25rem;
            font-size: 0.875rem;
          }
          .value {
            color: #111827;
            background: white;
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            border: 1px solid #e5e7eb;
            margin-top: 0.25rem;
            font-size: 0.9375rem;
            line-height: 1.5;
          }
          .message {
            white-space: pre-line;
            background: white;
            padding: 1rem;
            border-radius: 4px;
            border: 1px solid #e5e7eb;
            margin-top: 0.5rem;
            font-size: 0.9375rem;
            line-height: 1.6;
          }
          .footer {
            text-align: center;
            padding-top: 1.5rem;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 0.8125rem;
          }
          .accent {
            color: #00ff00;
            font-weight: 500;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">MEGAS TECH INC</div>
            <h1>New Contact Form Submission</h1>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">Name</span>
              <div class="value">${formData.name}</div>
            </div>
            
            <div class="field">
              <span class="label">Email</span>
              <div class="value">${formData.email}</div>
            </div>
            
            ${formData.plan ? `
              <div class="field">
                <span class="label">Selected Plan</span>
                <div class="value">${formData.plan.charAt(0).toUpperCase() + formData.plan.slice(1)}</div>
              </div>
            ` : ''}
            
            <div class="field">
              <span class="label">Message</span>
              <div class="message">${formData.message}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This message was sent from the contact form on <span class="accent">megastech.com</span>.</p>
            <p>© ${new Date().getFullYear()} MEGAS TECH INC. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: formData.subject || 'New Contact Form Submission',
      text: `
        New Contact Form Submission
        =========================
        
        Name: ${formData.name}
        Email: ${formData.email}
        ${formData.plan ? `Plan: ${formData.plan}\n` : ''}
        Message:
        ${formData.message}
      `,
      html: emailContent,
    });

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