/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "ui-serif", "Georgia"],
			},
			colors: {
				primary: "#000000",
				secondary: {
					base: "#FFFFFF",
					darker: "#C2C2C2",
				},

				accent: {
					50: "#ebedff",
					100: "#d7dbff",
					200: "#afb7ff",
					300: "#8894ff",
					400: "#6070ff",
					500: "#384cff",
					600: "#2d3dcc",
					700: "#222e99",
					800: "#161e66",
					900: "#0b0f33",
				},
				complementary: {
					50: "#ebf7ff",
					100: "#d7efff",
					200: "#afdfff",
					300: "#88d0ff",
					400: "#60c0ff",
					500: "#38b0ff",
					600: "#2d8dcc",
					700: "#226a99",
					800: "#164666",
					900: "#0b2333",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
