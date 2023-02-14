<script setup>
const route = useRoute(),
			route_name = computed(() => route.name.split('__')[0])
</script>


<template>
<section class="main-footer">
	<div class="container-wrapper">

		<div class="flex justify-center">
			<div class="brand">
				<span class="sr-only">Elanco</span>
				<img :src="`/img/elanco-${ $i18n.locale }.svg`" alt="Logotipo" />
			</div>
		</div>

		<div class="flex justify-center mt-10">
			<img 
				src="/img/expertos-en-antiparasitarios.svg" 
				alt="Expertos en antiparasitarios" 
				class="w-[200px] md:w-[280px]" />
		</div>

		<div 
			v-if="'leishmaniosis' === route_name"
			class="text-gray-400 text-[12px] text-center 
							max-w-xl mx-auto mt-7">
			Si desea informar un evento adverso o una reclamación de producto, comuníquese con un profesional de la salud (por ejemplo: su veterinario o farmacéutico) o contáctenos a través de: a.healthcare@meisys.es
		</div>

	</div>

	<div class="footer-secondary">
		<div class="container-wrapper">
			<div v-if="'leishmaniosis' === route_name">
				<div v-html="$t('leishmaniosis_footer_seresto_info')" />
				<div v-html="$t('leishmaniosis_footer_advantix_info')" />
				<div v-html="$t('elanco_animal_health')" />
			</div>

			<div v-if="'dirofilariosis' === route_name">
				<div v-html="$t('elanco_animal_health')" />
			</div>
			<div>&copy; Elanco PM-ES-22-0463</div>
		</div>
	</div>
</section>
</template>


<style scoped>
.main-footer{
	@apply pt-20;
}

.brand{
	@apply w-32 mx-auto md:w-40;
}

.footer-secondary{
	background: #EBEBEB;
	@apply text-gray-500 text-xs font-medium text-center py-4 mt-10;
}
</style>