const andorra = data => {
	let resp =`<g id="${data.id}" class="no-selectable fill-[${data.color}] hover:fill-[${data.active}]">
		<path d="M737.099888,123.358347 C737.780888,126.426347 737.780888,127.790347 738.120888,129.495347 C738.463888,131.201347 735.735888,130.178347 738.463888,131.201347 C741.191888,132.223347 741.531888,130.178347 744.259888,129.837347 C746.987888,129.495347 750.055888,128.473347 750.055888,128.473347 L754.305888,126.984347 C753.549888,126.017347 753.224888,121.425347 752.674888,120.509347 C752.079888,119.516347 748.518888,120.034347 745.738888,119.241347 C742.961888,118.447347 740.777888,119.043347 739.588888,119.043347 C738.521888,119.043347 737.616888,118.089347 736.868888,116.892347 C736.760888,118.991347 736.728888,121.682347 737.099888,123.358347"></path>`
	
	resp += data.circle ? '<circle cx="615" cy="416" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default andorra