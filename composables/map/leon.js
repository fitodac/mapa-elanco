const leon = data => {
	let resp = `<g id="${data.id}" 
		class="fill-[${data.color}] hover:fill-[${data.active}]">
		<path d="M309.431188,121.083147 C311.818188,121.424147 313.523188,119.038147 314.887188,120.402147 C316.251188,121.764147 319.659188,122.447147 321.366188,122.787147 C323.070188,123.128147 332.618188,124.151147 332.958188,125.856147 C333.301188,127.562147 336.029188,128.584147 336.029188,128.584147 L345.576188,126.879147 L346.940188,128.926147 L349.325188,129.948147 C349.325188,129.948147 351.372188,128.926147 353.417188,130.631147 C355.464188,132.335147 355.805188,131.312147 357.850188,131.654147 C359.896188,131.994147 365.352188,130.631147 365.693188,131.994147 C366.033188,133.358147 371.831188,138.814147 374.559188,138.131147 C377.287188,137.450147 382.402188,135.403147 380.696188,132.675147 C378.991188,129.948147 378.310188,128.584147 380.015188,128.584147 C381.719188,128.584147 384.788188,129.948147 385.471188,128.243147 C386.152188,126.539147 391.607188,123.811147 391.607188,123.811147 C391.607188,123.811147 395.699188,121.764147 397.746188,123.128147 C399.791188,124.492147 403.542188,124.834147 403.542188,121.764147 C403.542188,118.696147 406.611188,115.287147 407.634188,111.536147 C408.657188,107.784147 412.068188,104.033147 411.385188,102.669147 C410.702188,101.305147 409.338188,98.5771469 409.338188,96.8731469 L409.338188,92.1001469 C409.338188,90.0531469 407.974188,87.6661469 410.362188,86.3021469 C412.749188,84.9381469 415.137188,81.8701469 414.454188,80.5061469 C413.771188,79.1421469 416.500188,75.7331469 417.864188,75.0501469 C419.228188,74.3691469 422.297188,73.6861469 419.909188,70.9581469 C417.522188,68.2301469 416.158188,65.5021469 416.158188,64.1381469 L416.158188,61.9901469 C415.516188,61.6111469 414.644188,60.9261469 413.771188,59.7061469 C412.066188,57.3191469 409.338188,59.7061469 408.315188,60.3871469 C407.293188,61.0701469 404.906188,61.4111469 404.906188,61.4111469 C404.906188,61.4111469 401.838188,60.7281469 401.155188,63.7981469 C400.474188,66.8661469 399.791188,67.2071469 397.063188,67.8901469 C394.335188,68.5731469 391.267188,66.1831469 387.516188,66.1831469 C383.766188,66.1831469 380.696188,68.9111469 378.651188,69.2541469 C376.604188,69.5941469 372.512188,65.8431469 372.512188,65.8431469 L369.103188,66.5261469 C369.103188,66.5261469 364.329188,72.3221469 363.305188,72.6641469 C362.284188,73.0051469 355.805188,67.5471469 354.441188,65.8431469 C353.077188,64.1381469 350.689188,64.4791469 348.985188,65.5021469 C347.281188,66.5261469 343.529188,66.5261469 343.529188,66.5261469 C343.529188,66.5261469 340.801188,66.5261469 338.756188,65.8431469 C336.710188,65.1621469 333.641188,67.2071469 333.641188,67.2071469 C333.641188,67.2071469 330.230188,68.5711469 330.230188,70.2751469 C330.230188,71.9811469 327.162188,71.9811469 325.458188,72.3221469 C323.751188,72.6641469 325.458188,72.3221469 321.023188,70.6181469 C316.591188,68.9111469 314.887188,71.3011469 314.546188,72.3221469 C314.204188,73.3451469 312.840188,72.6641469 311.135188,70.6181469 C310.468188,69.8171469 309.696188,69.4861469 309.004188,69.3811469 C309.254188,70.1771469 309.431188,70.8621469 309.431188,71.3011469 C309.431188,72.6641469 308.750188,79.8251469 304.658188,80.8461469 C300.566188,81.8701469 296.473188,81.8701469 296.813188,82.8931469 C297.156188,83.9161469 296.473188,84.9381469 296.473188,87.6661469 C296.473188,90.3941469 295.109188,91.0771469 295.109188,93.1221469 C295.109188,93.3831469 295.032188,93.7491469 294.891188,94.1871469 C295.565188,94.3491469 296.361188,94.5621469 297.156188,94.8281469 C299.202188,95.5091469 303.294188,96.8731469 303.294188,96.8731469 C303.294188,96.8731469 305.680188,98.5771469 306.022188,100.282147 C306.363188,101.988147 304.999188,106.080147 306.703188,106.080147 C308.408188,106.080147 309.771188,108.465147 309.771188,109.829147 C309.771188,111.193147 309.431188,112.899147 309.431188,114.946147 C309.431188,116.705147 307.669188,118.713147 307.173188,119.242147 C307.650188,120.110147 308.373188,120.931147 309.431188,121.083147"></path>`

	resp += data.circle ? '<circle cx="360" cy="95" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default leon