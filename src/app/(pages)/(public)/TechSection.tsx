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
		<div className="relative z-30 -mt-20 skew-y-3 overflow-hidden overflow-x-hidden bg-gradient-to-r from-slate-300 via-white to-gray-300">
			<div className="px-7 py-10">
				<div id="skills"></div>
				<div className="flex items-center justify-center gap-x-24 text-5xl text-slate-500">
					<SiHtml5 className="-skew-y-3" title="HTML" />
					<SiCss3 className="-skew-y-3" title="CSS" />
					<SiJavascript className="-skew-y-3" title="Javascript" />
					<SiPhp className="-skew-y-3 text-7xl" title="PHP" />
					<SiLaravel className="-skew-y-3" title="Laravel" />
					<SiReact className="-skew-y-3" title="React" />
					<SiTypescript className="-skew-y-3" title="Typescript" />
					<SiNextdotjs className="-skew-y-3" title="Next.js" />
					<SiTailwindcss className="-skew-y-3" title="Tailwindcss" />
					<SiBootstrap className="-skew-y-3" title="Bootstrap" />
				</div>
			</div>
		</div>
	);
};

export default TechSection;
