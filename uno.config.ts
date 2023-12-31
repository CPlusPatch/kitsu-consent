import {
	defineConfig,
	presetUno,
	presetTypography,
	presetWebFonts,
} from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
	presets: [
		presetUno(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				"Poppins": {
					name: "Poppins",
					weights: [400, 500, 600, 700],
					provider: "google",
				},
				"Inter": {
					name: "Inter",
					weights: [400, 500, 600, 700],
					provider: "google"
				}
			},
		}),
		presetForms(),
	],
	rules: [
		// UnoCSS Rule for stroke-dashoffset
		[
			/^stroke-dashoffset-([.\d]+)$/,
			([_, num]) => ({ "stroke-dashoffset": num }),
		],
	],
	theme: {
		colors: {
			gray: {
				50: "#f7f7f8",
				100: "#ececf1",
				200: "#d9d9e3",
				300: "#c5c5d2",
				400: "#acacbe",
				500: "#8e8ea0",
				600: "#565869",
				700: "#40414f",
				800: "#343541",
				900: "#202123",
				950: "#050509",
			},
		},
		keyframes: {
			scrollLeft: {
				"0%": { transform: "translateX(0)" },
				"100%": { transform: "translateX(-100%)" },
			},
		},
	},
});
