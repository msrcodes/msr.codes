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
				secondary: {
					DEFAULT: '#EE6C4D',
				},
				tertiary: {
					DEFAULT: '#63B0CD',
				},
				dark: {
					DEFAULT: '#39393A',
				},
			},
		},
	},
	plugins: [
		// eslint-disable-next-line global-require
		require('@tailwindcss/typography'),
	],
}
