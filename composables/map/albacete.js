const albacete = data => {
	let resp = `<g id="${data.id}" 
		class="fill-[${data.color}] hover:fill-[${data.active}]">
		<path d="M602.252888,393.281947 C602.085888,391.115947 601.636888,386.761947 600.630888,385.001947 C599.266888,382.616947 597.902888,381.935947 594.492888,382.273947 C591.083888,382.616947 586.308888,377.501947 584.944888,374.430947 C583.580888,371.362947 587.331888,363.519947 587.331888,362.155947 C587.331888,360.791947 589.378888,356.699947 589.378888,355.678947 C589.378888,354.654947 578.124888,351.586947 576.080888,349.880947 C574.212888,348.325947 572.915888,346.486947 572.444888,344.880947 L569.260888,346.471947 C569.260888,346.471947 561.417888,351.245947 560.734888,352.950947 C560.053888,354.654947 553.916888,354.314947 551.869888,354.656947 C549.824888,354.997947 543.686888,350.564947 542.662888,350.222947 C541.639888,349.880947 539.251888,352.950947 538.230888,354.314947 C537.207888,355.678947 524.250888,353.973947 524.250888,353.973947 C524.250888,353.973947 520.158888,351.926947 518.794888,349.199947 C517.884888,347.381947 510.905888,347.533947 506.357888,347.837947 C506.561888,348.614947 506.573888,349.976947 506.179888,352.609947 C505.153888,359.429947 500.380888,359.429947 500.721888,361.816947 C501.061888,364.204947 502.085888,366.249947 501.404888,368.296947 C500.721888,370.340947 496.629888,371.704947 496.970888,375.454947 C497.312888,379.207947 497.993888,379.546947 499.697888,379.546947 C501.404888,379.546947 504.813888,383.637947 504.813888,384.663947 C504.813888,385.684947 508.564888,391.140947 508.906888,393.527947 C509.247888,395.915947 508.564888,397.961947 506.860888,398.983947 C505.153888,400.006947 502.768888,398.642947 502.425888,402.053947 C502.239888,403.923947 502.154888,405.795947 502.118888,407.103947 C503.127888,407.459947 504.984888,407.984947 506.179888,407.507947 C507.883888,406.824947 510.611888,407.167947 511.975888,410.575947 C513.339888,413.986947 510.951888,414.325947 513.339888,416.031947 C515.724888,417.736947 517.088888,419.442947 516.407888,420.463947 C515.724888,421.487947 515.043888,421.827947 515.043888,423.191947 C515.043888,424.555947 515.724888,425.579947 515.724888,426.600947 L515.724888,430.011947 C515.724888,432.398947 515.724888,433.420947 514.703888,434.443947 C513.679888,435.469947 509.247888,435.807947 509.247888,437.171947 C509.247888,438.535947 508.904888,440.241947 508.564888,441.263947 C508.366888,441.859947 506.900888,443.952947 505.705888,445.601947 C508.060888,446.211947 512.656888,447.744947 512.656888,447.744947 C512.656888,447.744947 517.771888,450.472947 519.816888,450.129947 C520.922888,449.945947 522.823888,448.267947 524.339888,446.765947 C524.042888,446.259947 523.696888,445.718947 523.227888,445.016947 C521.863888,442.969947 521.180888,443.991947 522.886888,442.288947 C524.591888,440.582947 526.978888,435.807947 526.978888,434.105947 C526.978888,432.398947 535.162888,429.670947 536.185888,428.647947 C537.207888,427.626947 539.594888,426.600947 540.617888,426.600947 L547.777888,426.600947 C549.824888,426.600947 552.552888,422.170947 552.552888,422.170947 C552.552888,422.170947 555.961888,420.463947 556.984888,420.123947 C558.006888,419.781947 560.053888,424.215947 562.440888,425.579947 C564.826888,426.943947 566.532888,425.236947 567.213888,423.872947 C567.896888,422.508947 567.896888,422.170947 570.283888,421.144947 C572.671888,420.123947 571.307888,417.736947 570.283888,415.350947 C569.260888,412.961947 570.283888,406.824947 571.307888,404.779947 C572.328888,402.732947 575.739888,398.300947 576.420888,396.255947 C577.103888,394.208947 578.467888,397.277947 579.488888,398.983947 C580.512888,400.687947 584.604888,397.277947 585.627888,397.277947 C586.650888,397.277947 589.036888,396.936947 590.742888,397.277947 C592.447888,397.617947 593.470888,398.300947 595.174888,401.368947 C595.809888,402.511947 596.538888,403.654947 597.204888,404.637947 C598.027888,404.656947 599.274888,404.872947 600.630888,404.096947 C603.016888,402.732947 600.971888,400.005947 600.971888,396.596947 C600.971888,395.324947 601.538888,394.197947 602.252888,393.281947"></path>`

	resp += data.circle ? '<circle cx="540" cy="390" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default albacete