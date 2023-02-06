const badajoz = data => {
	let resp =`<g id="${data.id}" 
		class="fill-[${data.color}] hover:fill-[${data.active}]">
		<path d="M381.718888,374.508947 C382.741888,372.463947 385.127888,372.121947 389.221888,370.074947 C393.312888,368.029947 386.491888,367.688947 385.469888,363.937947 C384.446888,360.188947 391.265888,362.916947 391.608888,361.890947 C391.948888,360.867947 388.197888,357.117947 387.174888,355.071947 C386.152888,353.026947 389.221888,351.319947 391.265888,348.934947 C393.312888,346.547947 397.404888,351.319947 398.428888,349.955947 C399.449888,348.591947 397.745888,347.227947 397.404888,344.842947 C397.064888,342.455947 397.064888,340.408947 397.404888,338.705947 C397.745888,336.999947 400.132888,335.635947 397.404888,332.907947 C394.676888,330.179947 389.902888,333.931947 387.857888,333.931947 C385.810888,333.931947 383.422888,333.931947 381.718888,332.907947 C380.014888,331.884947 373.194888,336.316947 370.466888,336.999947 C367.738888,337.680947 363.306888,337.341947 362.282888,338.022947 C361.259888,338.705947 360.919888,343.478947 358.874888,345.864947 C356.827888,348.253947 356.486888,347.227947 356.146888,345.864947 C355.803888,344.500947 352.394888,342.797947 349.326888,342.797947 C346.256888,342.797947 347.620888,345.525947 347.962888,349.274947 C348.303888,353.026947 343.187888,352.683947 340.460888,350.298947 C337.732888,347.910947 336.368888,349.617947 331.935888,350.638947 C327.501888,351.662947 327.501888,350.298947 323.069888,348.253947 C318.637888,346.206947 317.954888,350.638947 317.273888,352.002947 C316.592888,353.366947 310.794888,348.591947 308.749888,345.864947 C306.702888,343.136947 307.383888,340.069947 307.383888,340.069947 L299.542888,341.091947 C299.542888,341.091947 295.109888,341.433947 294.086888,339.727947 C293.063888,338.022947 286.243888,339.727947 283.515888,338.022947 C280.787888,336.316947 284.538888,330.862947 285.902888,327.792947 C287.266888,324.724947 278.400888,322.336947 278.400888,322.336947 L270.559888,320.632947 C270.559888,320.632947 269.876888,326.770947 268.512888,325.064947 C267.148888,323.360947 267.148888,322.679947 266.467888,320.972947 C265.784888,319.268947 263.737888,320.972947 263.056888,324.043947 C262.769888,325.333947 261.213888,326.505947 259.507888,327.428947 C259.720888,328.084947 259.863888,328.754947 259.863888,329.412947 C259.863888,331.607947 259.863888,332.392947 260.803888,333.021947 C261.744888,333.648947 263.000888,333.490947 263.627888,335.214947 C264.255888,336.941947 266.765888,337.097947 267.234888,337.882947 C267.706888,338.667947 271.942888,340.079947 271.784888,341.489947 C271.626888,342.901947 271.784888,345.725947 271.784888,346.352947 C271.784888,346.979947 269.431888,350.902947 268.333888,352.470947 C267.234888,354.038947 265.667888,354.980947 265.667888,356.392947 C265.667888,357.802947 266.765888,361.253947 264.726888,361.253947 C262.687888,361.253947 257.510888,363.452947 256.881888,365.018947 C256.254888,366.588947 254.059888,368.000947 254.059888,372.705947 C254.059888,377.413947 252.647888,377.569947 252.175888,378.196947 C251.706888,378.825947 248.097888,381.647947 249.509888,384.315947 C250.921888,386.980947 247.156888,386.352947 251.706888,389.648947 C256.254888,392.941947 255.155888,394.040947 255.155888,396.237947 C255.155888,398.434947 256.725888,403.295947 256.881888,403.922947 C257.039888,404.549947 257.352888,406.119947 258.606888,406.277947 C259.863888,406.432947 263.783888,406.590947 264.410888,406.590947 C264.895888,406.590947 265.470888,406.867947 265.709888,406.996947 L268.512888,406.217947 C268.512888,406.217947 267.829888,407.581947 268.854888,408.945947 C269.876888,410.309947 273.286888,410.651947 273.627888,412.356947 C273.968888,414.062947 276.355888,419.516947 278.059888,418.835947 C279.764888,418.152947 284.198888,418.152947 285.902888,420.199947 C287.607888,422.244947 287.947888,423.267947 290.335888,422.927947 C292.722888,422.584947 295.790888,421.563947 296.131888,423.608947 C296.471888,425.654947 298.859888,426.676947 300.906888,427.018947 C302.951888,427.359947 301.927888,427.359947 303.974888,428.382947 L306.019888,429.404947 C306.019888,429.404947 306.190888,429.804947 306.409888,430.435947 C307.818888,430.068947 309.285888,429.746947 310.113888,429.746947 C311.817888,429.746947 313.521888,427.699947 315.228888,429.404947 C316.932888,431.110947 323.069888,428.382947 322.728888,425.312947 C322.388888,422.244947 322.388888,421.220947 323.409888,420.199947 C324.433888,419.175947 325.456888,418.492947 325.797888,417.128947 C326.137888,415.764947 328.184888,415.764947 328.184888,415.764947 C328.184888,415.764947 336.708888,415.764947 336.368888,417.128947 C336.027888,418.492947 333.299888,421.563947 335.685888,422.584947 C338.072888,423.608947 339.436888,420.199947 340.460888,421.220947 C340.673888,421.436947 340.994888,421.634947 341.373888,421.836947 C343.580888,420.026947 346.598888,417.278947 346.598888,415.764947 C346.598888,413.379947 344.551888,409.628947 343.868888,408.606947 C343.187888,407.581947 344.211888,400.421947 347.962888,398.033947 C351.711888,395.648947 364.327888,388.488947 365.351888,387.124947 C366.374888,385.760947 369.102888,383.032947 369.102888,381.668947 C369.102888,380.304947 371.489888,380.985947 371.489888,380.985947 L377.626888,382.007947 L378.163888,382.745947 C379.054888,380.808947 379.935888,378.958947 380.354888,378.257947 C381.378888,376.553947 380.695888,376.553947 381.718888,374.508947"></path>`

	resp += data.circle ? '<circle cx="310" cy="384" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default badajoz