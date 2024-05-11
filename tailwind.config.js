/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'bright-orange': '#e38826',
				'dark-cyan': '#006970',
				'very-dark-cyan': '#004241',
				'transparent-white': '#ffffffbf',
				'very-light-gray': '#f2f2f2',
			},
		},
	},
	plugins: [],
}
