import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { amount, planName, planId } = await request.json();

    const amountInPaise = Math.round(amount * 100);
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_ID || "";
    const keySecret = process.env.RAZORPAY_SECRET || "";

    // Create Basic Auth header
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: "INR",
        receipt: `order_${planId}_${Date.now()}`,
        notes: {
          planName,
          planId,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      // eslint-disable-next-line no-console
      console.error("Razorpay API error:", errorData);
      return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
    }

    const order = await response.json();
    return NextResponse.json(order);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
