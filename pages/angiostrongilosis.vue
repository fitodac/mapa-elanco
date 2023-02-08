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
		<div>{{ $t('map_ref_angiostrongilosis_p1') }}</div>
		<div class="mt-0.5">{{ $t('map_ref_angiostrongilosis_p2') }}</div>
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
					{{ $t('banner_angiostrongilosis_title') }}
				</div>
				
				<div class="text-green-blue-dark leading-tight mt-5" v-html="$t('banner_angiostrongilosis_content')"/>
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
				<h3>{{ $t('angiostrongilosis_about_title') }}</h3>
				
				<div class="leading-tight max-w-2xl mt-3">
					<p v-html="$t('angiostrongilosis_about_p1')" />
					<p class="mt-3" v-html="$t('angiostrongilosis_about_p2')" />
				</div>

				<div class="max-w-2xl mt-14">
					<div class="grid gap-7 sm:grid-cols-2 sm:place-items-start">
						
						<div>
							<div class="flex gap-x-6 items-center">
								<Users1 class="w-20 ml-2 md:w-24" color="#02431D"/>
								
								<div class="leading-tight font-medium flex-1 select-none" v-html="$t('acceso_usuarios')" />
							</div>

							<div class="mt-3 flex">
								<a href="https://mimascotayyo.elanco.com/es" target="_blank" class="btn">{{ $t('conocer_mas') }}</a>
							</div>
						</div>
						
						
						<div>
							<div class="flex gap-x-6 items-center">
								<Users2 class="w-20 ml-2 md:w-24" color="#02431D"/>

								<div class="leading-tight font-medium flex-1 select-none" v-html="$t('acceso_veterinarios')" />
							</div>

							<div class="mt-3 flex">
								<a href="https://vetconecta.elanco.com/" target="_blank" class="btn">{{ $t('conocer_mas') }}</a>
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