import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"OrangeBox Notifier" <${process.env.EMAIL_USER}>`,
      to: "tujuan@example.com",
      subject: "⚠️ Notifikasi Sensor OrangeBox",
      text: message,
      html: `
    <div style="
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #f9fafb;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #ddd;
    ">
      <h2 style="color:#e11d48;">⚠️ OrangeBox Notification</h2>
      <p style="font-size:15px;color:#333;">
        <strong>Warning:</strong> Sensor mencapai batas maksimum.
      </p>

      <table style="border-collapse:collapse;margin-top:10px;">
        <tr>
          <td style="padding:6px 10px;border:1px solid #ccc;">V3</td>
          <td style="padding:6px 10px;border:1px solid #ccc;">${
            message.includes("V3")
              ? message.match(/V3=([0-9.]+)/)?.[1] ?? "-"
              : "-"
          }</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;border:1px solid #ccc;">V4</td>
          <td style="padding:6px 10px;border:1px solid #ccc;">${
            message.includes("V4")
              ? message.match(/V4=([0-9.]+)/)?.[1] ?? "-"
              : "-"
          }</td>
        </tr>
      </table>

      <p style="margin-top:16px;font-size:13px;color:#555;">
        Dikirim otomatis oleh sistem <strong>OrangeBox Waste Sorter</strong>.<br/>
        Silakan segera cek kondisi perangkat Anda.
      </p>
    </div>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { success: false, error: String(err) },
      { status: 500 }
    );
  }
}
