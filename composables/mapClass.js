import { Store } from '@/store/store.js'
import map_sections from '@/composables/mapClass/map-sections.js'
import mapContent from '@/composables/mapClass/map-content.js'


export default class Map{

	constructor(data){
		this.data = data
		this.init()
	}

	init(){
	}



	map(){
		let resp = `<svg 
									viewBox="0 0 907 665" 
									version="1.1" 
									xmlns="http://www.w3.org/2000/svg" 
									xmlns:xlink="http://www.w3.org/1999/xlink">
									${mapContent(this.data)}
									</svg>`

		return resp
	}


	mapActions(){
		const store = Store()

		map_sections.forEach((item, idx) => {
			const d = item.length < 2 ? this.data[item[0]] : this.data[item[0]][item[1]]
			const el = document.getElementById(d.id)

			if( el ) el.addEventListener('click', () => {
				// If has "no-selectable" class, then return
				if( el.classList.value.indexOf('no-selectable') > -1 ) return
				
				// Gets the class of the previous map section to restore default color
				if( store.map.id ){
					const { id, class_list } = store.map
					document.getElementById(id).classList.value = class_list
				}

				// Stores map ID and Class in store
				store.setMap(
					el.id, 
					el.classList.value
				)

				// Adds the active color for the map section
				let active_class = el.classList[1].split('-[')[1]
				active_class = active_class.replace(']', '')
				el.classList.value = `active fill-[${active_class}]`

				// Shows the information in the card
				store.setInfo({info_type: this.data.info_type, ...d})
				store.showInfo()
			})
		})

	}
}