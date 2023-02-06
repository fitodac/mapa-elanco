const malaga = data => {
	let resp = `<g id="${data.id}"
		class="fill-[${data.color}] hover:fill-[${data.active}]">
		<path d="M401.837388,488.320947 C400.133388,488.320947 396.381388,489.001947 395.358388,489.684947 C394.336388,490.365947 391.266388,490.705947 391.266388,490.705947 L385.810388,487.297947 C385.810388,487.297947 384.446388,486.614947 384.446388,488.320947 C384.446388,490.024947 383.082388,491.388947 383.082388,491.388947 L378.650388,492.752947 L374.899388,490.705947 C374.899388,490.705947 372.854388,493.093947 372.854388,494.457947 C372.854388,495.821947 367.739388,498.889947 367.739388,498.889947 C367.739388,498.889947 363.987388,500.253947 362.283388,500.595947 C360.579388,500.936947 359.555388,502.300947 359.555388,504.345947 C359.555388,506.392947 359.555388,509.800947 358.532388,511.507947 C357.510388,513.209947 355.804388,516.622947 354.440388,515.258947 C353.076388,513.892947 350.691388,511.507947 349.667388,511.507947 C348.644388,511.507947 347.280388,511.507947 347.280388,513.209947 C347.280388,514.916947 347.620388,516.620947 347.963388,518.326947 C348.303388,520.031947 345.233388,523.782947 344.209388,526.170947 C343.188388,528.555947 339.777388,527.874947 338.073388,528.897947 C336.368388,529.919947 336.709388,532.647947 335.345388,532.647947 C333.981388,532.647947 327.844388,531.283947 327.844388,532.647947 C327.844388,534.011947 329.889388,535.375947 331.936388,535.375947 C333.981388,535.375947 337.049388,534.353947 337.392388,536.056947 C337.732388,537.762947 338.754388,538.445947 340.118388,539.466947 C341.482388,540.490947 342.846388,543.901947 342.846388,544.922947 C342.846388,545.946947 342.165388,547.650947 344.209388,549.695947 C344.985388,550.470947 345.854388,551.195947 346.639388,551.796947 C346.837388,551.588947 347.020388,551.380947 347.193388,551.165947 C347.988388,550.170947 348.384388,549.179947 348.582388,547.194947 C348.780388,545.211947 351.360388,543.624947 354.536388,543.225947 C357.712388,542.829947 363.268388,542.233947 363.862388,542.233947 C364.457388,542.233947 366.046388,540.646947 366.442388,539.655947 C366.838388,538.662947 368.626388,538.662947 370.609388,538.662947 C372.594388,538.662947 371.602388,540.646947 374.778388,540.846947 C377.952388,541.042947 380.928388,540.448947 382.715388,540.249947 C384.500388,540.051947 385.493388,537.271947 387.278388,535.288947 C389.065388,533.305947 390.652388,533.105947 393.232388,532.114947 C395.812388,531.121947 396.406388,528.938947 398.590388,527.551947 C400.773388,526.160947 402.757388,526.160947 403.155388,526.754947 C403.551388,527.351947 410.894388,527.747947 412.481388,527.747947 C414.068388,527.747947 416.252388,526.358947 418.235388,525.764947 C420.220388,525.167947 419.426388,526.556947 421.213388,527.947947 C422.998388,529.334947 423.594388,527.947947 425.380388,527.153947 C427.007388,526.429947 432.101388,526.529947 434.341388,527.609947 C434.654388,526.752947 434.910388,525.602947 434.9124,524.123947 C434.920388,520.298947 430.820388,522.418947 429.799388,522.078947 C428.775388,521.735947 428.435388,520.714947 428.092388,519.690947 C427.752388,518.667947 420.249388,517.644947 420.249388,517.644947 C420.249388,517.644947 416.840388,514.235947 414.793388,513.552947 C412.748388,512.871947 412.066388,510.483947 410.702388,508.438947 C409.338388,506.394947 407.633388,506.392947 407.293388,503.664947 C406.952388,500.936947 407.633388,497.525947 407.974388,496.161947 C408.030388,495.940947 408.149388,495.565947 408.308388,495.086947 C406.125388,491.902947 403.043388,488.320947 401.837388,488.320947"></path>`

	resp += data.circle ? '<circle cx="380" cy="515" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default malaga