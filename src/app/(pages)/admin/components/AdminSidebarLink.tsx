"use client";
import Link from "next/link";
import type { FC } from "react";
import { usePathname } from "next/navigation";

type AdminSidebarLinkProps = {
	icon?: JSX.Element;
	caption?: string;
	href: string;
	match: string;
};

const AdminSidebarLink: FC<AdminSidebarLinkProps> = ({
	href,
	caption,
	icon,
	match,
}) => {
	const pathName = usePathname();
	const isActive = pathName.match(
		new RegExp(`^${match}$`.replace("*$", "($|/)"))
	);

	return (
		<Link
			href={href}
			className="flex items-center rounded px-3 py-1 text-slate-700 hover:bg-slate-100 hover:text-black"
		>
			<span className={`w-8 text-xl ${isActive && "text-primary"}`}>
				{!!icon && icon}
			</span>
			{!!caption && caption}
		</Link>
	);
};

export default AdminSidebarLink;
