import PublicTitle from "./PublicTitle";
import SectionContainer from "./SectionContainer";
import Image from "next/image";

const WorkSection = () => {
	return (
		<div className="relative z-10 bg-white px-20">
			<SectionContainer>
				<PublicTitle id="work" caption="What I do best" />
				<div className="flex gap-x-4 text-sm">
					<div className="w-full rounded-sm bg-gradient-to-br from-primary-dark to-primary p-4 text-slate-300 shadow shadow-primary">
						<h2 className="text-lg font-bold text-white">Web Applications</h2>
						<div className="flex justify-end">
							<ul className="list-disc pl-4 pt-10">
								<li>
									Everything in{" "}
									<strong className="text-white">one place</strong>
								</li>
								<li>
									<strong className="text-white">Fast and Powerful</strong>{" "}
									Applications
								</li>
								<li>Functionnality tailored to your needs</li>
								<li>
									<strong className="text-white">Low Maintenance</strong> Apps
								</li>
								<li>
									Fully <strong className="text-white">secure</strong>
								</li>
								<li>
									Important{" "}
									<strong className="text-white">business metrics</strong> at
									fingers length
								</li>
							</ul>
							<Image
								src="/app.svg"
								width={300}
								height={300}
								alt="Finance app"
							/>
						</div>
						<div className="pt-4">
							Our speciality is designing web applications. We know that a lot
							of businesses rely on spreadsheets and/or a multitude of specific
							applications to run properly. At WebRoyalty we take great pride in
							bringing all these technologies to one single tailored "web hub"
							where you'll have access to all the tools you need to maximize
							your productivity.
						</div>
					</div>
					<div className="w-full rounded-sm bg-gradient-to-br from-slate-700 to-slate-600 p-4 text-slate-300 shadow shadow-slate-700">
						<h2 className="text-lg font-bold text-white">Websites</h2>

						<div className="flex justify-end">
							<ul className="list-disc pl-4 pt-10">
								<li>
									Fully <strong className="text-white">responsive</strong>{" "}
									designs
								</li>
								<li>
									<strong className="text-white">Beautiful and modern</strong>{" "}
									websites
								</li>
								<li>
									Search Engine Optimization{" "}
									<strong className="text-white">(SEO)</strong>
								</li>
								<li>
									<strong className="text-white">Animations & 3D</strong> using
									FramerMotion and Three.js
								</li>
								<li>
									Powerful addvertisement using{" "}
									<strong className="text-white">Google AddSense</strong>
								</li>
								<li>
									Website <strong className="text-white">analytics</strong>
								</li>
							</ul>
							<Image
								src="/website.svg"
								width={300}
								height={300}
								alt="Website building"
							/>
						</div>
						<div className="pt-4">
							Our job is to make sure your business stands out. Therefore, we
							work with great designers to build beautiful and modern websites.
							We make sure that your websites are not only beautiful but does
							bring significant results! We put extra efforts into SEO, and
							Google AddSense to maximize trafic to your website.
						</div>
					</div>
				</div>
			</SectionContainer>
		</div>
	);
};

export default WorkSection;
