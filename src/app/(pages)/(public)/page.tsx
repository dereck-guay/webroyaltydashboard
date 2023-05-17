import Image from "next/image";
import Link from "next/link";

const Home = () => {
	return (
		<>
			<main className="relative h-screen">
				<div className="absolute right-0 -z-10 h-full w-1/2 before:absolute before:block before:h-full before:w-full before:bg-gray-950/80">
					<Image
						src="/hero_image.png"
						width={0}
						height={0}
						sizes="100vw"
						style={{ width: "100%", height: "auto" }}
						alt="Hero Image"
					/>
				</div>
				<nav className="border-b border-gray-700">
					<div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
						<Image src="/logo.svg" height={60} width={100} alt="WebRoyalty" />
						<div className="flex items-center gap-x-8">
							<Link className="px-4 py-1 hover:text-white" href="about">
								ABOUT
							</Link>
							<Link className="px-4 py-1 hover:text-white" href="about">
								SERVICES
							</Link>
							<Link className="px-4 py-1 hover:text-white" href="about">
								PROJECTS
							</Link>
							<Link
								className="rounded bg-gradient-to-br from-accent-500 to-complementary-500 px-4 py-1 font-bold text-white hover:from-accent-600 hover:to-complementary-600"
								href="about"
							>
								GET IN TOUCH
							</Link>
						</div>
					</div>
				</nav>

				<div className="mx-auto h-full max-w-7xl py-32">
					<h5>Hi there!</h5>
					<h1 className="text-7xl font-bold text-white">
						I&apos;m{" "}
						<span className="bg-gradient-to-br from-accent-500 to-complementary-500 bg-clip-text text-transparent">
							Dereck
						</span>
						. <br />
						Your web developer
					</h1>
					<div className="max-w-prose py-10">
						I create <strong className="text-white">web applications</strong>{" "}
						for small businesses looking to provide online services or simply{" "}
						<strong className="text-white">increase</strong> their{" "}
						<strong className="text-white">productivity</strong>!
					</div>

					<Link
						className="rounded bg-gradient-to-br from-accent-500 to-complementary-500 px-4 py-1 font-bold text-white hover:from-accent-600 hover:to-complementary-600"
						href="about"
					>
						GET IN TOUCH
					</Link>
				</div>
			</main>
			<div
				style={{ height: "500px" }}
				className="bg-gradient-to-br from-accent-500 to-complementary-500"
			>
				Something
			</div>
		</>
	);
};

export default Home;
