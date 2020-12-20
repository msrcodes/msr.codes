module.exports = {
	purge: ['./src/**/*.jsx'],
	darkMode: 'media',
	theme: {
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
		extend: {
			gridTemplateColumns: {
				layout: '1fr 2fr',
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
