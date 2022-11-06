/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		zIndex: {
			'1': '1',
			'10': '10',
			'max': '999999'
		},
		transitionDelay: {
			'0': '0s'
		},
		extend: {
			colors: {
				'black': '#1c1c1c',
				'white': '#F2F2F2',
				'mid': '#878787',
				'primary': '#8758FF',
			},
			fontFamily: {
				'poppins': ["Poppins", 'sans-serif'],
				'serif': ["PT Serif", 'serif']
			}
		},
	},
	plugins: [],
}
