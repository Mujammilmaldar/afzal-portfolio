import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ 
        success: false, 
        error: "Please fill in all required fields." 
      }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        success: false, 
        error: "Please enter a valid email address." 
      }, { status: 400 });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_TO) {
      return NextResponse.json({ 
        success: false, 
        error: "Server configuration error." 
      }, { status: 500 });
    }

    console.log("📧 Starting email send...");

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      connectionTimeout: 3000,
      greetingTimeout: 3000,
      socketTimeout: 5000,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS?.replace(/\s/g, '') || '',
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: "New Contact Request from " + name,
      text: "Name: " + name + "\\nEmail: " + email + "\\nPhone: " + (phone || 'Not provided') + "\\n\\nMessage:\\n" + message
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", result.messageId);
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Error:", error);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to send email." 
    }, { status: 500 });
  }
}