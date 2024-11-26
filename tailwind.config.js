/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/preline/preline.js'],

	theme: {
		extend: {
			keyframes: {
				loading: {
					'0%, 80%, 100%': {
						height: '0.75rem'
					},
					'40%': {
						height: '4rem'
					}
				}
			},
			animation: {
				loading: 'loading 1200ms ease-in-out infinite'
			}
		}
	},

	plugins: [require('preline/plugin')],

	darkMode: 'class'
};
