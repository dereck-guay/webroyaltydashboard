import type { LayoutComponent } from "~/utils/types";
import AdminNavbar from "./components/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar";
import AdminBreadcrums from "./components/AdminBreadcrums";

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
				<main className="h-full w-full p-4 pr-7">{children}</main>
			</div>
		</>
	);
};

export default AdminLayout;
