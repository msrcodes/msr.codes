module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'media',
	plugins: [
		// eslint-disable-next-line global-require
		require('@tailwindcss/typography'),
	],
}
