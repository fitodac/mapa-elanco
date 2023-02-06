<script setup>
import Map from '@/components/maps/Angiostrongilosis'
import IconMap from '@/components/icons/Map'
import IconLungs from '@/components/icons/Lungs'
import Users1 from '@/components/icons/Users1'
import Users2 from '@/components/icons/Users2'
</script>


<template>
<Navbar />
<Map />

<section class="info-bar">
	<div class="container-wrapper">
		<div>
			1.Carretón, E.; Morchón, R.; García-Rodríguez, S.N.; Rodríguez-Escolar, I.; Matos, J.I.; Costa-Rodríguez, N.; Montoya-Alonso, J.A. Comprehensive Map of Canine Angiostrongylosis in Dogs in Spain. Animals 2022, 12, 2217. https://doi.org/10.3390/ani12172217.
		</div>
		<div class="mt-0.5">
			2. Alho A. M., Schnyder M., Schaper R., Meireles J., Belo S.,  Peter Deplazes P., Madeira de Carvalho L., “Seroprevalence of circulating Angiostrongylus vasorum antigen and parasite-specific antibodies in dogs from Portugal”,Parasitol Res (2016) 115:2567–2572
		</div>
	</div>
</section>


<section class="py-10 md:py-12 lg:py-16">
	<div class="container-wrapper">
		<div class="grid gap-6 sm:grid-cols-12 md:items-center">
			
			<div class="sm:col-span-2 lg:col-span-3">
				<IconMap 
					class="w-16 mx-auto sm:w-20 sm:m-0 md:w-32 lg:w-40"
					pin_color="#02431D"
					path1_color="#73BD42"
					path2_color="#019A4E"
					path3_color="#73BD42" />
			</div>


			<div class="sm:col-span-10 md:col-span-9 md:col-start-4 lg:col-span-9">
				<div class="text-green-blue-dark text-lg leading-tight font-semibold 
											sm:text-xl sm:leading-none 
											lg:text-2xl lg:leading-tight">
					Consulta en el Mapa Elanco la prevalencia de angiostrongilosis de tu zona o del lugar al que tienes pensado viajar con tu peludo.
				</div>
				
				<div class="text-green-blue-dark leading-tight mt-5">
					Si el lugar seleccionado es de zona 5, significa que el porcentaje de riesgo de infección es alto. En zonas con porcentajes más bajos el riesgo es menor pero sigue existiendo, por lo que no debes olvidar proteger a tu mascota con antiparasitarios adecuados. Pregunta a tu veterinario.
				</div>
			</div>
		</div>
	</div>
</section>



<section class="about" 
	:style="{backgroundImage: 'url(img/bg-dog-angiostrongilosis.webp)'}">
	<div class="container-wrapper">
		<div class="grid gap-6 lg:grid-cols-12">

			<div class="lg:col-span-3">
				<IconLungs class="w-20 lg:w-40" :class_name="['fill-brand-green-dark']" />
			</div>
			
			<div class="text-brand-green-dark lg:col-span-9">
				<h3>Sobre la angiostrongilosis</h3>
				
				<div class="leading-tight max-w-2xl mt-3">
					<p>
						El nematodo angiostrongylus vasorum es el agente causal de la angiostrongilosis canina, una enfermedad emergente en Europa que afecta a las arterias pulmonares y el ventrículo derecho del corazón.
					</p>
					<p class="mt-3">
						Afecta principalmente a animales salvajes, aunque estudios muestran evidencias de expansión de la enfermedad en perros.
					</p>
				</div>

				<div class="max-w-2xl mt-14">
					<div class="grid gap-7 sm:grid-cols-2 sm:place-items-start">
						
						<div>
							<div class="flex gap-x-6 items-center">
								<Users1 class="w-20 ml-2 md:w-24" color="#02431D"/>
								
								<div class="leading-tight font-medium flex-1 select-none">Si tienes una<br class="hidden md:block"/> mascota, accede aquí.</div>
							</div>

							<div class="mt-3 flex">
								<a href="#" class="btn">Conocer más</a>
							</div>
						</div>
						
						
						<div>
							<div class="flex gap-x-6 items-center">
								<Users2 class="w-20 ml-2 md:w-24" color="#02431D"/>

								<div class="leading-tight font-medium flex-1 select-none">Veterinario,<br class="hidden md:block"/> accede aquí.</div>
							</div>

							<div class="mt-3 flex">
								<a href="#" class="btn">Conocer más</a>
							</div>
						</div>

					</div>
				</div>
			</div>

		</div>
	</div>
</section>
</template>



<style scoped>
.info-bar{
	background: #02431D;
	font-size: .65rem;
	@apply text-green-100 leading-tight text-opacity-60 py-4;
}



.about{
	background-repeat: no-repeat; 
	background-position: center top;
	background-size: cover;
	background-attachment: fixed;
	color: #094266;
	@apply py-16;
}

.about h3{
	@apply text-xl font-bold leading-none lg:text-2xl;
}

.about .btn{
	@apply bg-brand-green-dark text-white text-sm font-bold 
						leading-none w-52 max-w-xs px-8 py-3 flex justify-center 
						transition-all rounded-full
						hover:opacity-80;
}
</style>