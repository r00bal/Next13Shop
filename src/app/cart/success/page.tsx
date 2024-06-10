import Stripe from "stripe";

export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { session_id: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-04-10",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(
		searchParams.session_id,
	);

	return (
		<div className="flex w-full flex-grow items-center justify-center p-20 text-black">
			Payment status: {stripeCheckoutSession.payment_status}
		</div>
	);
}
