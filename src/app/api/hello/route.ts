import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    msg: "Hello World",
    method: request.method,
  });
}

export async function POST(request: Request) {
  return NextResponse.json({
    msg: "Hello World",
    method: request.method,
  });
}
