import data from '@/composables/map-data'

const map_data = {
	color: '#BFDCF1', // fill-[#BFDCF1]
	active: '#BFDCF1', // hover:fill-[#BFDCF1]
	circles: true,
	info_type: 'leishmaniosis',
	...JSON.parse(JSON.stringify(data))
}

// Alava
map_data.alava.color = map_data.alava.leishmaniosis.color
map_data.alava.active = map_data.alava.leishmaniosis.color
map_data.alava.circle = map_data.circles

// Albacete
map_data.albacete.color = map_data.albacete.leishmaniosis.color
map_data.albacete.active = map_data.albacete.leishmaniosis.color
map_data.albacete.circle = map_data.circles

// Alicante
map_data.alicante.color = map_data.alicante.leishmaniosis.color
map_data.alicante.active = map_data.alicante.leishmaniosis.color
map_data.alicante.circle = map_data.circles

// Almeria
map_data.almeria.color = map_data.almeria.leishmaniosis.color
map_data.almeria.active = map_data.almeria.leishmaniosis.color
map_data.almeria.circle = map_data.circles

// Asturias
map_data.asturias.color = map_data.asturias.leishmaniosis.color
map_data.asturias.active = map_data.asturias.leishmaniosis.color
map_data.asturias.circle = map_data.circles

// Avila
map_data.avila.color = map_data.avila.leishmaniosis.color
map_data.avila.active = map_data.avila.leishmaniosis.color
map_data.avila.circle = map_data.circles

// Badajoz
map_data.badajoz.color = map_data.badajoz.leishmaniosis.color
map_data.badajoz.active = map_data.badajoz.leishmaniosis.color
map_data.badajoz.circle = map_data.circles



// Baleares - Ibiza
map_data.baleares.ibiza.color = map_data.baleares.ibiza.leishmaniosis.color
map_data.baleares.ibiza.active = map_data.baleares.ibiza.leishmaniosis.color
map_data.baleares.ibiza.circle = map_data.circles

// Baleares - Mallorca
map_data.baleares.mallorca.color = map_data.baleares.mallorca.leishmaniosis.color
map_data.baleares.mallorca.active = map_data.baleares.mallorca.leishmaniosis.color
map_data.baleares.mallorca.circle = map_data.circles

// Baleares - Menorca
map_data.baleares.menorca.color = map_data.baleares.menorca.leishmaniosis.color
map_data.baleares.menorca.active = map_data.baleares.menorca.leishmaniosis.color
map_data.baleares.menorca.circle = map_data.circles

// Barcelona
map_data.barcelona.color = map_data.barcelona.leishmaniosis.color
map_data.barcelona.active = map_data.barcelona.leishmaniosis.color
map_data.barcelona.circle = map_data.circles

// Burgos
map_data.burgos.color = map_data.burgos.leishmaniosis.color
map_data.burgos.active = map_data.burgos.leishmaniosis.color
map_data.burgos.circle = map_data.circles

// Cáceres
map_data.caceres.color = map_data.caceres.leishmaniosis.color
map_data.caceres.active = map_data.caceres.leishmaniosis.color
map_data.caceres.circle = map_data.circles

// Cádiz
map_data.cadiz.color = map_data.cadiz.leishmaniosis.color
map_data.cadiz.active = map_data.cadiz.leishmaniosis.color
map_data.cadiz.circle = map_data.circles

// Canarias - Hierro
map_data.canarias.hierro.color = map_data.canarias.hierro.leishmaniosis.color
map_data.canarias.hierro.active = map_data.canarias.hierro.leishmaniosis.color
map_data.canarias.hierro.circle = map_data.circles

// Canarias - Palma
map_data.canarias.palma.color = map_data.canarias.palma.leishmaniosis.color
map_data.canarias.palma.active = map_data.canarias.palma.leishmaniosis.color
map_data.canarias.palma.circle = map_data.circles

// Canarias - La Gomera
map_data.canarias.gomera.color = map_data.canarias.gomera.leishmaniosis.color
map_data.canarias.gomera.active = map_data.canarias.gomera.leishmaniosis.color
map_data.canarias.gomera.circle = map_data.circles

// Canarias - Tenerife
map_data.canarias.tenerife.color = map_data.canarias.tenerife.leishmaniosis.color
map_data.canarias.tenerife.active = map_data.canarias.tenerife.leishmaniosis.color
map_data.canarias.tenerife.circle = map_data.circles

// Canarias - Gran Canaria
map_data.canarias.gran_canaria.color = map_data.canarias.gran_canaria.leishmaniosis.color
map_data.canarias.gran_canaria.active = map_data.canarias.gran_canaria.leishmaniosis.color
map_data.canarias.gran_canaria.circle = map_data.circles

// Canarias - Fuerteventura
map_data.canarias.fuerteventura.color = map_data.canarias.fuerteventura.leishmaniosis.color
map_data.canarias.fuerteventura.active = map_data.canarias.fuerteventura.leishmaniosis.color
map_data.canarias.fuerteventura.circle = map_data.circles

// Canarias - Lanzarote
map_data.canarias.lanzarote.color = map_data.canarias.lanzarote.leishmaniosis.color
map_data.canarias.lanzarote.active = map_data.canarias.lanzarote.leishmaniosis.color
map_data.canarias.lanzarote.circle = map_data.circles

// Cantabria
map_data.cantabria.color = map_data.cantabria.leishmaniosis.color
map_data.cantabria.active = map_data.cantabria.leishmaniosis.color
map_data.cantabria.circle = map_data.circles

// Castellón
map_data.castellon.color = map_data.castellon.leishmaniosis.color
map_data.castellon.active = map_data.castellon.leishmaniosis.color
map_data.castellon.circle = map_data.circles

// Ceuta
map_data.ceuta.color = '#D1D5DB'
map_data.ceuta.active = '#D1D5DB'
map_data.ceuta.circle = map_data.circles

// Ciudad Real
map_data.ciudad_real.color = map_data.ciudad_real.leishmaniosis.color
map_data.ciudad_real.active = map_data.ciudad_real.leishmaniosis.color
map_data.ciudad_real.circle = map_data.circles

// Cordoba
map_data.cordoba.color = map_data.cordoba.leishmaniosis.color
map_data.cordoba.active = map_data.cordoba.leishmaniosis.color
map_data.cordoba.circle = map_data.circles

// Cuenca
map_data.cuenca.color = map_data.cuenca.leishmaniosis.color
map_data.cuenca.active = map_data.cuenca.leishmaniosis.color
map_data.cuenca.circle = map_data.circles

// Girona
map_data.girona.color = map_data.girona.leishmaniosis.color
map_data.girona.active = map_data.girona.leishmaniosis.color
map_data.girona.circle = map_data.circles

// Granada
map_data.granada.color = map_data.granada.leishmaniosis.color
map_data.granada.active = map_data.granada.leishmaniosis.color
map_data.granada.circle = map_data.circles

// Guadalajara
map_data.guadalajara.color = map_data.guadalajara.leishmaniosis.color
map_data.guadalajara.active = map_data.guadalajara.leishmaniosis.color
map_data.guadalajara.circle = map_data.circles

// Guipúzcoa
map_data.guipuzcoa.color = map_data.guipuzcoa.leishmaniosis.color
map_data.guipuzcoa.active = map_data.guipuzcoa.leishmaniosis.color
map_data.guipuzcoa.circle = map_data.circles

// Huelva
map_data.huelva.color = map_data.huelva.leishmaniosis.color
map_data.huelva.active = map_data.huelva.leishmaniosis.color
map_data.huelva.circle = map_data.circles

// Huesca
map_data.huesca.color = map_data.huesca.leishmaniosis.color
map_data.huesca.active = map_data.huesca.leishmaniosis.color
map_data.huesca.circle = map_data.circles

// Jaen
map_data.jaen.color = map_data.jaen.leishmaniosis.color
map_data.jaen.active = map_data.jaen.leishmaniosis.color
map_data.jaen.circle = map_data.circles

// La Coruña
map_data.lacoruna.color = map_data.lacoruna.leishmaniosis.color
map_data.lacoruna.active = map_data.lacoruna.leishmaniosis.color
map_data.lacoruna.circle = map_data.circles

// La Rioja
map_data.larioja.color = map_data.larioja.leishmaniosis.color
map_data.larioja.active = map_data.larioja.leishmaniosis.color
map_data.larioja.circle = map_data.circles

// León
map_data.leon.color = map_data.leon.leishmaniosis.color
map_data.leon.active = map_data.leon.leishmaniosis.color
map_data.leon.circle = map_data.circles

// Lerida
map_data.lerida.color = map_data.lerida.leishmaniosis.color
map_data.lerida.active = map_data.lerida.leishmaniosis.color
map_data.lerida.circle = map_data.circles

// Lugo
map_data.lugo.color = map_data.lugo.leishmaniosis.color
map_data.lugo.active = map_data.lugo.leishmaniosis.color
map_data.lugo.circle = map_data.circles

// Madrid
map_data.madrid.color = map_data.madrid.leishmaniosis.color
map_data.madrid.active = map_data.madrid.leishmaniosis.color
map_data.madrid.circle = map_data.circles

// Málaga
map_data.malaga.color = map_data.malaga.leishmaniosis.color
map_data.malaga.active = map_data.malaga.leishmaniosis.color
map_data.malaga.circle = map_data.circles

// Melilla
map_data.melilla.color = '#D1D5DB'
map_data.melilla.active = '#D1D5DB'
map_data.melilla.circle = map_data.circles

// Murcia
map_data.murcia.color = map_data.murcia.leishmaniosis.color
map_data.murcia.active = map_data.murcia.leishmaniosis.color
map_data.murcia.circle = map_data.circles

// Navarra
map_data.navarra.color = map_data.navarra.leishmaniosis.color
map_data.navarra.active = map_data.navarra.leishmaniosis.color
map_data.navarra.circle = map_data.circles

// Orense
map_data.orense.color = map_data.orense.leishmaniosis.color
map_data.orense.active = map_data.orense.leishmaniosis.color
map_data.orense.circle = map_data.circles

// Palencia
map_data.palencia.color = map_data.palencia.leishmaniosis.color
map_data.palencia.active = map_data.palencia.leishmaniosis.color
map_data.palencia.circle = map_data.circles

// Pontevedra
map_data.pontevedra.color = map_data.pontevedra.leishmaniosis.color
map_data.pontevedra.active = map_data.pontevedra.leishmaniosis.color
map_data.pontevedra.circle = map_data.circles

// Salamanca
map_data.salamanca.color = map_data.salamanca.leishmaniosis.color
map_data.salamanca.active = map_data.salamanca.leishmaniosis.color
map_data.salamanca.circle = map_data.circles

// Segovia
map_data.segovia.color = map_data.segovia.leishmaniosis.color
map_data.segovia.active = map_data.segovia.leishmaniosis.color
map_data.segovia.circle = map_data.circles

// Sevilla
map_data.sevilla.color = map_data.sevilla.leishmaniosis.color
map_data.sevilla.active = map_data.sevilla.leishmaniosis.color
map_data.sevilla.circle = map_data.circles

// Soria
map_data.soria.color = map_data.soria.leishmaniosis.color
map_data.soria.active = map_data.soria.leishmaniosis.color
map_data.soria.circle = map_data.circles

// Tarragona
map_data.tarragona.color = map_data.tarragona.leishmaniosis.color
map_data.tarragona.active = map_data.tarragona.leishmaniosis.color
map_data.tarragona.circle = map_data.circles

// Teruel
map_data.teruel.color = map_data.teruel.leishmaniosis.color
map_data.teruel.active = map_data.teruel.leishmaniosis.color
map_data.teruel.circle = map_data.circles

// Toledo
map_data.toledo.color = map_data.toledo.leishmaniosis.color
map_data.toledo.active = map_data.toledo.leishmaniosis.color
map_data.toledo.circle = map_data.circles

// Valencia
map_data.valencia.color = map_data.valencia.leishmaniosis.color
map_data.valencia.active = map_data.valencia.leishmaniosis.color
map_data.valencia.circle = map_data.circles

// Valladolid
map_data.valladolid.color = map_data.valladolid.leishmaniosis.color
map_data.valladolid.active = map_data.valladolid.leishmaniosis.color
map_data.valladolid.circle = map_data.circles

// Vizcaya
map_data.vizcaya.color = map_data.vizcaya.leishmaniosis.color
map_data.vizcaya.active = map_data.vizcaya.leishmaniosis.color
map_data.vizcaya.circle = map_data.circles

// Zamora
map_data.zamora.color = map_data.zamora.leishmaniosis.color
map_data.zamora.active = map_data.zamora.leishmaniosis.color
map_data.zamora.circle = map_data.circles

// Zaragoza
map_data.zaragoza.color = map_data.zaragoza.leishmaniosis.color
map_data.zaragoza.active = map_data.zaragoza.leishmaniosis.color
map_data.zaragoza.circle = map_data.circles

// Vilana do Castelo
map_data.vilana_do_costelo.color = map_data.vilana_do_costelo.leishmaniosis.color
map_data.vilana_do_costelo.active = map_data.vilana_do_costelo.leishmaniosis.color
map_data.vilana_do_costelo.circle = map_data.circles

// Braga
map_data.braga.color = map_data.braga.leishmaniosis.color
map_data.braga.active = map_data.braga.leishmaniosis.color
map_data.braga.circle = map_data.circles

// Villareal
map_data.villareal.color = map_data.villareal.leishmaniosis.color
map_data.villareal.active = map_data.villareal.leishmaniosis.color
map_data.villareal.circle = map_data.circles

// Bragança
map_data.braganca.color = map_data.braganca.leishmaniosis.color
map_data.braganca.active = map_data.braganca.leishmaniosis.color
map_data.braganca.circle = map_data.circles

// Guarda
map_data.guarda.color = map_data.guarda.leishmaniosis.color
map_data.guarda.active = map_data.guarda.leishmaniosis.color
map_data.guarda.circle = map_data.circles

// Viseu
map_data.viseu.color = map_data.viseu.leishmaniosis.color
map_data.viseu.active = map_data.viseu.leishmaniosis.color
map_data.viseu.circle = map_data.circles

// Porto
map_data.porto.color = map_data.porto.leishmaniosis.color
map_data.porto.active = map_data.porto.leishmaniosis.color
map_data.porto.circle = map_data.circles

// Aveiro
map_data.aveiro.color = map_data.aveiro.leishmaniosis.color
map_data.aveiro.active = map_data.aveiro.leishmaniosis.color
map_data.aveiro.circle = map_data.circles

// Coimbra
map_data.coimbra.color = map_data.coimbra.leishmaniosis.color
map_data.coimbra.active = map_data.coimbra.leishmaniosis.color
map_data.coimbra.circle = map_data.circles

// Fig. da Foz
map_data.fig_da_foz.color = map_data.fig_da_foz.leishmaniosis.color
map_data.fig_da_foz.active = map_data.fig_da_foz.leishmaniosis.color
map_data.fig_da_foz.circle = map_data.circles

// Castelo Branco
map_data.castelo_branco.color = map_data.castelo_branco.leishmaniosis.color
map_data.castelo_branco.active = map_data.castelo_branco.leishmaniosis.color
map_data.castelo_branco.circle = map_data.circles

// Leiria
map_data.leiria.color = map_data.leiria.leishmaniosis.color
map_data.leiria.active = map_data.leiria.leishmaniosis.color
map_data.leiria.circle = map_data.circles

// Lisboa
map_data.lisboa.color = map_data.lisboa.leishmaniosis.color
map_data.lisboa.active = map_data.lisboa.leishmaniosis.color
map_data.lisboa.circle = map_data.circles

// Santárem
map_data.santarem.color = map_data.santarem.leishmaniosis.color
map_data.santarem.active = map_data.santarem.leishmaniosis.color
map_data.santarem.circle = map_data.circles

// Portalegre
map_data.portalegre.color = map_data.portalegre.leishmaniosis.color
map_data.portalegre.active = map_data.portalegre.leishmaniosis.color
map_data.portalegre.circle = map_data.circles

// Évora
map_data.evora.color = map_data.evora.leishmaniosis.color
map_data.evora.active = map_data.evora.leishmaniosis.color
map_data.evora.circle = map_data.circles

// Setúbal
map_data.setubal.color = map_data.setubal.leishmaniosis.color
map_data.setubal.active = map_data.setubal.leishmaniosis.color
map_data.setubal.circle = map_data.circles

// Beja
map_data.beja.color = map_data.beja.leishmaniosis.color
map_data.beja.active = map_data.beja.leishmaniosis.color
map_data.beja.circle = map_data.circles

// Algarve
map_data.algarve.color = map_data.algarve.leishmaniosis.color
map_data.algarve.active = map_data.algarve.leishmaniosis.color
map_data.algarve.circle = map_data.circles

// Madeira
map_data.islas_portugal.madeira.color = '#D1D5DB' // fill-[#D1D5DB]
map_data.islas_portugal.madeira.active = '#D1D5DB'
map_data.islas_portugal.madeira.circle = map_data.circles

// Açores
map_data.islas_portugal.acores.color = '#D1D5DB'
map_data.islas_portugal.acores.active = '#D1D5DB'
map_data.islas_portugal.acores.circle = map_data.circles

// Portugal
map_data.portugal = { stroke: 'rgba(0,66,102,.6)' }


map_data.mosquito = true




export default map_data