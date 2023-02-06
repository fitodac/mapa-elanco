const girona = data => {
	let resp = `<g id="${data.id}" 
		class="fill-[${data.color}] hover:fill-[${data.active}]" >
		<path d="M832.582788,140.189147 C832.582788,138.206147 829.012788,136.022147 829.012788,136.022147 L826.232788,136.022147 C825.041788,136.022147 824.246788,134.633147 823.454788,133.641147 C822.659788,132.648147 819.881788,131.061147 819.881788,131.061147 L813.531788,133.046147 C813.531788,133.046147 812.539788,133.442147 810.753788,134.037147 C808.968788,134.633147 806.388788,134.435147 805.792788,134.633147 C805.198788,134.831147 804.007788,136.617147 802.814788,137.807147 C801.625788,138.998147 799.442788,138.800147 796.069788,138.800147 C792.695788,138.800147 790.314788,138.404147 789.123788,137.609147 C787.932788,136.817147 785.154788,135.624147 783.965788,135.228147 C782.772788,134.831147 776.620788,134.235147 774.637788,134.435147 C772.654788,134.633147 771.263788,137.015147 769.874788,137.213147 C768.485788,137.411147 764.714788,136.022147 763.722788,134.235147 C762.729788,132.450147 761.738788,131.853147 760.548788,131.655147 C759.357788,131.457147 754.990788,127.885147 754.395788,127.290147 C754.349788,127.244147 754.293788,127.177147 754.230788,127.096147 L749.980788,128.585147 C749.980788,128.585147 748.534788,129.068147 746.741788,129.480147 C747.682788,131.265147 748.899788,133.583147 749.299788,134.381147 C749.980788,135.745147 752.368788,137.450147 753.391788,137.790147 C754.413788,138.133147 757.483788,140.860147 757.483788,140.860147 C757.483788,140.860147 768.737788,137.790147 768.394788,144.610147 C768.052788,151.429147 768.052788,154.840147 769.758788,155.181147 C771.463788,155.521147 778.623788,155.521147 779.306788,156.545147 C779.987788,157.568147 785.443788,156.885147 786.466788,158.249147 C787.490788,159.613147 793.626788,162.681147 793.969788,164.388147 C794.307788,166.092147 792.605788,168.139147 792.605788,168.139147 L791.581788,171.207147 L790.217788,173.595147 C790.217788,173.595147 784.421788,174.959147 784.421788,177.004147 C784.421788,179.050147 783.738788,181.095147 785.785788,181.436147 C787.830788,181.778147 786.807788,179.391147 790.898788,182.459147 C794.990788,185.528147 794.990788,185.870147 796.354788,185.187147 C797.718788,184.506147 799.082788,181.436147 803.516788,184.506147 C806.086788,186.286147 807.164788,189.094147 807.618788,191.143147 C808.335788,190.874147 809.124788,190.614147 809.959788,190.395147 C813.729788,189.402147 816.509788,187.021147 818.889788,184.639147 C821.270788,182.259147 824.447788,181.267147 828.017788,177.892147 C831.589788,174.520147 832.186788,171.740147 832.582788,171.146147 C832.978788,170.551147 832.582788,167.972147 832.382788,166.583147 C832.186788,165.194147 830.795788,165.986147 830.599788,164.201147 C830.399788,162.414147 833.575788,162.614147 830.795788,159.636147 C828.017788,156.660147 828.017788,157.455147 826.033788,155.271147 C824.048788,153.088147 826.430788,151.501147 827.621788,149.515147 C828.811788,147.532147 830.002788,149.119147 830.795788,149.119147 C831.589788,149.119147 834.565788,148.921147 834.765788,145.348147 C834.962788,141.776147 832.582788,142.174147 832.582788,140.189147"></path>`

	resp += data.circle ? '<circle cx="806" cy="160" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default girona