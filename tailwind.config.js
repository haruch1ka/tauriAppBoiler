/** @type {import('tailwindcss').Config} */
import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import daisyui from "daisyui";
const customColors = {
	hedder: {
		100: "#8DAF00",
	},
	background: {
		100: "#F9F2D7",
	},
	mono: {
		100: "#edeeee",
		200: "#e5e5e6",
		300: "#9e9e9f",
		500: "#231815",
	},
};
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,html,hbs,astr,astro}"],
	theme: {
		extend: {
			colors: customColors,
			padding: {
				3.5: "0.875rem",
				7.5: "1.875rem",
				11.5: "2.875rem",
			},
			height: {
				11.5: "2.875rem",
			},
			fontWeight: {
				thin: 100,
				extralight: 200,
				light: 300,
				normal: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
				extrabold: 800,
				black: 900,
			},
			fontSize: {
				"1.5xl": ["1.25rem", "1.75rem"],
				"2.5xl": ["1.75rem", "2.25rem"],
				"4xl": ["2.25rem", "2.5rem"],
			},
			borderRadius: {
				"2.5xl": "1.25rem",
				"4xl": "2rem",
			},
			borderWidth: {
				3: "0.1875rem",
			},
			animation: {
				"scale-up-ver-center": "scale-up-ver-center 0.4s cubic-bezier(0.165, 0.840, 0.440, 1.000) 3.1s 3 both",
			},
			keyframes: {
				"scale-up-ver-center": {
					"0%": {
						transform: "scaleY(0)",
					},
					to: {
						transform: "scaleY(1)",
					},
				},
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["light"],
	},
};
