import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload in request." },
      { status: 400 }
    );
  }

  try {
    const { name, email, company, projectType, budgetRange, message, honeypot } = body;

    // Check honeypot for bot activity
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry received" }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format." },
        { status: 400 }
      );
    }

    // If an external email provider is configured (e.g. RESEND_API_KEY)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || "onboarding@resend.dev",
            to: process.env.EMAIL_TO || "codebyshazzy@gmail.com",
            subject: `New Portfolio Inquiry from ${name} [${projectType || "General"}]`,
            text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nProject Type: ${projectType}\nBudget: ${budgetRange || "N/A"}\n\nMessage:\n${message}`,
          }),
        });
      } catch (err) {
        console.error("Failed to forward via Resend:", err);
      }
    }

    // Log internally in production runtime
    console.log(`[Contact Form Received]: from ${name} (${email}) - Type: ${projectType}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been successfully transmitted to Muhammad Shahzaman.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Server error occurred while submitting." },
      { status: 500 }
    );
  }
}
