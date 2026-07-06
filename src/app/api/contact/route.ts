import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  organization: string;
  industry: string;
  message: string;
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, organization, industry, message } = body;

  if (!name || !organization || !industry || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 422 });
  }

  // If RESEND_API_KEY is configured, send a real email.
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const to = process.env.CONTACT_TO_EMAIL ?? "office@centwiseai.ca";
      const from = process.env.RESEND_FROM_EMAIL ?? "noreply@centwiseai.ca";

      await resend.emails.send({
        from,
        to,
        replyTo: undefined,
        subject: `New contact: ${name} — ${organization}`,
        html: `
          <div style="font-family: sans-serif; max-width: 560px; color: #1C2B27;">
            <h2 style="color: #085041; margin-bottom: 4px;">New enquiry via centwiseai.ca</h2>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; width: 120px; color: #5E6B66; font-size: 13px;">Name</td><td style="padding: 6px 0; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 6px 0; color: #5E6B66; font-size: 13px;">Organization</td><td style="padding: 6px 0; font-weight: 600;">${organization}</td></tr>
              <tr><td style="padding: 6px 0; color: #5E6B66; font-size: 13px;">Industry</td><td style="padding: 6px 0;">${industry}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
            <p style="color: #5E6B66; font-size: 13px; margin-bottom: 6px;">Message</p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        `,
      });
    } catch (err) {
      console.error("Email send failed:", err);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }
  } else {
    // Development: log the submission instead of sending.
    console.log("📬 Contact form submission (no email service configured):");
    console.log({ name, organization, industry, message });
    console.log(
      "👉 To enable real email delivery, set RESEND_API_KEY in .env.local (see .env.local.example)."
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
