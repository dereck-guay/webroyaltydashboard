import PublicTitle from "./PublicTitle";
import SectionContainer from "./SectionContainer";

const WorkSection = () => {
	return (
		<div className="relative z-20">
			<SectionContainer>
				<PublicTitle id="work" caption="What I do best" />
			</SectionContainer>
		</div>
	);
};

export default WorkSection;
