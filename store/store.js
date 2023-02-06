import { defineStore } from 'pinia'

export const Store = defineStore('main', {
	state: () => ({
		info: {
			title: null,
			leishmaniosis: null,
			dirofilariosis: null,
			angiostrongilosis: null,
			type: null,
		},
		showing_info: false,
		map: {
			id: null,
			class_list: null
		}
	}),


	getters: {
		getInfo( state ){
			const resp = {...state.info, showing_info: state.showing_info}
			return resp
		}
	},


	actions: {
		
		setInfo(data){
			this.info.title = data.title
			this.info.leishmaniosis = data.leishmaniosis
			this.info.dirofilariosis = data.dirofilariosis
			this.info.angiostrongilosis = data.angiostrongilosis
			this.info.type = data.info_type
		},

		showInfo(){ 
			document.getElementById('mainWrapper').classList.add('blur-sm')
			this.showing_info = true 
		},


		hideInfo(){ 
			this.showing_info = false 
			document.getElementById('mainWrapper').classList.remove('blur-xs')
			this.setInfo({
				title: null,
				leishmaniosis: null,
				dirofilariosis: null,
				angiostrongilosis: null,
				type: null
			})
		},

		resetMap(){
			this.map = {
				id: null,
				class_list: null
			}

			this.hideInfo()
		},

		setMap(id, class_list){
			this.map.id = id
			this.map.class_list = class_list
		},

		restoreMap(){
			document.querySelectorAll(`#${this.map.id} > path`).forEach(p => {
				p.classList.value = this.map.class_list
			})
		}
	}
})