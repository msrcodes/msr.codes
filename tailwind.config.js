module.exports = {
	purge: ['/src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
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
