import type { FC } from "react";

const SectionContainer: FC<{ children: React.ReactNode }> = ({ children }) => {
	return <section className="px-7 py-10">{children}</section>;
};

export default SectionContainer;
