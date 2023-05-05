import type { LayoutComponent } from "~/utils/types";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import AdminBreadcrums from "./AdminBreadcrums";

export const metadata = {
	title: "WebRoyalty Dasboard",
};

const AdminLayout: LayoutComponent = ({ children }) => {
	return (
		<>
			<AdminNavbar />
			<AdminBreadcrums />
			<div className="flex" style={{ height: "calc(100vh - 85px)" }}>
				<AdminSidebar />
				<main className="w-full p-4 pr-7 h-full">{children}</main>
			</div>
		</>
	);
};

export default AdminLayout;
