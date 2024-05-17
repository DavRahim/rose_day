import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				leagueSpartan: ["var(--font-League_Spartan)"],
				roboto: ["var(--font-roboto)"],
			},
			backgroundColor: {
				primary: "#004F44",
				secondary: "#EFF7F5"
				
			},
			textColor: {
				primary: "#004F44",
				secondary: "#EFF7F5"
			},
			screens: {
				"1440px": "1440px",
				"1300px": "1300px",
				"1200px": "1200px",
				"1150px": "1150px",
				"991px": "991px",
				"800px": "800px",
				"400px": "400px",
			},
		},
		// screens: {
		// 	xl: { max: "1200px" },
		// 	lg: { max: "1080px" },
		// 	"md-lg": { max: "991px" },
		// 	md: { max: "768px" },
		// 	sm: { max: "576px" },
		// 	xs: { max: "480px" },
		// 	"2xs": { max: "340px" },
		// },
	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}
export default config
