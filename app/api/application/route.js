import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format the email content
    const formatField = (label, value) => {
      if (!value) return '';
      return `<p><strong>${label}:</strong> ${value}</p>`;
    };

    const emailContent = `
      <h2>New Application Received</h2>
      ${formatField('Name', `${formData.firstName} ${formData.lastName}`)}
      ${formatField('Email', formData.email)}
      ${formatField('Phone', formData.phone)}
      ${formatField('Date of Birth', formData.dob)}
      ${formatField('Address', formData.address)}
      ${formatField('City', formData.city)}
      ${formatField('Country', formData.country)}
      <h3 style="margin-top: 20px; margin-bottom: 10px;">Academic Information</h3>
      ${formatField('Highest Qualification', formData.highestQualification)}
      ${formatField('Institution', formData.institution)}
      ${formatField('Graduation Year', formData.graduationYear)}
      ${formatField('GPA', formData.gpa)}
      <h3 style="margin-top: 20px; margin-bottom: 10px;">Program Details</h3>
      ${formatField('Program', formData.program)}
      ${formatField('University', formData.university)}
      ${formatField('Intake', formData.intake)}
      <p style="margin-top: 20px;">
        Application received on: ${new Date().toLocaleString()}
      </p>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: `New Application: ${formData.firstName} ${formData.lastName} - ${formData.program} at ${formData.university}`,
      html: emailContent,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Application submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { message: 'Error submitting application', error: error.message },
      { status: 500 }
    );
  }
}
