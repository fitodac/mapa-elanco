<script setup>
import { Store } from '@/store/store.js'
import { storeToRefs } from 'pinia'
import Map from '@/composables/mapClass.js'
import map_data from '@/composables/map-angiostrongilosis.js'
import { useWindowSize } from '@vueuse/core'

const store = Store()
const { showing_info } = storeToRefs(store)
const map = new Map(map_data)
const mapSVG = ref(null)
const { width, height } = useWindowSize()


onMounted(() => {
	mapSVG.value.innerHTML = map.map()
	map.mapActions()
})
</script>

<template>
<section class="map-section">
	<div class="container-wrapper">
		<div class="grid md:grid-cols-12">
		
			<div class="md:col-span-4 lg:col-span-3">
				<div class="map-data">
					<div v-if="!showing_info"
						class="flex gap-5 md:grid md:gap-3">
						<div>
							<img src="/img/compass.svg" alt="Brújula" class="w-10 pt-2">
						</div>

						<div class="flex-1 md:text-sm lg:text-2xl">{{ $t('map_info_angiostrongilosis') }}</div>
					</div>

					<CardInfo v-if="width > 768" />
				</div>
			</div>
			


			<div class="md:col-span-8 lg:col-span-9">
				<div class="map-wrapper">
					<div id="map" ref="mapSVG" />
				</div>
			</div>

		</div>
	</div>
</section>
</template>


<style scoped>
.map-data{
	@apply bg-brand-green text-white text-sm leading-tight 
						h-full px-10 py-7 relative
						md:pt-20 md:pb-10 md:text-base 
						lg:flex lg:items-center;
						background: rgb(1, 154, 78);
}

.map-section{ @apply bg-brand-green; }


@media (min-width: 768px){

	.map-section{
		background: linear-gradient(90deg, rgba(1,154,78,1) 25%, rgba(243,243,243,1) 25%);
	}

	.map-data{
		box-shadow: none;
	}

}


@media (min-width: 2300px){

	.map-section{
		background: linear-gradient(90deg, rgba(1,154,78,1) 35%, rgba(243,243,243,1) 35%);
	}

}
</style>