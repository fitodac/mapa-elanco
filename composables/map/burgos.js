const burgos = data => {
	let resp =`<g id="${data.id}" 
		class="fill-[${data.color}] hover:fill-[${data.active}]">
		<path d="M488.061488,67.6331469 C489.627488,68.1661469 491.245488,68.5711469 492.540488,68.5711469 L495.880591,68.5497458 L496.917336,68.5544053 L497.618345,68.5648882 L498.320191,68.5829794 L499.016843,68.6101423 C499.247525,68.6208711 499.476335,68.6333557 499.702269,68.64784 L500.370434,68.6975358 C502.123833,68.847356 503.628779,69.1407637 504.370487,69.7026221 L504.500888,69.8113469 C504.650888,69.9503469 504.757888,70.1053469 504.815888,70.2763469 L505.292231,71.6709712 L505.460857,72.1979679 L505.568163,72.5587019 L505.668241,72.923817 C505.684169,72.984885 505.699684,73.0460234 505.71473,73.107176 L505.798923,73.4738141 C506.148419,75.1204169 506.074105,76.6956295 504.472888,77.0953469 L504.308021,77.1378938 L503.991569,77.2280522 C503.837893,77.274802 503.691161,77.3240401 503.551922,77.3756871 L503.283594,77.4821694 C501.520495,78.231424 501.224786,79.4207143 503.791888,80.8473469 C504.138275,81.039734 504.493381,81.2191063 504.844933,81.3888933 L506.51228,82.1719153 L506.878054,82.352788 L507.105722,82.4718774 L507.318652,82.5902739 L507.515306,82.7084069 L507.694147,82.826706 L507.85364,82.9456005 C508.550399,83.5024994 508.564876,84.0928806 507.194183,84.9131537 L506.879006,85.0925168 L506.519888,85.2793469 L505.159985,85.9586721 L504.28437,86.4089307 L504.28437,86.4089307 L503.726993,86.7128661 C501.751986,87.8284377 500.962671,88.7689588 501.357998,90.8481585 L501.404888,91.0753469 C501.667374,92.2551901 501.576865,92.9310909 501.404681,93.4516249 L501.326679,93.6662149 L501.326679,93.6662149 L501.133404,94.1248882 C500.937102,94.5948922 500.791786,95.0757602 501.003378,95.9605162 L501.108762,96.3546792 L501.189592,96.6912042 C501.202121,96.748029 501.214195,96.8051771 501.225837,96.8625806 L501.290705,97.2095209 L501.346372,97.5593237 L501.393988,97.9087241 L501.434707,98.2544574 L501.469679,98.5932587 L501.598654,100.069016 L501.636471,100.401021 L501.665058,100.583766 C501.741098,100.998634 501.855047,101.088347 502.087888,100.623347 C502.768888,99.2593469 506.178888,98.9183469 507.200888,100.623347 C507.474398,101.079465 507.601657,101.43801 507.686935,101.764172 L507.752182,102.037329 L507.822087,102.349421 L507.870133,102.539349 L507.928882,102.734467 L508.003482,102.937994 C508.214086,103.460003 508.62156,104.091019 509.587888,105.057347 L510.225353,105.686063 L511.986717,107.370044 L512.085696,107.468523 L512.346953,107.742086 L512.423024,107.827727 L512.423024,107.827727 L512.560228,107.993834 L512.621888,108.075347 L512.621888,108.075347 L512.32384,108.158086 L511.708349,108.321092 C510.669491,108.586453 509.593811,108.808347 508.906888,108.808347 C508.241132,108.808347 507.264247,109.639243 506.320453,110.652531 L505.968754,111.039796 C505.852486,111.17089 505.737408,111.303568 505.624191,111.436562 L505.129551,112.032897 L504.820476,112.420163 L504.397977,112.966626 L504.149603,113.296895 L503.674599,113.948011 L503.451888,114.264347 L503.108888,117.332347 L503.108888,121.424347 C503.108888,121.940711 502.858383,122.457166 502.518683,123.040107 L501.9624,123.972683 L501.9624,123.972683 L501.729525,124.384791 C501.148961,125.451791 500.622191,126.774951 500.700066,128.580999 L500.775854,129.758388 L500.775854,129.758388 L500.798755,130.345407 L500.812173,130.95285 L500.816949,131.576514 L500.813922,132.212197 L500.80393,132.855696 L500.777722,133.826407 L500.726236,135.108822 L500.644738,136.645491 L500.395217,140.467364 L500.38461,140.694618 L500.380888,140.860347 C500.380888,141.155443 500.664551,141.620704 501.068225,142.133402 L501.323522,142.445732 C501.368035,142.498409 501.413422,142.551314 501.459517,142.604325 L501.767459,142.949148 L502.085388,143.289472 L502.559161,143.775139 L503.132598,144.337047 L503.871505,145.023358 L504.576535,145.631331 L505.19708,146.149558 L505.715888,146.569295 L506.071734,146.848466 L506.42594,147.117504 L506.770265,147.368169 C507.163008,147.646691 507.518746,147.870884 507.778576,147.98188 L507.883888,148.022347 C508.338555,148.173458 508.860579,148.796273 509.300277,149.44165 L509.512573,149.76414 L509.70699,150.077913 L509.955996,150.50494 L510.270888,151.090347 L507.883888,155.522347 L507.093793,156.56412 L505.763325,158.287131 L504.708092,159.623625 L503.808803,160.734181 L503.285856,161.36309 L502.951687,161.756045 L502.481173,162.293131 L502.193264,162.608784 L501.930189,162.884508 C501.722312,163.096211 501.544072,163.260959 501.404888,163.365347 L500.880853,163.750192 L499.227541,164.928393 L495.606888,167.457347 L492.197888,166.093347 L491.829254,166.939821 L491.617673,167.407012 L491.276029,168.138219 L490.981185,168.747309 L490.768824,169.173468 L490.430036,169.831125 L490.192693,170.274997 L489.947774,170.717744 L489.696658,171.154671 L489.440727,171.581088 L489.18136,171.9923 C489.051048,172.193323 488.919965,172.386885 488.788888,172.570347 C488.057316,173.593776 487.013316,174.429122 486.059054,175.049624 L485.683088,175.286303 L485.322414,175.499684 L484.982752,175.689387 L484.66982,175.855031 L484.263056,176.057555 L484.041976,176.161387 L483.673888,176.322347 L480.262888,178.709347 L478.557888,182.460347 L476.519158,183.307805 L474.509089,184.166468 L473.137622,184.768291 L472.317078,185.136722 L471.264999,185.621892 L470.30202,186.084794 L469.867963,186.302669 L469.473004,186.508708 L469.122751,186.700818 C468.79672,186.885268 468.546161,187.045691 468.396306,187.172681 L468.329888,187.233347 C467.305888,188.257347 464.235888,189.280347 462.871888,189.280347 C462.49534,189.280347 461.884979,188.994483 461.198596,188.580587 L460.817614,188.343077 C460.753176,188.301692 460.688348,188.259486 460.623246,188.216577 L460.199983,187.930733 L459.776237,187.632448 L459.155264,187.177245 L458.573185,186.734039 L458.218586,186.457081 L457.754636,186.087187 L457.075888,185.529347 L456.270985,184.71047 L455.291377,183.691604 L454.51605,182.868068 L453.899594,182.200752 L453.272439,181.508072 L452.651924,180.805508 L452.250501,180.339288 L451.771537,179.767002 L451.771537,179.767002 L451.327291,179.214733 C450.931984,178.71141 450.595153,178.24595 450.353513,177.851133 L450.255888,177.686347 C450.092208,177.399787 449.923632,177.123077 449.753692,176.855621 L449.41304,176.332875 L449.07503,175.833752 L448.432052,174.902151 L448.139643,174.467559 C447.627086,173.688909 447.254478,173.008051 447.195936,172.395681 L447.187488,172.230147 C447.187488,171.803897 447.253992,171.277745 447.345435,170.693346 L447.591499,169.200287 C447.73814,168.288983 447.868488,167.328834 447.868488,166.434147 C447.868488,165.618147 447.110488,164.426147 446.201488,163.285147 C446.368488,163.206147 446.474488,163.119147 446.506488,163.023147 L446.53709,162.926415 L446.66272,162.481117 L447.210281,160.426481 L447.479789,159.449027 L447.674536,158.767941 L447.87946,158.077624 L448.092948,157.390361 C448.165359,157.163147 448.238927,156.938489 448.313386,156.718435 L448.53916,156.074128 C448.599934,155.907087 448.661106,155.744302 448.722536,155.586822 L448.907469,155.131343 C449.216528,154.402228 449.528627,153.831927 449.826553,153.551461 L449.915488,153.476147 C451.279488,152.454147 453.324488,146.658147 451.620488,145.635147 C451.013966,145.270878 450.321141,144.647699 449.572803,143.919158 L449.066025,143.419541 L448.491991,142.845971 C447.42525,141.779238 446.28414,140.651582 445.143488,139.836147 C442.755488,138.132147 440.708488,135.745147 440.708488,133.700147 C440.708488,133.604938 440.706279,133.513419 440.702101,133.424939 L440.677672,133.106109 L440.677672,133.106109 L440.627945,132.750358 L440.627945,132.750358 L440.57279,132.467303 L440.521712,132.244133 L440.346483,131.551001 L440.255396,131.166942 L440.168465,130.740283 L440.115216,130.425657 C440.098294,130.316213 440.082278,130.201984 440.06741,130.082317 L440.026484,129.706352 L439.993876,129.293849 C439.984553,129.149823 439.976856,128.999056 439.971025,128.840896 L439.959368,128.343581 C439.957508,128.169981 439.957753,127.988335 439.960344,127.797992 L439.97539,127.200217 L440.005945,126.546343 L440.027488,126.197147 C440.190238,123.756851 440.275312,120.92772 440.282709,118.451315 L440.278766,117.109837 L440.270971,116.49 L440.252056,115.613188 L440.224475,114.809933 L440.201273,114.320868 L440.17422,113.872852 L440.143314,113.469229 L440.108557,113.113342 C440.090216,112.94789 440.07043,112.801592 440.0492,112.676329 L440.027488,112.558147 C439.998105,112.410801 439.9687,112.250729 439.939496,112.079911 L439.852709,111.537195 L439.852709,111.537195 L439.768468,110.941877 L439.768468,110.941877 L439.688112,110.305833 C439.675117,110.197091 439.662341,110.087148 439.64981,109.97625 L439.558488,109.106022 L439.517371,108.664594 L439.517371,108.664594 L439.446006,107.784888 L439.420418,107.414124 L439.420418,107.414124 L439.37943,106.694448 C439.368181,106.460738 439.359446,106.234091 439.353522,106.017157 L439.344488,105.398147 L439.344488,105.398147 C439.344488,104.855596 439.752664,104.024879 440.3715,103.090722 L440.671355,102.6529 L440.831152,102.429741 L440.831152,102.429741 L441.16779,101.977452 C441.341251,101.749821 441.521884,101.520465 441.707263,101.291654 L442.08363,100.835432 L442.468335,100.384699 L442.857065,99.9434917 L443.245503,99.5158456 L443.629335,99.1057967 L444.004244,98.7173808 L444.365916,98.3546338 L444.710036,98.0215916 L445.032288,97.72229 L445.328356,97.4607649 C445.656817,97.1792581 445.92301,96.9831182 446.096098,96.9011849 L446.164488,96.8731469 C446.275599,96.8360358 446.442611,96.7189247 446.652115,96.5395914 L446.875285,96.3401757 L447.123803,96.1032292 L447.394688,95.8327025 L447.684961,95.5325461 L447.99164,95.2067107 L448.475905,94.6784515 L449.151202,93.9211017 L449.838488,93.1321469 C450.038488,93.2611469 450.285488,93.3741469 450.596488,93.4631469 C451.313488,93.6680469 452.244868,93.7500069 453.19747,93.7643499 L453.674645,93.7661428 L454.149992,93.7582029 L454.618145,93.7420671 L455.073738,93.7192719 L455.511406,93.6913543 L456.122562,93.6432348 L456.975519,93.5591938 L457.758488,93.4631469 L458.000203,93.5703499 L458.278543,93.6771631 L458.511656,93.7557716 C459.220483,93.9805411 460.321343,94.2011396 461.332987,93.8678284 L461.510488,93.8031469 C461.906767,93.6447748 462.358427,93.6338338 462.818278,93.6760051 L463.094794,93.7069267 L464.045376,93.850172 L464.302706,93.8824296 L464.52943,93.9014334 C465.342454,93.9481295 465.942488,93.7185578 465.942488,92.4391469 C465.942488,89.7111469 465.601488,86.3031469 463.897488,84.9391469 L462.89205,84.1205169 L462.702577,83.9763085 L462.520265,83.8496899 L462.429045,83.791947 L462.429045,83.791947 L462.240979,83.6855349 C462.079298,83.6012127 461.902166,83.5266324 461.686674,83.4532136 L461.408204,83.3651193 L461.08411,83.2748451 L460.493182,83.1281385 L459.463488,82.8941469 L459.463488,82.8941469 C457.091988,82.3663742 457.164449,81.0253412 457.791894,80.2847811 L457.907996,80.160615 C458.069455,80.0041387 458.255488,79.8855106 458.441488,79.8231469 L459.363935,79.518072 L460.010705,79.2931454 L460.482891,79.1201646 L460.973771,78.9306848 L461.400239,78.7563924 L461.400239,78.7563924 L461.82394,78.5722295 L461.82394,78.5722295 L462.237259,78.3792351 C463.251232,77.8865755 464.096474,77.3208612 464.237488,76.7551469 C464.578488,75.3911469 466.625488,71.9821469 468.329488,72.3231469 C469.892405,72.6348136 470.594877,72.0885567 471.489072,70.9431817 L471.738488,70.6161469 C472.762488,69.2521469 475.149488,67.8891469 476.170488,67.8891469 L476.319074,67.8928234 L476.319074,67.8928234 L476.704734,67.9202812 L477.057946,67.9559024 L477.453169,68.0019628 L478.323503,68.11661 L479.655678,68.3119315 L481.297995,68.574972 L481.918605,68.7741557 L482.574616,68.974179 L482.948488,69.0831469 L483.53519,69.2451994 L484.119433,69.3921382 L484.488931,69.4742373 L484.829392,69.5384239 C485.044202,69.574249 485.232202,69.5951469 485.378488,69.5951469 C485.771949,69.5951469 486.367186,69.3930759 486.950782,69.1443732 L487.297835,68.9907992 L487.631851,68.8334947 L488.219792,68.5375384 L488.788488,68.2291469 L488.663661,68.1484858 L488.526075,68.0488494 C488.395661,67.9496759 488.230124,67.8104197 488.061488,67.6331469 Z"></path>`

	resp += data.circle ? '<circle cx="475" cy="130" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default burgos