const vilana_do_costelo = data => {
	let resp = `<g id="${data.id}"
		class="fill-[${data.color}] hover:fill-[${data.active}]">
		<path d="M239.196279,120.557247 C239.046279,122.597247 238.736279,124.477247 235.906279,124.637247 C233.076279,124.787247 232.316279,129.657247 232.616279,132.487247 C232.866279,134.597247 233.456279,135.837247 234.336279,136.387247 L234.226279,136.557247 C234.216279,136.557247 233.356279,137.767247 232.656279,137.707247 C231.976279,137.657247 231.186279,138.077247 230.416279,138.477247 C229.886279,138.757247 229.346279,139.037247 228.966279,139.097247 C227.906279,139.247247 226.996279,139.377247 226.366279,139.977247 C225.996279,140.337247 225.306279,141.007247 223.606279,139.837247 C222.366279,138.977247 220.636279,139.567247 218.966279,140.147247 C217.756279,140.567247 216.496279,140.987247 215.576279,140.807247 C214.976279,140.687247 214.426279,140.797247 213.956279,141.137247 C212.546279,142.147247 212.186279,144.907247 211.926279,146.917247 L211.906279,147.067247 C211.786279,148.017247 211.456279,148.547247 211.196279,148.727247 C211.116279,148.777247 211.066279,148.777247 211.056279,148.777247 C211.046279,148.767247 210.986279,148.707247 210.966279,148.517247 C210.876279,147.627247 210.056279,147.387247 209.456279,147.207247 C208.776279,146.997247 208.556279,146.887247 208.536279,146.587247 C208.466279,145.807247 208.006279,145.527247 207.606279,145.527247 C206.896279,145.527247 206.126279,146.397247 206.056279,147.287247 C206.046279,147.477247 205.966279,147.597247 205.806279,147.667247 C205.516279,147.787247 205.026279,147.707247 204.736279,147.467247 C204.356279,147.167247 203.216279,146.237247 202.046279,147.067247 C201.386279,147.527247 199.324561,148.611267 196.866279,147.690063 C196.852946,147.774852 196.852946,147.727247 196.866279,147.547247 C197.076279,144.367247 196.866279,144.557247 196.076279,142.387247 C195.286279,140.197247 196.076279,136.037247 195.886279,133.247247 C195.826279,132.537247 195.766279,131.787247 195.726279,131.037247 C199.226279,128.677247 204.096279,125.267247 204.386279,124.477247 C204.866279,123.227247 211.286279,115.687247 216.306279,116.477247 C221.306279,117.267247 226.806279,118.367247 227.906279,116.477247 C229.006279,114.597247 232.316279,113.807247 233.716279,115.537247 C235.116279,117.267247 239.356279,118.517247 239.196279,120.557247 Z"></path>`

	resp += data.circle ? '<circle cx="215" cy="130" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default vilana_do_costelo