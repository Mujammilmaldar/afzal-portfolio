import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "submissiondirectories@gmail.com", // 🔐 your sending email
      pass: "yhre ctiw zmlo wpxk",         // 💡 Gmail App Password (not your normal password!)
    },
  });

  const mailOptions = {
    from: email,
    to: "afzal82khan@gmail.com", // ✅ your destination inbox
    subject: `New Contact Request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail Error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
