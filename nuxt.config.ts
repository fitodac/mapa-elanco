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
				{ rel: 'manifest', href: '/favicon/site.webmanifest' },

				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com'
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: 'anonymous'
				},
				{ 
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
				}
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


	i18n


})
