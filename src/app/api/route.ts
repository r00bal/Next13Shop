import { type NextRequest, NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = true;
export const dynamicParams = true;
export const revalidate = 123;

export async function GET(_request: NextRequest): Promise<NextResponse> {
	return NextResponse.json(Math.random());
}
