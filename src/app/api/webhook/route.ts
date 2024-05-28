import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
	const body: unknown = await request.json();

	if (
		typeof body === "object" &&
		body &&
		"productId" in body &&
		typeof body.productId === "string"
	) {
		console.log(`Revalidating /product/${body.productId}`);
		revalidatePath(`/product/${body.productId}`);
		console.log(`Revalidating /products`);
		revalidatePath(`/products`);
		return NextResponse.json({}, { status: 201 });
	}
	return NextResponse.json({ message: "Invalidate body", status: 400 });
}
