const { fontFamily, default: theme } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				secondary: '#f4b11f'
			},
			borderColor: {
				primary: '#000',
				secondary: '#f4b11f'
			},
			colors: {
				primary: '#000',
				secondary: '#f4b11f',
				secondaryAlt: '#e7a619'
			},
			fontFamily: {
				'montserrat': ['Montserrat'],
				'oswald': ['Oswald'],
				'cutive': ['Cutive Mono', 'monospace']
			},
			height: {
				'half-screen': '50vh'
			}
		},
		fontFamily: {
			sans: ['Montserrat', ...fontFamily.sans],
			mono: ['Cutive Mono', ...fontFamily.mono]
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
						fontFamily: 'Oswald',
						fontSize: '4.052rem'
					},
					h2: {
						fontFamily: 'Oswald',
						fontSize: '3.052rem'
					},
					h3: {
						fontFamily: 'Oswald',
						fontSize: '1.563rem'
					},
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
