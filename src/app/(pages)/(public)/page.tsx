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
			<ContactSection />
		</>
	);
};

export default Home;
