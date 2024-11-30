import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    const facilities = await prisma.facility.findMany();

    return NextResponse.json(facilities);
}