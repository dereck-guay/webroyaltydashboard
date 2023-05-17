import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
	title: "WebRoyalty",
	description:
		"Hi, I'm Dereck, your web developer. This is my porfolio website, feel free to contact me if you have great website/web apps ideas.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
