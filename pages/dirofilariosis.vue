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
		<div>{{ $t('map_ref_dirofilariosis_p1') }}</div>
		<div class="mt-0.5">{{ $t('map_ref_dirofilariosis_p2') }}</div>
		<div class="mt-0.5">{{ $t('map_ref_dirofilariosis_p3') }}</div>
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
					{{ $t('banner_dirofilariosis_title') }}
				</div>
				
				<div class="text-brand-orange-dark leading-tight mt-5" v-html="$t('banner_dirofilariosis_content')" />
			</div>
		</div>
	</div>
</section>



<section class="about" 
	:style="{backgroundImage: 'url(/img/bg-dog-dirofilariosis.webp)'}">
	<div class="container-wrapper">
		<div class="grid gap-6 lg:grid-cols-12">

			<div class="lg:col-span-3">
				<IconHeart class="w-20 lg:w-40" :class_name="['fill-brand-orange-dark']" />
			</div>
			
			<div class="text-brand-orange-dark lg:col-span-9">
				<h3>{{ $t('dirofilariosis_about_title') }}</h3>
				
				<div class="leading-tight max-w-2xl mt-3">
					<p v-html="$t('dirofilariosis_about_p1')" />
					<p class="mt-3" v-html="$t('dirofilariosis_about_p2')" />
					<p class="mt-3" v-html="$t('dirofilariosis_about_p3')" />
					<p class="mt-3" v-html="$t('dirofilariosis_about_p4')" />
				</div>

				<div class="max-w-2xl mt-14">
					<div class="grid gap-7 sm:grid-cols-2 sm:place-items-start">
						
						<div>
							<div class="flex gap-x-6 items-center">
								<Users1 class="w-20 ml-2 md:w-24" color="#BF5A16"/>
								
								<div class="leading-tight font-medium flex-1 select-none" v-html="$t('acceso_usuarios')" />
							</div>

							<div class="mt-3 flex">
								<a href="https://mimascotayyo.elanco.com/es" target="_blank" class="btn">{{ $t('conocer_mas') }}</a>
							</div>
						</div>
						
						
						<div>
							<div class="flex gap-x-6 items-center">
								<Users2 class="w-20 ml-2 md:w-24" color="#BF5A16"/>

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