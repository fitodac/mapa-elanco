<script setup>
import Map from '@/components/maps/Leishmaniosis'
import IconMap from '@/components/icons/Map'
import IconMosquito from '@/components/icons/Mosquito'
import Users1 from '@/components/icons/Users1'
import Users2 from '@/components/icons/Users2'
</script>


<template>
<Navbar />
<Map />

<section class="info-bar">
	<div class="container-wrapper">
		<div>
			1. Gálvez R, Montoya A, Cruz I, et al. Latest trends in Leishmania infantum infection in dogs in Spain, Part I: mapped seroprevalence and sand fly distributions. Parasit Vectors. 2020;13(1):204. Published 2020 Apr 21. doi:10.1186/s13071-020-04081-7
		</div>
		<div class="mt-0.5">
			2. Maia C. et al., “Primeiro relatório regular da LEISHnet ONLeish – Observatório Nacional das Leishmanioses”, pag. 22-26. Janeiro-Fevereiro 2011 Veterinary Medicine.
		</div>
	</div>
</section>




<section class="py-10 md:py-12 lg:py-16">
	<div class="container-wrapper">
		<div class="grid gap-6 sm:grid-cols-12 md:items-center">
			
			<div class="sm:col-span-2 lg:col-span-3">
				<IconMap 
					class="w-16 mx-auto sm:w-20 sm:m-0 md:w-32 lg:w-40"
					pin_color="#094266"
					path1_color="#85BCE5"
					path2_color="#0073C8"
					path3_color="#85BCE5" />
			</div>


			<div class="sm:col-span-10 md:col-span-9 md:col-start-4 lg:col-span-9">
				<div class="text-brand-blue-dark text-lg leading-tight font-semibold 
											sm:text-xl sm:leading-none 
											lg:text-2xl lg:leading-tight">
					Consulta en el Mapa Elanco la prevalencia de leishmaniosis de tu zona o del lugar al que tienes pensado viajar con tu peludo.
				</div>
				
				<div class="text-brand-blue-dark leading-tight mt-5">
					Si el lugar seleccionado es de zona 4, significa que el porcentaje de riesgo de infección es muy alto. En el resto de zonas el riesgo es menor pero sigue existiendo, por lo que no debes olvidar proteger a tu mascota con antiparasitarios adecuados.
				</div>
			</div>
		</div>
	</div>
</section>



<section class="about" 
	:style="{backgroundImage: 'url(img/bg-dog-leishmaniosis.webp)'}">
	<div class="container-wrapper">
		<div class="grid gap-6 lg:grid-cols-12">

			<div class="lg:col-span-3">
				<IconMosquito class="w-20 lg:w-40" :class_name="['fill-brand-blue-dark']" />
			</div>
			
			<div class="lg:col-span-9">
				<h3>Sobre la leishmaniosis</h3>
				
				<div class="leading-tight max-w-2xl mt-3">
					<p>
						La leishmaniosis es una enfermedad grave e incurable, 
						que se puede originar tras la transmisión de leishmania 
						infantum por los flebotomos, unos insectos similares a 
						los mosquitos, que puede tener consecuencias fatales 
						para la salud de los perros si no se previene o se 
						diagnostica a tiempo.
					</p>
					<p class="mt-3">
						La presencia del flebotomo puede verse afectada por 
						el cambio climático y hacer que el riesgo de infección 
						esté presente en gran parte de España y Portugal la 
						mayor parte del año.
					</p>
				</div>

				<div class="max-w-2xl mt-14">
					<div class="grid gap-7 sm:grid-cols-2 sm:place-items-start">
						
						<div>
							<div class="flex gap-x-6 items-center">
								<Users1 class="w-20 ml-2 md:w-24" color="#094266"/>
								
								<div class="leading-tight font-medium flex-1 select-none">Si tienes una<br class="hidden md:block"/> mascota, accede aquí.</div>
							</div>

							<div class="mt-3 flex">
								<a href="#" class="btn">Conocer más</a>
							</div>
						</div>
						
						
						<div>
							<div class="flex gap-x-6 items-center">
								<Users2 class="w-20 ml-2 md:w-24" color="#094266"/>

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
	background: #004266;
	font-size: .65rem;
	@apply text-blue-100 leading-tight text-opacity-60 py-4;
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
	background: #094266;
	@apply text-white text-sm font-bold leading-none 
						w-52 max-w-xs px-8 py-3 flex justify-center 
						transition-all rounded-full
						hover:opacity-80;
}
</style>