import type { LayoutComponent } from "@/utils/types";

const PublicLayout: LayoutComponent = ({ children }) => {
    return <div>{children}</div>;
};

export default PublicLayout;
