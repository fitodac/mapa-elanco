<script setup>
import Map from '@/components/maps/Landing'
</script>


<template>
	<Hero />

	<section>
		<div class="container-wrapper">
			<div class="intro">
				En este mapa encontrarás la prevalencia de <strong>enfermedades como la leishmaniosis, dirofilariosis y angiostrongilosis  en cada región de España y en Portugal.</strong> Si deseas más información sobre cada una de las enfermedades, más abajo podrás informarte.
			</div>
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