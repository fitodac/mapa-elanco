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

	</div>

	<div class="footer-secondary">
		<div class="container-wrapper">
			<div>&copy; Elanco  dPM-ES-22-0463</div>
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