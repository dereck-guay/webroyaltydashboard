import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import TechSection from "./TechSection";
import WorkSection from "./WorkSection";
import TestimonialsSection from "./TestimonialsSection";

const Home = () => {
	return (
		<>
			<HeroSection />
			<TechSection />
			<AboutSection />
			<WorkSection />
			<ProjectsSection />
			<TestimonialsSection />
			<ContactSection />
		</>
	);
};

export default Home;
