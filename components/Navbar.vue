<script setup>
import Mosquito from '@/components/icons/Mosquito'
import Heart from '@/components/icons/Heart'
import Lungs from '@/components/icons/Lungs'
const route = useRoute()
const router = useRouter()

const rn = route.name.split('___')
</script>


<template>
<div class="pt-6 flex justify-center items-end lg:justify-between">
	
	<div class="social">
		<span class="text-brand-blue text-sm font-medium leading-none">{{ $t('siguenos') }}</span>
		<a 
			href="https://www.instagram.com/mimascotayyo_es/" 
			target="_blank"
			alt="instagram">
			<img src="/img/social-ig.svg" class="w-6" alt="facebook" />
		</a>
		<a 
			href="https://www.facebook.com/MiMascotaYYoES" 
			target="_blank"
			alt="facebook">
			<img src="/img/social-fb.svg" class="w-6" alt="facebook" />
		</a>
		<a 
			href="https://twitter.com/MiMascotaYYo_ES" 
			target="_blank"
			alt="twitter">
			<img src="/img/social-tt.svg" class="w-6" alt="facebook" />
		</a>
	</div>





	<div class="menu">
		<nuxt-link 
			:to="localePath('leishmaniosis')" 
			class="menu-link menu-link-blue group"
			:class="{'active': (rn[0] === 'leishmaniosis')}">
			
			<Mosquito 
				class="w-12" 
				:class_name="[
					'w-12 group-hover:fill-white',
					(rn[0] === 'leishmaniosis') ? 'fill-white': 'fill-brand-blue'
				]" />
			<span class="hidden">{{ $t('prevalencia_leishmaniosis') }}</span>
		</nuxt-link>

		<nuxt-link 
			:to="localePath('dirofilariosis')" 
			class="menu-link menu-link-orange group"
			:class="{'active': (rn[0] === 'dirofilariosis')}">
			<Heart 
				class="w-12" 
				:class_name="[
					'w-12 group-hover:fill-white',
					(rn[0] === 'dirofilariosis') ? 'fill-white': 'fill-brand-orange'
				]" />
			<span class="hidden">{{ $t('prevalencia_dirofilariosis') }}</span>
		</nuxt-link>

		<nuxt-link 
			:to="localePath('angiostrongilosis')" 
			class="menu-link menu-link-green group"
			:class="{'active': (rn[0] === 'angiostrongilosis')}">
			<Lungs 
				class="w-12" 
				:class_name="[
					'w-12 group-hover:fill-white',
					(rn[0] === 'angiostrongilosis') ? 'fill-white': 'fill-brand-green'
				]" />
			<span class="hidden">{{ $t('prevalencia_angiostrongilosis') }}</span>
		</nuxt-link>
	</div>
</div>
</template>



<style scoped>
.social{
	@apply px-8 py-5 hidden items-center gap-x-2 rounded-tr-lg select-none 
					lg:flex;
	box-shadow: 3px -2px 10px rgba(0,0,0,.3);
}

.social a{
	@apply transition-all hover:opacity-80;
}





.menu{
	@apply flex gap-x-1.5 lg:mr-2;
}

.menu-link{
	@apply border text-sm underline font-medium leading-none px-5 pt-3 
					pb-2 transition-all select-none rounded-t-xl 
				hover:text-white hover:no-underline;
	border-bottom: none;
}

.menu-link > svg{ @apply md:hidden; }
.menu-link > span{ @apply hidden md:block; }




.menu-link-blue{
	@apply border-brand-blue text-brand-blue hover:bg-brand-blue;
}

.menu-link-blue.active{
	@apply bg-brand-blue text-white;
}




.menu-link-orange{
	@apply border-brand-orange text-brand-orange hover:bg-brand-orange;
}

.menu-link-orange.active{
	@apply bg-brand-orange text-white;
}




.menu-link-green{
	@apply border-brand-green text-brand-green hover:bg-brand-green;
}

.menu-link-green.active{
	@apply bg-brand-green text-white;
}
</style>