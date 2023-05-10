import { Btn } from "~/app/components/core/btn";
import { FaArrowDown } from "react-icons/fa";
import { SiIndeed, SiGithub } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
	return (
		<div
			className="border-t border-slate-700 bg-slate-800 px-7 py-32 text-white"
			style={{ height: "calc(80vh)" }}
		>
			<div className="flex h-full gap-x-20 px-20">
				<div className="-mt-20 flex h-full w-1/2 flex-col justify-center gap-y-10">
					<h1 className="text-5xl font-extrabold">
						Hi! I&apos;m Dereck, <br /> Your web developer.
					</h1>
					<h3 className="max-w-prose text-sm leading-relaxed text-slate-300">
						I help people & businesses achieve a{" "}
						<strong className="bg-primary/40 px-1 text-white">
							strong online presence
						</strong>{" "}
						with
						<strong className="bg-primary/40 px-1 text-white">
							beautiful modern websites
						</strong>
						, aswell as, building{" "}
						<strong className="bg-primary/40 px-1 text-white">
							tailored web applications
						</strong>
						that increase productivity, and reduce management costs.
					</h3>
					<div className="flex items-center gap-x-4">
						<Btn variant={"primary"} size={"lg"}>
							Let&apos;s chat! <FaArrowDown />
						</Btn>
						<Link
							href="#"
							title="Indeed"
							className="px-2 py-1 hover:text-primary-dark"
						>
							<SiIndeed className="text-3xl" />
						</Link>
						<Link
							href="#"
							title="Github"
							className="px-2 py-1 hover:text-primary-dark"
						>
							<SiGithub className="text-3xl" />
						</Link>
					</div>
				</div>
				<div className="relative flex w-1/2 justify-end">
					<div className="fixed -mt-24 flex gap-x-4">
						<div className="z-0 flex w-80 flex-col gap-y-4 pt-24">
							<div className="flex flex-col items-center rounded-sm bg-gradient-to-br from-primary-dark to-primary p-4 pb-6 shadow shadow-primary">
								<Image
									src="/responsive_designs.svg"
									width={230}
									height={230}
									alt="Landing Image Programming"
								/>
								<h4 className="-mt-6 text-xl font-semibold text-white">
									Fully Responsive Designs
								</h4>
								<div className="text-center text-sm text-slate-300">
									Websites that look as great on your 80&quot; TV as on your
									8&quot; phone guaranteed!
								</div>
							</div>
						</div>
						<div className="z-0 flex w-80 flex-col gap-y-4">
							<div className="flex flex-col items-center rounded-sm bg-gradient-to-br from-slate-700 to-slate-600 p-4 pb-6 shadow shadow-slate-700">
								<Image
									src="/all_in_one.svg"
									width={250}
									height={250}
									alt="Landing Image Programming"
								/>
								<h4 className="-mt-6 text-xl font-semibold text-white">
									Everything In One Place
								</h4>
								<div className="text-center text-sm text-slate-300">
									Replace those infinite spreadsheets and multiple apps with one
									single hub!
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
