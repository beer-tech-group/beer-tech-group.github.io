const { fontFamily, default: theme } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'montserrat': ['Montserrat'],
				'oswald': ['Oswald'],
			}
		},
		fontFamily: {
			sans: ['Montserrat', ...fontFamily.sans]
		},
		fontSize: {
			sm: '1rem',
			base: '1.25rem',
			xl: '1.563rem',
			'2xl': '1.953rem',
			'3xl': '2.441rem',
			'4xl': '3.052rem',
			'5xl': '4.052rem',
		},
		typography: {
			DEFAULT: {
				css: {
					h1: {
						fontFamily: 'Oswald'
					},
					h3: {
						fontFamily: 'Oswald'
					}
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
