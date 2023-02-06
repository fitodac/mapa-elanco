// Spain
import africa from '@/composables/map/africa.js'
import alava from '@/composables/map/alava.js'
import albacete from '@/composables/map/albacete.js'
import alicante from '@/composables/map/alicante.js'
import almeria from '@/composables/map/almeria.js'
import asturias from '@/composables/map/asturias.js'
import avila from '@/composables/map/avila.js'
import badajoz from '@/composables/map/badajoz.js'
import baleares from '@/composables/map/baleares.js'
import barcelona from '@/composables/map/barcelona.js'
import burgos from '@/composables/map/burgos.js'
import caceres from '@/composables/map/caceres.js'
import cadiz from '@/composables/map/cadiz.js'
import canarias from '@/composables/map/canarias.js'
import cantabria from '@/composables/map/cantabria.js'
import castellon from '@/composables/map/castellon.js'
import ceuta from '@/composables/map/ceuta.js'
import ciudad_real from '@/composables/map/ciudadreal.js'
import cordoba from '@/composables/map/cordoba.js'
import cuenca from '@/composables/map/cuenca.js'
import girona from '~~/composables/map/girona.js'
import granada from '@/composables/map/granada.js'
import guadalajara from '@/composables/map/guadalajara.js'
import guipuzcoa from '@/composables/map/guipuzcoa.js'
import huelva from '@/composables/map/huelva.js'
import huesca from '@/composables/map/huesca.js'
import jaen from '@/composables/map/jaen.js'
import lacoruna from '@/composables/map/lacoruna.js'
import larioja from '@/composables/map/larioja.js'
import leon from '@/composables/map/leon.js'
import lerida from '@/composables/map/lerida.js'
import lugo from '@/composables/map/lugo.js'
import madrid from '@/composables/map/madrid.js'
import malaga from '@/composables/map/malaga.js'
import melilla from '@/composables/map/melilla.js'
import murcia from '@/composables/map/murcia.js'
import navarra from '@/composables/map/navarra.js'
import orense from '@/composables/map/orense.js'
import palencia from '@/composables/map/palencia.js'
import pontevedra from '@/composables/map/pontevedra.js'
import salamanca from '@/composables/map/salamanca.js'
import segovia from '@/composables/map/segovia.js'
import sevilla from '@/composables/map/sevilla.js'
import soria from '@/composables/map/soria.js'
import tarragona from '@/composables/map/tarragona.js'
import teruel from '@/composables/map/teruel.js'
import toledo from '@/composables/map/toledo.js'
import valencia from '@/composables/map/valencia.js'
import valladolid from '@/composables/map/valladolid.js'
import vizcaya from '@/composables/map/vizcaya.js'
import zamora from '@/composables/map/zamora.js'
import zaragoza from '@/composables/map/zaragoza.js'


// Portugal
import portugal from '@/composables/map/portugal.js'
import vilana_do_costelo from '@/composables/map/vilana-do-costelo.js'
import braga from '@/composables/map/braga.js'
import villareal from '@/composables/map/villareal.js'
import braganca from '@/composables/map/braganca.js'
import viseu from '@/composables/map/viseu.js'
import guarda from '@/composables/map/guarda.js'
import porto from '@/composables/map/porto.js'
import aveiro from '@/composables/map/aveiro.js'
import coimbra from '@/composables/map/coimbra.js'
import fig_da_foz from '@/composables/map/fig-da-foz.js'
import castelo_branco from '@/composables/map/castelo-branco.js'
import leiria from '@/composables/map/leiria.js'
import lisboa from '@/composables/map/lisboa.js'
import santarem from '@/composables/map/santarem.js'
import portalegre from '@/composables/map/portalegre.js'
import evora from '@/composables/map/evora.js'
import setubal from '@/composables/map/setubal.js'
import beja from '@/composables/map/beja.js'
import algarve from '@/composables/map/algarve.js'
import islas_portugal from '@/composables/map/islas-portugal.js'


const mapContent = data => {
	
	let resp = ''

	// Spain
	resp += africa(data.africa)
	resp += alava(data.alava)
	resp += albacete(data.albacete)
	resp += alicante(data.alicante)
	resp += almeria(data.almeria)
	resp += asturias(data.asturias)
	resp += avila(data.avila)
	resp += badajoz(data.badajoz)
	resp += baleares(data.baleares)
	resp += barcelona(data.barcelona)
	resp += burgos(data.burgos)
	resp += caceres(data.caceres)
	resp += cadiz(data.cadiz)
	resp += canarias(data.canarias)
	resp += cantabria(data.cantabria)
	resp += castellon(data.castellon)
	resp += ceuta(data.ceuta)
	resp += ciudad_real(data.ciudad_real)
	resp += cordoba(data.cordoba)
	resp += cuenca(data.cuenca)
	resp += girona(data.girona)
	resp += granada(data.granada)
	resp += guadalajara(data.guadalajara)
	resp += guipuzcoa(data.guipuzcoa)
	resp += huelva(data.huelva)
	resp += huesca(data.huesca)
	resp += jaen(data.jaen)
	resp += lacoruna(data.lacoruna)
	resp += larioja(data.larioja)
	resp += leon(data.leon)
	resp += lerida(data.lerida)
	resp += lugo(data.lugo)
	resp += madrid(data.madrid)
	resp += malaga(data.malaga)
	resp += melilla(data.melilla)
	resp += murcia(data.murcia)
	resp += navarra(data.navarra)
	resp += orense(data.orense)
	resp += palencia(data.palencia)
	resp += pontevedra(data.pontevedra)
	resp += salamanca(data.salamanca)
	resp += segovia(data.segovia)
	resp += sevilla(data.sevilla)
	resp += soria(data.soria)
	resp += tarragona(data.tarragona)
	resp += teruel(data.teruel)
	resp += toledo(data.toledo)
	resp += valencia(data.valencia)
	resp += valladolid(data.valladolid)
	resp += vizcaya(data.vizcaya)
	resp += zamora(data.zamora)
	resp += zaragoza(data.zaragoza)


	// Portugal
	resp += vilana_do_costelo(data.vilana_do_costelo)
	resp += braga(data.braga)
	resp += villareal(data.villareal)
	resp += braganca(data.braganca)
	resp += guarda(data.guarda)
	resp += viseu(data.viseu)
	resp += porto(data.porto)
	resp += aveiro(data.aveiro)
	resp += coimbra(data.coimbra)
	resp += fig_da_foz(data.fig_da_foz)
	resp += castelo_branco(data.castelo_branco)
	resp += leiria(data.leiria)
	resp += lisboa(data.lisboa)
	resp += santarem(data.santarem)
	resp += portalegre(data.portalegre)
	resp += evora(data.evora)
	resp += setubal(data.setubal)
	resp += beja(data.beja)
	resp += algarve(data.algarve)
	resp += islas_portugal(data.islas_portugal)
	resp += portugal(data.portugal)

	return resp
}

export default mapContent