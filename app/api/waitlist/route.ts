import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // TODO: Integrate with your actual waitlist service (e.g., ConvertKit, Mailchimp, etc.)
    // For now, we'll just log it and return success
    console.log("Waitlist signup:", email);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In a real implementation, you would:
    // 1. Save to database
    // 2. Send to email service
    // 3. Send confirmation email
    // 4. Check for duplicates

    return NextResponse.json(
      { 
        success: true, 
        message: "Successfully added to waitlist",
        email 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

