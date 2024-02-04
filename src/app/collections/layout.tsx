import { type ChildrenType } from "../types";

export default function ProductLayout({ children }: ChildrenType) {
	return <section className="mx-auto grid max-w-7xl p-8">{children}</section>;
}
