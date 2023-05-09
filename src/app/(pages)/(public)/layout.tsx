import type { LayoutComponent } from "~/utils/types";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";

const PublicLayout: LayoutComponent = ({ children }) => {
	return (
		<div>
			<PublicNavbar />
			<main>{children}</main>
			<PublicFooter />
		</div>
	);
};

export default PublicLayout;
