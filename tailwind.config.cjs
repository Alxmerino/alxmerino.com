/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'serif': ['Petrona', 'serif'],
				'body': ['Roboto Flex', 'sans-serif'] 
			}
		},
	},
	plugins: [],
}
