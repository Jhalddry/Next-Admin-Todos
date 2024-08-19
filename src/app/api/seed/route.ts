import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: "test1@google.com",
      password: bcrypt.hashSync("123456"),
      roles: ["Admin", "Test Account"],
      todos: {
        create: [
          { description: "Todo 1", complete: true },
          { description: "Todo 2", complete: false },
          { description: "Todo 3", complete: false },
        ],
      },
    },
  });

  return NextResponse.json({ message: "Seed executed" });
};