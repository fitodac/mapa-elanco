<script setup>
import Map from '@/components/maps/Landing'
</script>


<template>
	<Hero />

	<section>
		<div class="container-wrapper">
			<div class="intro" v-html="$t('landing_map_intro')"/>
		</div>
	</section>

	<Navbar />
	<Map />
	<InnerPagesNav />
</template>


<style scoped>
.intro{
	@apply text-brand-blue-dark text-lg leading-tight text-center pt-20 pb-14 md:text-xl;
}
</style>