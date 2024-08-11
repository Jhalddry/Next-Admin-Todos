import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: "Todo 1", complete: true },
      { description: "Todo 2", complete: false },
      { description: "Todo 3", complete: false },
    ],
  });

  return NextResponse.json({ message: "Seed executed" });
}
