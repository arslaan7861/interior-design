"use server";
import { sign } from "jsonwebtoken";
import nodemailer from "nodemailer";
export async function sendAdminMail() {
  try {
    const token = await sign({ name: "admin_name" }, process.env.JWT_SECRET!, {
      expiresIn: "100m",
    });
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.NEXT_PUBLIC_OWNER_EMAIL!,
      subject: "Admin Login Access | Interior Design Panel",
      html: `
          <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
            <h2>Interior Design Admin Panel Access</h2>
            <p>Hello Admin,</p>
            <p>You have requested access to the interior design admin dashboard. Please click the button below to log in:</p>
            <a href="${process.env.HOME_URL}/admin/login?token=${token}"
               style="display: inline-block; padding: 10px 20px; background-color: #111827; color: #ffffff; text-decoration: none; border-radius: 4px; margin-top: 10px;">
              Log in to Admin Panel
            </a>
            <p style="margin-top: 20px;">If you did not request this, please ignore this email.</p>
            <p> Interior Design System</p>
          </div>
        `,
    });
    console.log("mailsent");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
