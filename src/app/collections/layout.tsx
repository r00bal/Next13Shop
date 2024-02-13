import { type ChildrenType } from "../types";

export default function ProductLayout({ children }: ChildrenType) {
	return <section className="flex flex-grow flex-col">{children}</section>;
}
