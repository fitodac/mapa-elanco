import es from './es.js'
import pt from './pt.js'

export default {
	locales: [
		{
			code: 'es',
			name: 'Español'
		},
		{
			code: 'pt',
			name: 'Português'
		}
	],
	defaultLocale: 'es',
	vueI18n: {
		messages: {es, pt}
	}
}