import { Btn } from "~/app/components/core/btn";
import PublicTitle from "./PublicTitle";
import SectionContainer from "./SectionContainer";

const ProjectsSection = () => {
	return (
		<div className="relative z-10 bg-white px-20">
			<div className="px-7 py-10 pb-20">
				<PublicTitle id="projects" caption="Projects" />
				<div className="flex gap-x-8">
					<div className="h-full w-full rounded-sm border bg-slate-100 p-4">
						<div className="w-full" style={{ height: "350px" }}></div>
						<div className="flex items-center justify-between">
							<Btn>Github Code</Btn>
							<Btn>Live Example</Btn>
						</div>
					</div>
					<div className="h-full w-full rounded-sm border bg-slate-100 p-4">
						<div className="w-full" style={{ height: "350px" }}></div>
						<div className="flex items-center justify-between">
							<Btn>Github Code</Btn>
							<Btn>Live Example</Btn>
						</div>
					</div>
					<div className="h-full w-full rounded-sm border bg-slate-100 p-4">
						<div className="w-full" style={{ height: "350px" }}></div>
						<div className="flex items-center justify-between">
							<Btn>Github Code</Btn>
							<Btn>Live Example</Btn>
						</div>
					</div>
					<div className="h-full w-full rounded-sm border bg-slate-100 p-4">
						<div className="w-full" style={{ height: "350px" }}></div>
						<div className="flex items-center justify-between">
							<Btn>Github Code</Btn>
							<Btn>Live Example</Btn>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
