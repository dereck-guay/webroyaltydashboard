import { type FC } from "react";
import Link from "next/link";

export type PublicNavbarLinkProps = {
	children: React.ReactNode;
	href: string;
	target?: string;
	isFill?: boolean;
};

const PublicNavbarLink: FC<PublicNavbarLinkProps> = ({
	children,
	href,
	target,
	isFill,
}) => {
	return (
		<Link
			target={target}
			href={href}
			className={`
			flex items-center gap-x-2 rounded px-3 py-1 text-sm
			${
				isFill
					? "bg-primary hover:bg-primary-dark"
					: "outline-1 hover:text-primary hover:outline hover:outline-primary"
			}`}
		>
			{children}
		</Link>
	);
};

export default PublicNavbarLink;
