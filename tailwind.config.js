module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				primary: {
					default: '#1C77C3',
				},
			},
		},
	},
	plugins: [
		// eslint-disable-next-line global-require
		require('@tailwindcss/typography'),
	],
}
