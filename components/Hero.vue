<template>
<section class="hero">
	<div class="container-wrapper">

		<div class="grid gap-8 max-w-2xl mx-auto text-center select-none">
			<div class="">
				<img src="/img/world.svg" alt="Mundo" class="w-10 mx-auto"/>
			</div>

			<div class="intro-primary">
				Debido al cambio climático, los parásitos y las enfermedades 
				que transmiten, se pueden expandir a zonas donde 
				no se encontraban anteriormente.
			</div>

			<div class="intro-secondary">
				Desde Elanco nos preocupamos y trabajamos día a día para garantizar la salud y bienestar de tu mascota.
			</div>
		</div>

	</div>
</section>

<div class="bg-[#00558F] h-3"></div>
</template>


<style scoped>
.hero{
	background: url('/img/hero.webp') no-repeat bottom center / cover;
	@apply -mt-60 py-72 relative z-10;
}
.intro-primary{
	@apply text-brand-blue-dark text-xl leading-tight;
}

.intro-secondary{
	@apply text-brand-blue text-xl font-bold leading-tight italic mt-4;
}
</style>