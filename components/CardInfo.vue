<script setup>
import { Store } from '@/store/store.js'

const store = Store()
const { locale, t } = useI18n()

const info = computed(() => store.getInfo)
const card_header_bg = ref('rgb(156 163 175 / 1)')
const card_header_style = ref(null)
const card_header_stripe = ref(null)


watch(info, val => {

	card_header_bg.value = ({
		full: '#913393',
		angiostrongilosis: val.angiostrongilosis?.color,
		dirofilariosis: val.dirofilariosis?.color,
		leishmaniosis: val.leishmaniosis?.color
	})[val.type]

	card_header_stripe.value = ({
		full: 'rgba(255, 255, 255, .2)',
		angiostrongilosis: 'rgb(0, 64, 4, .3)',
		dirofilariosis: 'rgba(255, 255, 255, .2)',
		leishmaniosis: 'rgba(0,66,102,.3)',
	})[val.type]

	card_header_style.value = { backgroundColor: card_header_bg }

	if( 'portugal' === info.value.country ){
		card_header_style.value.backgroundImage = `linear-gradient(142deg, ${card_header_stripe.value} 10.71%, ${card_header_bg.value} 10.71%, ${card_header_bg.value} 50%, ${card_header_stripe.value} 50%, ${card_header_stripe.value} 60.71%, ${card_header_bg.value} 60.71%, ${card_header_bg.value} 100%)`
	}

})


const close = () => {
	const { id, class_list } = store.map
	document.getElementById(id).classList.value = class_list
	store.resetMap()
}


const show_info = computed(() => {
	if( info.value.type === 'full' ) return true
	if( info.value[info.value.type].value ) return true
	return false
})

const leishmaniosis_text_red = computed(() => {
	if( 'leishmaniosis' === info.value.type && '¡Alerta!' === info.value.leishmaniosis.alert ) return 'red-alert'
	if( 'angiostrongilosis' === info.value.type && '>3%' === info.value.angiostrongilosis.value ) return 'red-alert'
	return ''
})


const getAlert = val => {
	return ({
		'¡Precaución!': t('caution'),
		'¡Alerta!': t('alert')
	})[val]
}
</script>



<template>
<div 
	v-if="store.showing_info"
	class="card-info-wrapper">
	<div class="card">
			
		<div class="card-header" :style="card_header_style">
			<div class="flex justify-end">
				<button class="card--btn-close" @click="close">&times;</button>
			</div>

			<div 
				class="card-title" 
				:class="[leishmaniosis_text_red]">
				{{ info.title }}
			</div>
			
			<div 
				v-if="info.type !== 'full'" 
				class="card-alert" 
				:class="[leishmaniosis_text_red]">
				{{ getAlert(info[info.type].alert) }}
			</div>
		</div>



		<div class="card-body">
			<div class="grid gap-y-4">


				<div 
					v-if="'leishmaniosis' === info.type || 'full' === info.type"
					class="card-body--section">
					<div class="w-16">
						<img src="/img/mosquito.svg" alt="leishmaniosis" class="w-16">
					</div>

					<div v-if="info.leishmaniosis?.value" class="flex-1">
						<div 
							class="card-body--section--title" 
							:style="{color: info.leishmaniosis?.color}">
							{{ info.leishmaniosis?.value }}
						</div>
						<div 
							class="card-body--section--subtitle"
							:style="{color: info.leishmaniosis?.color}">
							{{ $t('of_prevalence') }}
						</div>
						<div class="card-body--section--info" v-html="$t('leishmaniosis_percent_of_dogs_infected')" />
					</div>

					<div v-else class="leading-none flex-1">{{ $t('no_data') }}</div>
				</div>



				<div 
					v-if="'dirofilariosis' === info.type || 'full' === info.type"
					class="card-body--section">
					<div class="w-16">
						<img src="/img/heart.svg" alt="dirofilariosis" class="w-11 mx-auto">
					</div>

					<div v-if="info.dirofilariosis?.value" class="flex-1">
						<div 
							class="card-body--section--title"
							:style="{color: info.dirofilariosis?.color}">{{ info.dirofilariosis?.value }}</div>
						<div 
							class="card-body--section--subtitle"
							:style="{color: info.dirofilariosis?.color}">
							{{ $t('of_prevalence') }}
						</div>
						<div class="card-body--section--info" v-html="$t('dirofilariosis_percent_of_dogs_infected')" />
					</div>

					<div v-else class="leading-none flex-1">{{ $t('no_data') }}</div>
				</div>



				<div 
					v-if="'angiostrongilosis' === info.type || 'full' === info.type"
					class="card-body--section">
					<div class="w-16">
						<img src="/img/lungs.svg" alt="angiostrongilosis" class="w-11 mx-auto">
					</div>

					<div v-if="info.angiostrongilosis?.value" class="flex-1">
						<div 
							class="card-body--section--title"
							:style="{color: info.angiostrongilosis?.color}">{{ info.angiostrongilosis?.value }}</div>
						<div 
							class="card-body--section--subtitle"
							:style="{color: info.angiostrongilosis?.color}">
							{{ $t('of_prevalence') }}
						</div>
						<div class="card-body--section--info" v-html="$t('angiostrongilosis_percent_of_dogs_infected')" />
					</div>

					<div v-else class="leading-none flex-1">{{ $t('no_data') }}</div>
				</div>
			</div>



			<div class="text-xs leading-tight text-center mt-6">
				<span v-html="$t('consult_your_vet')" />
			</div>

			<img 
				v-if="'leishmaniosis' === info.type"
				src="/img/seresto-advantix.svg" 
				alt="Seresto - Advantix" 
				class="w-48 mx-auto my-3">


			<div v-if="show_info"
				class="text-gray-400 text-[9px] leading-none text-center mt-3">
				<span>{{ $t('info_1') }}</span>
			</div>

			<div 
				v-if="store.isPortugal"
				class="text-gray-400 text-[9px] leading-none text-center mt-2">
				<span>{{ $t('info_2') }}</span>
			</div>

		</div>
	</div>
</div>
</template>

<style scoped>
.card-info-wrapper{
	@apply bg-black bg-opacity-30 inset-0 fixed grid place-items-center z-50 
						md:bg-transparent md:place-items-start md:absolute md:inset-x-0 md:right-0 md:top-0;
}

.card{
	@apply border border-white w-11/12 max-w-sm md:w-full md:max-w-3xl;
}



.card-header{
	@apply bg-gray-400 px-5 pt-2 pb-3 select-none;
	background-size: 14px 12px;
}

.card-header-landing{
	@apply bg-brand-purple;
}


.card-title{
	@apply text-white text-3xl text-center font-extrabold leading-tight -mt-4;
}


.card-alert{
	@apply text-white text-xl text-center font-bold leading-none;
}

.card-title.red-alert,
.card-alert.red-alert{ 
	@apply text-red-600; 
}



.card-body{
	@apply bg-white text-gray-600 text-sm leading-tight px-5 py-7 select-none;
}

.card-body--section{
	@apply flex gap-x-3;
}

.card-body--section--title{
	@apply text-4xl font-black whitespace-nowrap;
}

.card-body--section--subtitle{
	@apply font-medium leading-none tracking-wide mt-2;
}

.card-body--section--info{
	@apply text-xs leading-tight mt-1;
}

.card--btn-close{
	@apply text-white text-2xl leading-none w-7 h-7 p-0 -mr-3 inline-block;
}
</style>