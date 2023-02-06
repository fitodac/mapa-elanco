const cadiz = data => {
	let resp =`<g id="${data.id}" 
		class="fill-[${data.color}] hover:fill-[${data.active}]">
		<path d="M350.690188,503.323747 C347.622188,500.595747 350.690188,503.323747 349.326188,501.959747 C347.962188,500.595747 342.847188,503.663747 342.847188,503.663747 C342.847188,503.663747 342.847188,502.300747 340.119188,500.253747 C337.391188,498.208747 336.708188,502.300747 336.708188,502.300747 C336.708188,502.300747 335.344188,506.051747 333.299188,506.732747 C331.253188,507.415747 329.548188,503.323747 328.527188,501.278747 C327.503188,499.231747 326.139188,503.663747 325.116188,505.027747 C324.092188,506.391747 318.979188,503.323747 317.956188,503.663747 C316.932188,504.004747 314.545188,505.027747 314.545188,507.415747 C314.545188,509.800747 311.817188,509.460747 306.704188,506.391747 C301.588188,503.323747 305.680188,505.368747 302.952188,502.300747 C300.225188,499.231747 297.497188,503.323747 297.497188,503.323747 L291.699188,504.345747 L288.630188,509.119747 L286.301188,508.536747 C286.501188,509.862747 285.439188,509.896747 284.088188,511.078747 C282.501188,512.468747 282.105188,513.857747 283.098188,515.841747 C284.088188,517.826747 284.088188,520.802747 284.883188,521.198747 C285.677188,521.597747 287.462188,521.597747 289.250188,521.795747 C291.035188,521.993747 290.042188,522.785747 291.233188,524.176747 C292.424188,525.565747 292.028188,526.556747 290.439188,526.556747 C288.851188,526.556747 288.653188,527.152747 289.250188,528.541747 C289.844188,529.930747 292.622188,534.097747 293.218188,536.082747 C293.813188,538.068747 295.598188,538.862747 295.598188,542.234747 C295.598188,545.607747 296.789188,546.203747 297.980188,547.394747 C299.170188,548.583747 301.154188,553.744747 301.552188,554.935747 C301.950188,556.124747 306.315188,555.529747 308.100188,555.728747 C309.887188,555.928747 309.291188,556.918747 310.878188,558.704747 C312.465188,560.491747 312.069188,561.285747 313.458188,562.476747 C314.849188,563.665747 316.038188,564.658747 319.610188,565.650747 C323.182188,566.643747 322.984188,568.032747 324.175188,569.223747 C325.364188,570.413747 326.953188,568.428747 327.746188,568.230747 C328.540188,568.032747 334.494188,566.445747 335.485188,565.650747 C336.477188,564.856747 335.485188,563.469747 335.883188,561.085747 C336.279188,558.704747 337.668188,559.894747 339.057188,559.894747 C340.446188,559.894747 340.050188,563.269747 340.446188,561.481747 C340.844188,559.698747 341.835188,556.522747 343.622188,554.737747 C345.019188,553.338747 345.929188,552.550747 346.641188,551.795747 C345.856188,551.195747 344.984188,550.470747 344.211188,549.695747 C342.164188,547.650747 342.847188,545.945747 342.847188,544.922747 C342.847188,543.900747 341.483188,540.490747 340.119188,539.466747 C338.755188,538.445747 337.732188,537.762747 337.391188,536.057747 C337.051188,534.353747 333.980188,535.374747 331.935188,535.374747 C329.889188,535.374747 327.844188,534.010747 327.844188,532.647747 C327.844188,531.283747 333.980188,532.647747 335.344188,532.647747 C336.708188,532.647747 336.368188,529.919747 338.072188,528.897747 C339.779188,527.874747 343.187188,528.555747 344.211188,526.169747 C345.234188,523.782747 348.303188,520.033747 347.962188,518.326747 C347.622188,516.620747 347.281188,514.915747 347.281188,513.211747 C347.281188,511.507747 348.645188,511.507747 349.667188,511.507747 C350.690188,511.507747 353.077188,513.892747 354.441188,515.258747 C355.805188,516.622747 357.510188,513.211747 358.533188,511.507747 C359.555188,509.800747 359.555188,506.391747 359.555188,504.345747 C359.555188,503.962747 359.591188,503.602747 359.662188,503.269747 C356.894188,504.152747 352.664188,505.077747 350.690188,503.323747"></path>`

	resp += data.circle ? '<circle cx="315" cy="530" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default cadiz