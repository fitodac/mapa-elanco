<script setup>
import { Store } from '@/store/store.js'


const store = Store()

const info = computed(() => store.getInfo)

const card_header_class = ref([])
const card_header_bg = ref('rgb(156 163 175 / 1)')


watch(info, val => {

	card_header_bg.value = ({
		full: '#913393',
		angiostrongilosis: val.angiostrongilosis?.color,
		dirofilariosis: val.dirofilariosis?.color,
		leishmaniosis: val.leishmaniosis?.color
	})[val.type]

	// console.table('info', info.value)
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
</script>



<template>
<div 
	v-if="store.showing_info"
	class="card-info-wrapper">
	<div class="card">
			
		<div 
			class="card-header"
			:style="{background: card_header_bg}">
			<div class="flex justify-end">
				<button class="card--btn-close" @click="close">&times;</button>
			</div>

			<div class="card-title">{{ info.title }}</div>
			<div v-if="info.type !== 'full'" class="card-alert">{{ info[info.type].alert }}</div>
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
							de prevalencia*
						</div>
						<div class="card-body--section--info">(porcentaje de perros infectados con <span class="italic">leishmania infantum</span>).</div>
					</div>

					<div v-else class="leading-none flex-1">No disponemos de datos de prevalencia sobre esta zona.</div>
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
							:style="{color: info.dirofilariosis?.color}">de prevalencia*</div>
						<div class="card-body--section--info">(porcentaje de perros infectados con <span class="italic">dirofilaria immitis</span>).</div>
					</div>

					<div v-else class="leading-none flex-1">No disponemos de datos de prevalencia sobre esta zona.</div>
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
							:style="{color: info.angiostrongilosis?.color}">de prevalencia*</div>
						<div class="card-body--section--info">(porcentaje de perros infectados con <span class="italic">angiostrongylus vasorum</span>).</div>
					</div>

					<div v-else class="leading-none flex-1">No disponemos de datos de prevalencia sobre esta zona.</div>
				</div>
			</div>



			<div class="text-xs leading-tight text-center mt-6">
				<span>
					<strong>Consulta a tu veterinario</strong> <br>
					el antiparasitario más adecuado <br>
					antes de viajar.
				</span>
			</div>

			<img 
				v-if="'leishmaniosis' === info.type"
				src="/img/seresto-advantix.svg" 
				alt="Seresto - Advantix" 
				class="w-48 mx-auto my-3">


			<div v-if="show_info"
				class="text-gray-400 text-[9px] leading-none text-center mt-3">
				<span>
					*Teniendo en cuenta que los perros se 
					desplazan de unas zonas a otras, no se 
					puede descartar que aparezcan nuevos 
					casos de la enfermedad en zonas donde 
					actualmente no existe.
				</span>
			</div>

			<div 
				v-if="store.isPortugal"
				class="text-gray-400 text-[9px] leading-none text-center mt-2">
				<span>
					**Con un 0,66 % de los perros examinados positivos en ambos ELISA, 
					la prevalencia en Portugal es aparentemente mayor que la encontrada 
					para Alemania (Schnyder et al. 2013a) o Polonia (Schnyder et al. 2013b) 
					y menor que en Hungría (Schnyder et al. 2015a), Reino Unido 
					(Schnyder et al. 2013a) e Italia (Guardone et al. 2013), 
					pero no significativamente.
				</span>
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