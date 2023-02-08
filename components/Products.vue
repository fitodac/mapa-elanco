<script setup>
// text-red-700
</script>


<template>
<section id="products">
	<div class="container-wrapper">

		<div class="products-title">{{ $t('products_title') }}</div>

		<div class="grid gap-x-20 gap-y-10 md:grid-cols-2 lg:gap-x-32 xl:gap-x-40
								max-w-md pt-6 mx-auto md:pt-10 md:max-w-4xl">
			
			<div class="text-center">
				<img 
					src="img/prod-seresto.webp" 
					alt="Seresto collar anti pulgas"
					class="w-11/12 mx-auto">

				<img 
					src="img/logo-seresto.svg" 
					alt="logo Seresto"
					class="w-40 mx-auto">

				<div 
					v-html="$t('seresto_description')" 
					class="product-description" />

				<div class="mt-5 md:mt-10">
					<nuxt-link class="btn" href="#" target="_blank">{{ $t('conocer_mas') }}</nuxt-link>
				</div>
			</div>



			<div class="text-center">

				<img 
					src="img/prod-advantix.webp" 
					alt="Advantix pipeta"
					class="w-11/12 mx-auto"/>

				<img 
					src="img/logo-advantix.svg" 
					alt="logo Advantix"
					class="w-40 mx-auto">

				<div 
					v-html="$t('advantix_description')" 
					class="product-description" />

				<div class="mt-5 md:mt-10">
					<nuxt-link class="btn" href="#" target="_blank">{{ $t('conocer_mas') }}</nuxt-link>
				</div>
			</div>

		</div>



	</div>
</section>
</template>


<style scoped>
#products{
	@apply pt-14 pb-10 lg:pt-20;
}

.products-title{
	@apply text-brand-blue text-xl font-bold leading-none text-center 
						sm:text-2xl sm:leading-none
						lg:text-3xl lg:leading-none;
}

.product-description{
	@apply text-gray-600 mt-3 lg:text-lg;
}

.product-description strong{ @apply font-extrabold; }


.btn{
	@apply bg-brand-blue text-white text-sm font-bold leading-none text-center px-16 py-3 mx-auto inline-block rounded-full;
}
</style>