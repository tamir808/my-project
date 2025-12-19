import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    // Create a test transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Test email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT,
      subject: 'Test Email from School Application',
      text: 'This is a test email to verify the email setup is working correctly.',
      html: `
        <h2>Test Email</h2>
        <p>If you're reading this, the email setup is working correctly!</p>
        <p>Emails from the application form will be sent to this address.</p>
      `,
    };

    // Send the test email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully! Please check your inbox (and spam folder).' 
    });
    
  } catch (error) {
    console.error('Error sending test email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send test email',
        error: error.message 
      },
      { status: 500 }
    );
  }
}
