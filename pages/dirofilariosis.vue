<script setup>
import Map from '@/components/maps/Dirofilariosis'
import IconMap from '@/components/icons/Map'
import IconHeart from '@/components/icons/Heart'
import Users1 from '@/components/icons/Users1'
import Users2 from '@/components/icons/Users2'
</script>


<template>
<Navbar />
<Map />

<section class="info-bar">
	<div class="container-wrapper">
		<div>
			1. Causada por dirofilaria immitis.
		</div>
		<div class="mt-0.5">
			2. Montoya-Alonso, J.A.; Morchón, R.; García-Rodriguez, S.N.; Falcón-Cordón, Y.; Costa-Rodríguez, N.; Matos, J.I.; Escolar, I.R.; Carretón, E. Expansion of Canine Heartworm in Spain. Animals 2022, 12, 1268. https://doi.org/10.3390/ani12101268.
		</div>
		<div class="mt-0.5">
			3. Alho A. M., Meireles J., Belo S., Madeira de Carvalho L., “Dirofilariose Canina e Felina, uma Parasitose em Evolução (I) – Etiologia, Biologia e Epidemiologia” in Clinica Animal, 2014, (2):20-25
		</div>
	</div>
</section>


<section class="py-10 md:py-12 lg:py-16">
	<div class="container-wrapper">
		<div class="grid gap-6 sm:grid-cols-12 md:items-center">
			
			<div class="sm:col-span-2 lg:col-span-3">
				<IconMap 
					class="w-16 mx-auto sm:w-20 sm:m-0 md:w-32 lg:w-40"
					pin_color="#BF5A16"
					path1_color="#F7AA77"
					path2_color="#ED8325"
					path3_color="#F7AA77" />
			</div>


			<div class="sm:col-span-10 md:col-span-9 md:col-start-4 lg:col-span-9">
				<div class="text-brand-orange-dark text-lg leading-tight font-semibold 
											sm:text-xl sm:leading-none 
											lg:text-2xl lg:leading-tight">
					Consulta en el Mapa Elanco la prevalencia de dirofilariosis de tu zona o del lugar al que tienes pensado viajar con tu peludo.
				</div>
				
				<div class="text-brand-orange-dark leading-tight mt-5">
          <strong>Si el lugar seleccionado es de zona 5, significa que el porcentaje de riesgo de infección es muy alto</strong>. En el resto de zonas el riesgo es menor pero sigue existiendo, por lo que no debes olvidar proteger a tu mascota con antiparasitarios adecuados. <strong>Pregunta a tu veterinario</strong>.
				</div>
			</div>
		</div>
	</div>
</section>



<section class="about" 
	:style="{backgroundImage: 'url(img/bg-dog-dirofilariosis.webp)'}">
	<div class="container-wrapper">
		<div class="grid gap-6 lg:grid-cols-12">

			<div class="lg:col-span-3">
				<IconHeart class="w-20 lg:w-40" :class_name="['fill-brand-orange-dark']" />
			</div>
			
			<div class="text-brand-orange-dark lg:col-span-9">
				<h3>Sobre la dirofilariosis</h3>
				
				<div class="leading-tight max-w-2xl mt-3">
					<p>
						La <i>dirofilaria immitis</i> es un nematodo parásito que causa la enfermedad del gusano del corazón.
					</p>
					<p class="mt-3">
						La enfermedad del gusano del corazón, causada por la <i>dirofilaria immitis</i>, es una enfermedad grave y potencialmente mortal en perros que puede dejar secuelas permanentes en el animal.
					</p>

					<p class="mt-3">
						Los principales signos de presencia del gusano del corazón en perros son: tos, letargo o inactividad, reducción del apetito o pérdida de peso e insuficiencia cardíaca.
					</p>

					<p class="mt-3">
            Debido a factores como el cambio climático, España es uno de los países del sur de Europa donde el riesgo de infección en perros domésticos es <strong>moderado/alto</strong> y la dirofilariosis se ha ido extendiendo a nuevos territorios en los últimos años.
					</p>
				</div>

				<div class="max-w-2xl mt-14">
					<div class="grid gap-7 sm:grid-cols-2 sm:place-items-start">
						
						<div>
							<div class="flex gap-x-6 items-center">
								<Users1 class="w-20 ml-2 md:w-24" color="#BF5A16"/>
								
								<div class="leading-tight font-medium flex-1 select-none">Si tienes una<br class="hidden md:block"/> mascota, accede aquí.</div>
							</div>

							<div class="mt-3 flex">
								<a href="https://mimascotayyo.elanco.com/es" target="_blank" class="btn">Conocer más</a>
							</div>
						</div>
						
						
						<div>
							<div class="flex gap-x-6 items-center">
								<Users2 class="w-20 ml-2 md:w-24" color="#BF5A16"/>

								<div class="leading-tight font-medium flex-1 select-none">Veterinario,<br class="hidden md:block"/> accede aquí.</div>
							</div>

							<div class="mt-3 flex">
								<a href="https://vetconecta.elanco.com/" target="_blank" class="btn">Conocer más</a>
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
	background: #BF5A16;
	font-size: .65rem;
	@apply text-orange-100 leading-tight text-opacity-70 py-4;
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
	@apply bg-brand-orange-dark text-white text-sm font-bold 
						leading-none w-52 max-w-xs px-8 py-3 flex justify-center 
						transition-all rounded-full
						hover:opacity-80;
}
</style>