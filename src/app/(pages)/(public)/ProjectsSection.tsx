import PublicTitle from "./PublicTitle";
import SectionContainer from "./SectionContainer";

const ProjectsSection = () => {
	return (
		<div className="relative z-10 bg-white px-20" style={{ height: '500px'}}>
			<div className="px-7 py-10">
				<PublicTitle id="projects" caption="Projects" />
			</div>
		</div>
	);
};

export default ProjectsSection;
