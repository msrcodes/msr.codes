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
				layout: 'auto auto',
				layoutm: 'auto auto auto',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
