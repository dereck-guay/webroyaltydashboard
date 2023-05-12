import { Btn } from "~/app/components/core/btn";
import PublicTitle from "./PublicTitle";
import SectionContainer from "./SectionContainer";

const ContactSection = () => {
	return (
		<div className="px-20">
			<SectionContainer>
				<PublicTitle id="contact" caption="Let's chat!" />
				<div className="flex gap-x-14">
					<div className="w-full rounded-sm bg-slate-100 p-4">
						<form action="">
							<div className="mb-2 flex flex-col gap-y-2">
								<label htmlFor="name">Full name</label>
								<input
									className="rounded border-slate-300 text-sm"
									id="name"
									type="text"
									placeholder="John Doe"
								/>
							</div>

							<div className="mb-2 flex flex-col gap-y-2">
								<label htmlFor="email">Email</label>
								<input
									id="email"
									className="rounded border-slate-300 text-sm"
									type="text"
									placeholder="johndoe@email.com"
								/>
							</div>

							<div className="mb-2 flex flex-col gap-y-2">
								<label htmlFor="subject">Subject</label>
								<div className="flex rounded border border-slate-300">
									<input
										className="w-full border-0 border-r border-slate-300 text-sm"
										type="text"
										id="subject"
										placeholder="Subject"
									/>
									<select className="w-full border-0 text-sm" id="type">
										<option value="-1">Website/Web Application</option>
										<option value="1">Website</option>
										<option value="2">Web Application</option>
									</select>
								</div>
							</div>

							<div className="mb-2 flex flex-col gap-y-2">
								<label htmlFor="content">Message</label>
								<textarea
									id="content"
									className="rounded border-slate-300 text-sm"
									rows={10}
									style={{ resize: "none" }}
									placeholder="I want to talk to you about my website/project"
								></textarea>
							</div>

							<Btn variant={"primary"} size={"lg"}>
								Send!
							</Btn>
						</form>
					</div>
					<div className="w-full"></div>
				</div>
			</SectionContainer>
		</div>
	);
};

export default ContactSection;
