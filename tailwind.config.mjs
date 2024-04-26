/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
                        aspectRatio: {
                                'a4': '21 / 30',
                        },
                },
	},
	plugins: [],
}
