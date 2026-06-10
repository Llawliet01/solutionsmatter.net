import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, companyName, subject, message } = body;

    // Server-side basic validation
    if (!name || !email || !companyName || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'All inputs (name, email, companyName, subject, message) are required.' },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Process submission: Log details
    console.log('=== CONTACT SUBMISSION RECEIVED ===');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${companyName}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log('===================================');

    // Simulate sending email notification to info@solutionsmatter.com
    // In a real application, integration with Nodemailer, SendGrid, or Postmark goes here

    return NextResponse.json(
      { success: true, message: 'Message logged and queued successfully.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error processing contact submission.' },
      { status: 500 }
    );
  }
}
