import PublicTitle from "./PublicTitle";
import SectionContainer from "./SectionContainer";

const ContactSection = () => {
	return (
		<div className="px-20" style={{ height: "600px" }}>
			<SectionContainer>
				<PublicTitle id="contact" caption="Let's chat!" />
			</SectionContainer>
		</div>
	);
};

export default ContactSection;
