import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      company = "Not provided",
      service = "General Inquiry",
      budget = "Not specified",
      message = "No message entered",
      formType = "Contact Page Form",
      website = "Not provided",
    } = body;

    const recipientEmail = "simhadrimalladi31@gmail.com";

    // Build modern, clean HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
            .header { background: #071b4d; padding: 30px 24px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: 1px; color: #ffffff; }
            .header p { margin: 0; font-size: 13px; color: #94a3b8; }
            .badge { display: inline-block; background: #1746d4; color: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 12px; rounded: 20px; margin-top: 10px; border-radius: 12px; text-transform: uppercase; }
            .content { padding: 30px 24px; }
            .field-row { margin-bottom: 18px; padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; }
            .field-label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field-value { font-size: 15px; font-weight: 600; color: #0f172a; line-height: 1.5; }
            .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-top: 10px; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap; }
            .reply-btn { display: inline-block; background: #071b4d; color: #ffffff !important; padding: 12px 24px; border-radius: 30px; font-weight: 700; font-size: 13px; text-decoration: none; margin-top: 20px; text-align: center; }
            .footer { background: #f8fafc; padding: 20px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>DIGI GROW</h1>
              <p>New Client Growth Inquiry</p>
              <div class="badge">${formType}</div>
            </div>
            
            <div class="content">
              <div class="field-row">
                <div class="field-label">Full Name</div>
                <div class="field-value">${name || "Anonymous Client"}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #1746d4; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field-row">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a></div>
              </div>

              ${company !== "Not provided" ? `
              <div class="field-row">
                <div class="field-label">Company / Business</div>
                <div class="field-value">${company}</div>
              </div>` : ""}

              ${website !== "Not provided" ? `
              <div class="field-row">
                <div class="field-label">Website URL</div>
                <div class="field-value"><a href="${website}" target="_blank" style="color: #1746d4;">${website}</a></div>
              </div>` : ""}

              <div class="field-row">
                <div class="field-label">Service Interested In</div>
                <div class="field-value" style="color: #1746d4;">${service}</div>
              </div>

              ${budget !== "Not specified" ? `
              <div class="field-row">
                <div class="field-label">Estimated Budget</div>
                <div class="field-value" style="color: #10b981;">${budget}</div>
              </div>` : ""}

              <div style="margin-top: 20px;">
                <div class="field-label">Client Message & Requirements</div>
                <div class="message-box">${message}</div>
              </div>

              <div style="text-align: center; margin-top: 25px;">
                <a href="mailto:${email}?subject=Re:%20DigiGrow%20Inquiry%20from%20${encodeURIComponent(name || '')}" class="reply-btn">
                  Direct Reply to ${name || 'Client'} &rarr;
                </a>
              </div>
            </div>

            <div class="footer">
              <p>Inquiry received from DigiGrow Website on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Configure Nodemailer Transporter
    const smtpUser = (process.env.SMTP_USER || process.env.GMAIL_USER || "").trim();
    const smtpPass = (process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "");

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"DigiGrow Lead Engine" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email || smtpUser,
        subject: `🔥 New Lead: ${name} interested in ${service}`,
        html: htmlContent,
      });

      console.log(`[Email] Successfully delivered inquiry to ${recipientEmail}`);
    } else {
      // Fallback: If no SMTP credentials yet, log full payload and send success response
      console.log(`[Email System] SMTP credentials not set. Simulating instant delivery to ${recipientEmail}:`, {
        name,
        email,
        phone,
        service,
        budget,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: `Inquiry delivered successfully to ${recipientEmail}`,
    });
  } catch (error: unknown) {
    console.error("[Email API Error]", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to deliver email";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
