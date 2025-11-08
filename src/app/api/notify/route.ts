import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"OrangeBox Notifier" <${process.env.EMAIL_USER}>`,
      to: "herkal@raharja.info",
      subject: "⚠️ Notifikasi Sensor OrangeBox",
      text: message,
      html: `
<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f9fafb" style="font-family: 'Segoe UI', Arial, sans-serif;">
  <tr>
    <td align="center" valign="top" style="padding: 40px 0;">
      <table width="500" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border:1px solid #fab12f;border-radius:8px;overflow:hidden;">
        
        <!-- Header -->
   <tr>
  <td align="center" bgcolor="#fa812f" style="padding: 20px 10px;">
    <h2
      style="
        color:#ffffff;
        font-size:18px;
        margin:0;
        line-height:1.4;
        font-weight:600;
        word-break:break-word;
      "
    >
      ⚠️ OrangeBox Notification
    </h2>
  </td>
</tr>


        <!-- Body -->
        <tr>
          <td style="padding: 20px;">
            <p style="font-size:15px;color:#333;margin:0 0 10px 0;">
              <strong>Warning:</strong> Sensor mencapai batas maksimum.
            </p>

            <table width="100%" border="1" cellspacing="0" cellpadding="8" style="border-collapse:collapse;border-color:#ccc;margin-top:10px;font-size:14px;">
              <tr>
                <td style="width:50%;background:#fafafa;">Organik</td>
                <td align="center">${
                  message.includes("V3")
                    ? message.match(/V3=([0-9.]+)/)?.[1] ?? "-"
                    : "-"
                }%</td>
              </tr>
              <tr>
                <td style="background:#fafafa;">Anorganik</td>
                <td align="center">${
                  message.includes("V4")
                    ? message.match(/V4=([0-9.]+)/)?.[1] ?? "-"
                    : "-"
                }%</td>
              </tr>
            </table>

            <p style="margin-top:16px;font-size:13px;color:#555;line-height:1.5;">
              Dikirim otomatis oleh sistem <strong>OrangeBox</strong>.<br/>
              Silakan segera cek kondisi perangkat Anda.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" bgcolor="#fab12f" style="padding: 15px;">
            <p style="margin:0;font-size:12px;color:#fff;">
              © 2025. Everything Made With ❤️ by Alphabet Incubator
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`,
    });

    return NextResponse.json({
      success: true,
      message: "Berhasil kirim email",
    });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { success: false, error: String(err) },
      { status: 500 }
    );
  }
}
