module.exports = {
	purge: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#00aec6',
					dark: '#006977',
				},
				secondary: {
					DEFAULT: '#FFFFFF',
					dark: '#1F2945',
				},
				white: '#fff',
			},
			gridTemplateColumns: {
				layout: '1fr 5fr',
				layoutm: 'auto',
			},
			gridTemplateRows: {
				layout: '1fr auto',
				layoutm: 'auto 1fr auto',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
