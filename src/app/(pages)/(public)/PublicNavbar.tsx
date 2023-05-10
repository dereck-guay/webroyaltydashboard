import { BsDatabaseFillGear } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import PublicNavbarLink from "./PublicNavbarLink";
import { SiIndeed, SiGithub } from "react-icons/si";
import Link from "next/link";

const PublicNavbar = () => {
	return (
		<nav className="flex h-14 items-center justify-between bg-slate-800 px-7 text-white">
			<Link href="/" className="flex w-full items-center gap-x-1">
				<span className="text-3xl text-primary">
					<BsDatabaseFillGear />
				</span>
				<div>
					<h1 className="font-semibold">Dereck Guay .dev</h1>
					<div className="-mt-1.5 text-xs text-slate-200">WebRoyalty</div>
				</div>
			</Link>
			<div className="flex w-full items-center justify-center gap-x-8">
				<PublicNavbarLink href="#">About</PublicNavbarLink>
				<PublicNavbarLink href="#">Skills</PublicNavbarLink>
				<PublicNavbarLink href="#">Work</PublicNavbarLink>
				<PublicNavbarLink href="#">Projects</PublicNavbarLink>
			</div>
			<div className="flex w-full items-center justify-end gap-x-8">
				<div className="flex items-center justify-end gap-x-4">
					<PublicNavbarLink href="#">
						<SiIndeed className="text-xl" />
					</PublicNavbarLink>
					<PublicNavbarLink
						href="https://github.com/dereck-guay"
						target="_blank"
					>
						<SiGithub className="text-xl" />
					</PublicNavbarLink>
				</div>
				<PublicNavbarLink isFill={true} href="#">
					Contact <FaPhone />
				</PublicNavbarLink>
			</div>
		</nav>
	);
};

export default PublicNavbar;
