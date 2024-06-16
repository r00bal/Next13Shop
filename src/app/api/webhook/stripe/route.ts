/// <reference types="stripe-event-types" />
import { type NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}
	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("Missing STRIPE_WEBHOOK_SECRET");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-04-10",
		typescript: true,
	});

	const signature = request.headers.get("stripe-signature");
	if (!signature) {
		return new Response("No signature", { status: 401 });
	}

	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,

		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed": {
			// to test open listener pipe in the terminal:
			//  stripe listen --forward-to localhost:3000/api/webhook/stripe
			// in the dashbord you shpuld that local listener is actice:
			// https://dashboard.stripe.com/test/webhooks
			// then trigger the event from the terminal
			//  stripe trigger checkout.session.completed --add checkout_session:metadata.channelId=123
			//  docs: https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local

			console.dir(event, { depth: 999 });
			event.data.object.metadata?.cartId;
		}
		case "payment_intent.succeeded": {
		}
		case "checkout.session.expired": {
		}
		case "checkout.session.async_payment_failed": {
		}
		case "checkout.session.async_payment_succeeded": {
		}
		default:
			console.log(`Unhandled event type ${event.type}`);
	}
	return new Response(null, { status: 204 });
}
