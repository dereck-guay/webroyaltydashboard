const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: ["Poppins", "ui-serif", "Georgia"],
		},
		colors: {
			...colors,
			primary: "#4169e1",
			"primary-dark": "#3759bf",
		},
		extend: {},
	},
	plugins: [],
};
