"use client";
import type { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AdminBreadcrums: FC = () => {
	const pathName = usePathname();
	let pathBuilder = "";

	return (
		<div className="flex items-center gap-x-2 text-sm px-7 py-1 bg-slate-100 border-b">
			{pathName
				.split("/")
				.splice(1)
				.map((pN) => {
					pathBuilder += `/${pN}`;
					const isActive = pathName == pathBuilder;
					const isCUID = !!pN.match(/^c[a-z0-9]{24}$/gm);
					return (
						<span key={pN}>
							<span className="text-slate-600 text-xs mr-2">/</span>
							{!!isCUID && <span>ID: </span>}
							<Link
								className={isActive ? "text-primary" : ""}
								href={pathBuilder}
							>
								{pN.charAt(0).toUpperCase() + pN.slice(1)}
							</Link>
						</span>
					);
				})}
		</div>
	);
};

export default AdminBreadcrums;
