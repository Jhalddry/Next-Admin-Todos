import { getUserSessionServer } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get("take") ?? "10";
  const skip = searchParams.get("skip") ?? "0";

  if (isNaN(+take)) {
    return NextResponse.json(
      { message: "Take has to be a number" },
      { status: 400 }
    );
  }

  if (isNaN(+skip)) {
    return NextResponse.json(
      { message: "Skip has to be a number" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    take: +take,
    skip: +skip,
  });

  return NextResponse.json(todos);
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

export async function POST(request: Request) {
  const user = await getUserSessionServer();

  if (!user) {
    return NextResponse.json("Not authorized", { status: 401 });
  }

  try {
    const { complete, description } = await postSchema.validate(
      await request.json()
    );
    const todo = await prisma.todo.create({
      data: { complete, description, userId: user.id },
    });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  const user = await getUserSessionServer();

  if (!user) {
    return NextResponse.json("Not authorized", { status: 401 });
  }

  try {
    await prisma.todo.deleteMany({
      where: { complete: true, userId: user.id },
    });

    return NextResponse.json("Deleted succesfully");
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
