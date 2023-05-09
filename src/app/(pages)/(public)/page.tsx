import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import TechSection from "./TechSection";
import WorkSection from "./WorkSection";

const Home = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<TechSection />
			<WorkSection />
			<ProjectsSection />
			<ContactSection />
		</>
	);
};

export default Home;
