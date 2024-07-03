import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const emailVerifyRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!data.email || !emailVerifyRegex.test(data.email) || !data.name) {
    return NextResponse.json(
      { status: "error", message: "Invalid email or name" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      "https://newsletter.ohevan.com/api/public/subscription",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          list_uuids: ["7db33016-87f7-459e-b36a-a7c4762e051b"],
        }),
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { status: "error", message: "Failed to subscribe" },
        { status: 500 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Failed to subscribe", error },
      { status: 500 },
    );
  }

  return NextResponse.json({
    status: "success",
    message: "Subscribed successfully",
    data: { email: data.email, name: data.name },
  });
}
