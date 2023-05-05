import Link from "next/link";
import type { FC } from "react";
import { FaCubes, FaHome, FaUsers } from "react-icons/fa";
import AdminSidebarLink from "./AdminSidebarLink";

const AdminSidebar: FC = () => {
    return (
        <aside className="w-80  p-4 pr-0 h-full">
            <div className="flex flex-col gap-y-2 border-r h-full pr-4">
                <AdminSidebarLink
                    href="/admin"
                    match="/admin"
                    icon={<FaHome />}
                    caption="Dashboard"
                />

                <AdminSidebarLink
                    href="/admin/projects"
                    match="/admin/projects*"
                    icon={<FaCubes />}
                    caption="Projects"
                />

                <AdminSidebarLink
                    href="/admin/customers"
                    match="/admin/customers*"
                    icon={<FaUsers />}
                    caption="Customers"
                />
            </div>
        </aside>
    );
};

export default AdminSidebar;
