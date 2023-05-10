import Link from "next/link";

const PublicFooter = () => {
	return (
		<footer className="relative z-50 bg-slate-800 text-white">
			<div className="p-7">Footer</div>
			<div className="border-t border-slate-700 px-7 py-1.5 text-center text-xs text-slate-300">
				Copyright &copy; <span className="text-primary">WebRoyalty</span>{" "}
				2022-2023 - All Rights Reserved |{" "}
				<Link href="https://storyset.com/work">
					Work illustrations by <span className="text-primary">Storyset</span>
				</Link>
			</div>
		</footer>
	);
};

export default PublicFooter;
