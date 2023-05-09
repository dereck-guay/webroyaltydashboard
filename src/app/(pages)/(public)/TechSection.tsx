import PublicTitle from "./PublicTitle";
import SectionContainer from "./SectionContainer";
import {
	SiNextdotjs,
	SiTypescript,
	SiTailwindcss,
	SiPhp,
	SiJavascript,
	SiLaravel,
	SiHtml5,
	SiCss3,
	SiReact,
	SiBootstrap,
} from "react-icons/si";

const TechSection = () => {
	return (
		<div className="overflow-x-auto border-slate-400 bg-gradient-to-br from-slate-100 via-white to-slate-100">
			<SectionContainer>
				<PublicTitle  id="techstack"  caption="Skills" />
				<div className="flex items-center justify-center gap-x-24 text-5xl text-slate-500">
					<SiHtml5 title="HTML" />
					<SiCss3 title="CSS" />
					<SiJavascript title="Javascript" />
					<SiPhp className="text-7xl" title="PHP" />
					<SiLaravel title="Laravel" />
					<SiReact title="React" />
					<SiTypescript title="Typescript" />
					<SiNextdotjs title="Next.js" />
					<SiTailwindcss title="Tailwindcss" />
					<SiBootstrap title="Bootstrap" />
				</div>
			</SectionContainer>
		</div>
	);
};

export default TechSection;
