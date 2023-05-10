import { Btn } from "~/app/components/core/btn";
import PublicTitle from "./PublicTitle";
import SectionContainer from "./SectionContainer";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const AboutSection = () => {
	return (
		<div className="relative z-20 -mt-20 skew-y-3 bg-slate-800 px-20 pb-8 pt-20 text-slate-300">
			<SectionContainer>
				<div className="-skew-y-3">
					<div className="text-white">
						<PublicTitle id="about" caption="About me" />
					</div>
					<div className="flex">
						<div className="flex w-1/2 max-w-prose flex-col gap-y-8 text-sm">
							<div>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
								facilis aperiam dignissimos provident impedit officiis, beatae
								non, accusamus libero voluptas quibusdam repellendus qui eum
								maxime harum quae optio ex illum, aspernatur ab quos quis.
							</div>
							<div>
								Cupiditate, consequatur error non, eum quaerat eius odio dolores
								et fugiat vitae modi accusamus rerum, quia excepturi repudiandae
								minus dolorem ab. Corrupti porro earum laborum modi soluta
								architecto magnam ducimus, rem voluptate quos vero facere ullam!
							</div>
							<div>
								<Btn variant={"primary"} size={"lg"}>
									Checkout my projects
									<FaArrowDown />
								</Btn>
							</div>
						</div>
						<div className="w-1/2 pl-32">
							<div className="flex items-center justify-center rounded-sm bg-gradient-to-br from-primary-dark to-primary p-4 pb-6 shadow shadow-primary">
								<Image
									src="/about.svg"
									width={300}
									height={300}
									alt="Landing Image Programming"
								/>
							</div>
						</div>
					</div>
				</div>
			</SectionContainer>
		</div>
	);
};

export default AboutSection;
