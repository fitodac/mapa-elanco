/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {

			colors: {
				brand: {
					blue: {
						DEFAULT: '#0072CE',
						dark: '#002F6C',
						light: '#5DA4DA',
						lighter: '#BFDCF1'
					},
					purple: '#913393',
					orange: {
						DEFAULT: '#ED8325',
						dark: '#BF5A16',
						darker: '#9B0808'
					},
					lima: '#C0DC02',
					green: {
						DEFAULT: '#019A4E',
						dark: '#02431D',
						light: '#A5CA7B',
						lighter: '#9B0808'
					}
				}
			}
		},
  },
  plugins: [],
}
