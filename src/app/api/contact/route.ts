import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  // Validate required environment variables
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("Missing required SMTP environment variables");
    return NextResponse.json({ 
      success: false, 
      error: "Server configuration error. Please contact administrator." 
    }, { status: 500 });
  }

  // Create transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_FROM,
      pass: process.env.SMTP_PASS,
    },
    // Optimize for speed
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
    rateDelta: 1000,
    rateLimit: 14,
    connectionTimeout: 10000,
    greetingTimeout: 5000,  
    socketTimeout: 10000,  
  });

  console.log("Sending email to:", process.env.SMTP_FROM);
  console.log("Sending email to:", process.env.SMTP_USER);
  const mailOptions = {
    from: process.env.SMTP_FROM, 
    to: process.env.SMTP_USER,// Send to your email
    subject: `New Contact Request from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #274584; border-bottom: 2px solid #CEE1F8; padding-bottom: 10px;">
          New Contact Request - Healthcare Digital Marketing
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #274584; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #274584;">
          <h3 style="color: #274584; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; color: #333;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background: #CEE1F8; border-radius: 8px; text-align: center;">
          <p style="margin: 0; color: #274584; font-size: 14px;">
            This message was sent from your Healthcare Digital Marketing website contact form.
          </p>
        </div>
      </div>
    `,
    text: `Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}`,
  };

  try {
    // Send email asynchronously - don't wait for completion
    transporter.sendMail(mailOptions).then(() => {
      console.log("Email sent successfully");
    }).catch((err) => {
      console.error("Mail Error:", err);
    });

    // Return success immediately - don't wait for email
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail Error:", err);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to send email. Please try again later." 
    }, { status: 500 });
  }
}