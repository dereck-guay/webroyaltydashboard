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
            className="flex items-center px-3 py-1 hover:bg-slate-100 rounded text-slate-700 hover:text-black"
        >
            <span className={`text-xl w-8 ${isActive && "text-primary"}`}>
                {!!icon && icon}
            </span>
            {!!caption && caption}
        </Link>
    );
};

export default AdminSidebarLink;
