<script setup>
import { Store } from '@/store/store.js'
import { useWindowSize } from '@vueuse/core'


const store = Store()
const route = useRoute()

const { width, height } = useWindowSize()

watch(route, val => store.resetMap() )
</script>



<template>
<div id="mainWrapper">
	<Header />
	<NuxtPage />
	<Footer />
</div>

<CardInfo v-if="width <= 768" />
</template>


<style scoped>
#mainWrapper{
	max-width: 1900px;
	margin: 0 auto;
}
</style>