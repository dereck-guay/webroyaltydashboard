import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SectionContainer from "./SectionContainer";
import TechSection from "./TechSection";
import WorkSection from "./WorkSection";
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

const Home = () => {
	return (
		<>
			<HeroSection />
			<TechSection />
			<AboutSection />
			<WorkSection />
			<ProjectsSection />
			<div className="relative z-30 bg-gradient-to-r from-slate-300 via-white to-gray-300">
				<div className="px-7 py-10">
					<h2 className="mb-8 text-center text-2xl font-extrabold">
						<span className="border-b-2 border-primary px-4">Testimonials</span>
					</h2>
					<div id="testimonials"></div>
					<div className="flex items-center justify-center gap-x-20 text-slate-500">
						<div className="rounded-sm bg-white px-4 py-4">
							<div className="font-semibold text-black">Alison Guay</div>
							<div className="flex items-center justify-between">
								<div>CEO of Linguistic</div>
								<div className="text-primary">Linguistic.com</div>
							</div>
							<div className="text-sm text-slate-700">
								<div className="relative left-0 top-0 ml-2 max-w-prose border-l-2 border-slate-300 bg-slate-100 p-1 pl-2 before:h-full before:w-4 before:bg-slate-300">
									&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
									amet consectetur adipisicing&quot;
								</div>
							</div>
						</div>
						<div className="rounded-sm bg-white px-4 py-4">
							<div className="font-semibold text-black">Logan Guay</div>
							<div className="flex items-center justify-between">
								<div>CEO of Firefighters</div>
								<div className="text-primary">Firefighters.com</div>
							</div>
							<div className="text-sm text-slate-700">
								<div className="relative left-0 top-0 ml-2 max-w-prose border-l-2 border-slate-300 bg-slate-100 p-1 pl-2 before:h-full before:w-4 before:bg-slate-300">
									&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
									amet consectetur adipisicing&quot;
								</div>
							</div>
						</div>
						<div className="rounded-sm bg-white px-4 py-4">
							<div className="font-semibold text-black">Tyler Guay</div>
							<div className="flex items-center justify-between">
								<div>CEO of PCGamers</div>
								<div className="text-primary">pcgamers.com</div>
							</div>
							<div className="text-sm text-slate-700">
								<div className="relative left-0 top-0 ml-2 max-w-prose border-l-2 border-slate-300 bg-slate-100 p-1 pl-2 before:h-full before:w-4 before:bg-slate-300">
									&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
									amet consectetur adipisicing&quot;
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ContactSection />
		</>
	);
};

export default Home;
