import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    name: "James Maddison",
    age: 26,
  });
}
