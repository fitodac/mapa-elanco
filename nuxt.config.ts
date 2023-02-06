// https://nuxt.com/docs/api/configuration/nuxt-config
import i18n from './lang/i18n.js'


export default defineNuxtConfig({
	app: {
		head: {
			title: "Mapa Elanco",
			
			link: [
				{ rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon/favicon-16x16.png' },
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
				{ rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
				{ rel: 'manifest', href: '/favicon/site.webmanifest' }
			],
		},
		
		meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mapa Elanco' },
      { name: 'format-detection', content: 'telephone=yes' }
    ],
    
	},

	css: [
		'@/assets/css/main.scss'
  ],


	modules: [
		'@nuxtjs/i18n',
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@vueuse/nuxt',
	],


	buildModules: [
		['@nuxtjs/google-fonts', {
			prefetch: true,
			display: 'swap',
			families: { 'Fira+Sans': true }
		}]
	],


	i18n


})
