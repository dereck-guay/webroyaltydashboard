import type { LayoutComponent } from "~/utils/types";

const PublicLayout: LayoutComponent = ({ children }) => {
	return (
		<div>
			<main>{children}</main>
		</div>
	);
};

export default PublicLayout;
