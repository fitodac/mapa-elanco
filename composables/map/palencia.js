const palencia = data => {
	let resp = `<g id="${data.id}"
		class="fill-[${data.color}] hover:fill-[${data.active}]">
		<path d="M400.814488,131.994347 L404.906488,135.745347 C404.906488,135.745347 403.882488,140.520347 403.542488,141.884347 C403.201488,143.248347 399.791488,149.044347 400.473488,150.068347 C401.154488,151.089347 403.882488,150.068347 404.906488,151.089347 C405.929488,152.112347 407.293488,153.476347 408.315488,155.181347 C409.338488,156.885347 407.634488,162.341347 410.361488,158.592347 C413.089488,154.840347 412.749488,149.725347 416.498488,154.157347 C420.250488,158.592347 422.977488,157.909347 424.001488,158.592347 C425.022488,159.273347 428.433488,160.637347 427.412488,161.660347 C426.386488,162.683347 423.658488,164.728347 426.386488,164.388347 C429.116488,164.047347 437.300488,164.047347 437.300488,164.047347 C437.300488,164.047347 446.164488,164.047347 446.505488,163.024347 C446.847488,162.001347 448.551488,154.500347 449.916488,153.476347 C451.279488,152.453347 453.324488,146.657347 451.620488,145.633347 C449.916488,144.612347 447.528488,141.542347 445.141488,139.837347 C442.755488,138.131347 440.708488,135.745347 440.708488,133.698347 C440.708488,131.654347 439.687488,131.313347 440.027488,126.198347 C440.368488,121.083347 440.368488,114.263347 440.027488,112.558347 C439.687488,110.854347 439.345488,107.443347 439.345488,105.398347 C439.345488,103.351347 445.141488,97.2133469 446.164488,96.8723469 C446.662488,96.7073469 448.296488,94.9203469 449.839488,93.1333469 C448.517488,92.2753469 449.352488,90.6893469 447.869488,90.3933469 C446.164488,90.0533469 444.460488,84.9393469 444.460488,82.5523469 C444.460488,80.1653469 440.368488,79.1413469 439.004488,78.4603469 C437.640488,77.7773469 436.276488,73.0053469 436.276488,73.0053469 C436.276488,73.0053469 431.844488,72.6643469 427.412488,74.0283469 C425.168488,74.7173469 422.402488,74.3593469 420.217488,73.8383469 C419.569488,74.3933469 418.520488,74.7223469 417.864488,75.0493469 C416.500488,75.7323469 413.770488,79.1413469 414.453488,80.5053469 C415.136488,81.8693469 412.749488,84.9393469 410.361488,86.3033469 C407.974488,87.6673469 409.338488,90.0533469 409.338488,92.1003469 L409.338488,96.8723469 C409.338488,98.5773469 410.702488,101.305347 411.385488,102.669347 C412.068488,104.033347 408.657488,107.784347 407.634488,111.535347 C406.610488,115.286347 403.542488,118.695347 403.542488,121.765347 C403.542488,123.949347 401.641488,124.405347 399.808488,123.995347 C400.308488,125.059347 400.708488,126.011347 400.814488,126.538347 C401.154488,128.243347 400.814488,131.994347 400.814488,131.994347"></path>`

	resp += data.circle ? '<circle cx="423" cy="120" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default palencia