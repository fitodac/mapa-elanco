const villareal = data => {
	let resp = `<g id="${data.id}"
		class="fill-[${data.color}] hover:fill-[${data.active}]">
		<path d="M287.241125,149.047247 C287.640295,151.406139 286.016379,151.022705 285.036536,152.988403 C284.056692,154.954102 283.72489,157.492828 282.784338,159.21106 C281.843787,160.929291 281.086379,160.957247 280.876379,161.687247 C280.666379,162.467247 280.743938,162.895085 281.123938,163.525085 C281.633938,164.365085 281.753484,165.587247 281.533484,165.887247 C281.513484,165.917247 281.146379,166.787173 280.876379,166.727173 C278.926379,166.307173 277.772434,166.727247 277.332434,168.427247 C276.952434,169.907247 276.402839,169.825205 275.122839,169.835205 C274.412839,169.845205 273.882839,169.925205 273.602839,170.335205 C273.252839,170.825205 273.876379,171.33771 274.216379,172.27771 C274.736379,173.74771 274.426379,175.013193 274.216379,175.773193 C273.886379,176.943193 275.056291,177.897247 275.786291,178.687247 C272.836291,179.567247 270.066379,181.947247 269.986379,182.867247 C269.916379,183.727247 269.636379,184.157247 268.966379,184.457247 C268.386379,184.707247 267.886379,185.377247 267.646379,186.217247 C267.596379,186.397247 267.566379,186.567247 267.546379,186.747247 C266.556379,186.737247 265.186379,187.227247 263.656379,187.827247 C263.126379,188.027247 262.526379,188.267247 262.346379,188.277247 C262.186379,188.297247 262.026379,188.307247 261.876379,188.317247 C261.236379,188.357247 260.636379,188.397247 260.146379,188.667247 C259.926379,188.787247 259.226379,189.167247 256.686379,188.797247 C254.276379,188.437247 252.326379,189.167247 251.776379,189.567247 C251.386379,189.697247 249.226379,189.507247 244.796379,188.467247 C244.296379,188.347247 243.816379,188.287247 243.376379,188.257247 C243.386379,188.047247 243.466379,187.757247 243.646379,187.587247 C244.186379,187.047247 244.716379,186.077247 244.136379,184.567247 C243.746379,183.557247 243.806379,183.517247 244.626379,182.967247 C245.046379,182.697247 245.146379,182.337247 245.156379,182.087247 C245.186379,181.397247 244.586379,180.577247 243.326379,179.577247 C243.026379,179.347247 242.876379,179.037247 242.906379,178.687247 C242.946379,178.217247 243.286379,177.747247 243.806379,177.457247 C244.356379,177.147247 244.416379,176.787247 244.366379,176.547247 C244.306379,176.297247 244.166379,175.637247 241.036379,175.357247 C240.716379,175.327247 240.646379,175.257247 240.636379,175.257247 C240.586379,175.107247 240.846379,174.487247 241.046379,174.037247 C241.156379,173.777247 241.276379,173.497247 241.406379,173.187247 C241.706379,172.407247 241.816379,171.927247 241.546379,171.597247 C241.286379,171.287247 240.896379,171.357247 240.576379,171.417247 C240.416379,171.457247 240.256379,171.487247 240.096379,171.487247 L239.996379,171.487247 L239.996379,171.317247 C240.006379,171.097247 240.016379,170.797247 239.966379,170.417247 C239.866379,169.527247 240.456379,168.797247 241.596379,168.427247 C242.946379,167.987247 242.246953,165.936807 242.276953,165.726807 C242.376953,165.196807 242.776379,164.228677 243.096379,164.018677 C243.256379,163.928677 243.986379,163.485085 244.136379,163.525085 C245.076379,163.785085 245.320959,163.607247 245.82572,162.726807 C246.09572,162.026807 246.391342,161.906961 247.050146,161.16864 C248.41474,159.639343 249.170338,159.901101 249.340338,159.441101 C249.519874,159.165833 249.519874,158.093781 249.340338,157.492828 C249.160802,156.891876 248.908942,155.830261 248.41474,155.997247 C248.326962,156.026906 247.486073,156.48418 247.406073,156.53418 C246.726073,156.93418 246.095192,157.100922 245.204535,156.944183 C244.313878,156.787445 244.226379,156.227247 243.646379,155.997247 C243.206379,155.837247 242.764746,155.637247 242.168372,155.379543 C241.571997,155.12184 240.80925,154.575127 240.81925,154.505127 C240.81925,154.494468 239.764492,153.389771 240.636379,152.787659 C241.508266,152.185547 241.528873,152.088117 241.406379,151.926941 C241.266379,151.746941 241.046379,151.575806 241.046379,150.53302 C241.046379,149.814758 241.326279,149.577247 240.966279,149.047247 C240.906279,148.957247 240.636379,148.217247 239.403357,148.217247 L236.976279,147.887247 C236.756906,147.86531 235.698442,147.78245 235.596279,146.907247 C235.494116,146.032043 236.496476,145.387007 236.695166,145.305725 C237.835166,144.845725 237.607617,144.798127 237.707617,144.018127 C237.787617,143.388127 238.173772,142.70697 238.753088,142.310181 C239.332405,141.913391 239.332405,141.545791 239.302405,140.685791 C239.292405,140.275791 239.313357,139.297247 239.403357,139.077247 C239.483357,138.867247 239.786379,138.678017 239.996379,138.070313 L240.326279,136.387247 C240.966279,136.327247 241.626379,136.257247 241.886379,136.257247 C242.836379,136.257247 246.606379,134.847247 246.906379,134.217247 C247.216379,133.577247 247.856379,133.737247 248.796379,134.677247 C249.736379,135.617247 249.586379,136.557247 251.926379,135.467247 C254.296379,134.367247 258.686379,131.997247 259.776379,134.677247 C260.876379,137.347247 261.356379,140.307247 263.546379,139.847247 C265.746379,139.367247 266.996379,137.967247 267.776379,137.967247 C268.566379,137.967247 268.246379,139.537247 272.016379,139.537247 C275.786379,139.537247 279.226379,139.077247 279.226379,139.077247 C279.226379,139.077247 283.476379,138.997247 284.396379,137.017247 C284.506379,137.127247 285.569236,138.301509 285.679236,138.421509 C286.256296,139.438284 286.643869,140.193044 286.841956,140.685791 C287.058566,141.224616 286.915418,141.97246 286.412512,142.929321 C286.102512,143.689321 285.506379,144.137247 286.016379,145.117247 C286.066379,145.217247 286.116379,145.317247 286.166379,145.427247 C286.616763,146.267985 286.975012,147.474652 287.241125,149.047247 Z"></path>`

	resp += data.circle ? '<circle cx="260" cy="160" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default villareal