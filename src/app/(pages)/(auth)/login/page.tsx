import { NextPage } from "next";
import { SignIn } from "@clerk/nextjs";

const LoginPage: NextPage = () => {
	return (
		<div>
			<SignIn afterSignInUrl="/admin" />
		</div>
	);
};

export default LoginPage;
