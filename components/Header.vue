<script setup>
import { useI18n } from 'vue-i18n'
// import brand from `@/assets/img/elanco-es.svg` 
// import brand from `~/static/elanco-${i18n.locale}.svg`

const { locale, t } = useI18n()
const route = useRoute()


const route_name = route.name.split('___')

const info_title = computed(() => {
	return ({
		index: t('de_prevalencia_landing'),
		leishmaniosis: t('de_prevalencia_leishmaniosis'),
		angiostrongilosis: t('de_prevalencia_angiostrongilosis'),
		dirofilariosis: t('de_prevalencia_dirofilariosis')
	})[route_name[0]]
})
</script>




<template>
<div 
	class="main-header pt-5 relative z-30"
	:class="{'bg-transparent': 'index' === route_name[0], 'bg-white': 'index' !== route_name[0]}">
	<div class="container-wrapper">
		
		<div class="topbar">
			<div class="brand">
				<span class="sr-only">Elanco</span>
				<nuxt-link :to="localePath('/')">
					<img :src="`/img/elanco-${ $i18n.locale }.svg`" alt="Logotipo" />
				</nuxt-link>
			</div>

			<div class="lang-select">
				<nuxt-link 
					:disabled="$i18n.locale === 'es'"
					:class="{'active': $i18n.locale === 'es'}"
					:to="switchLocalePath('es')">ESP</nuxt-link>
				
				<span>|</span>
				
				<nuxt-link 
					:disabled="$i18n.locale === 'pt'"
					:class="{'active': $i18n.locale === 'pt'}"
					:to="switchLocalePath('pt')">PORT</nuxt-link>
			</div>
		</div>


		<div class="text-center pt-8 pb-5 md:pb-10 lg:pb-16">
      <nuxt-link :to="localePath('/')">
			  <h1 class="main-title">{{ $t('mapa_elanco') }}</h1>
      </nuxt-link>
			<div class="info-title" v-html="info_title"></div>

				<!-- {{ $t("de prevalencia de") }} 
				<strong>{{ $i18n.locale === 'es' ? 'Leishmaniosis' : 'Leishmaniose' }}</strong>
				{{ $t("en España") }}<sup>1</sup> {{ $t("y Portugal") }}<sup>2</sup> -->
		</div>

	</div>
</div>
</template>




<style lang="scss" scoped>
.topbar{
	@apply flex justify-between items-center;
}

.brand{
	@apply w-[120px] relative z-30 sm:w-[150px];
}

.lang-select{
	@apply text-gray-300 text-sm leading-none font-bold
						flex gap-x-1.5 z-30 select-none;

	a{
		@apply text-gray-300;
	}

	.active{
		@apply text-brand-blue;
	}
}

.main-title{
	@apply text-brand-blue text-5xl font-bold italic mx-auto select-none 
						md:text-6xl;
}

.info-title{
	@apply text-brand-blue-dark text-lg leading-tight mx-auto mt-4 select-none 
						sm:w-auto sm:text-xl md:text-2xl;
}


.social-block{
	box-shadow: -3px 0px 13px rgba(0,0,0,.2);
}
</style>