const sevilla = data => {
	let resp = `<g id="${data.id}"
		class="fill-[${data.color}] hover:fill-[${data.active}]">
		<path d="M380.695988,480.477447 C377.627988,480.135447 379.331988,478.092447 378.991988,477.068447 C378.650988,476.043447 378.991988,473.998447 377.627988,472.634447 C376.263988,471.272447 373.535988,469.566447 372.511988,466.838447 C371.488988,464.110447 374.558988,462.403447 374.216988,460.701447 C373.875988,458.995447 371.830988,458.314447 370.807988,456.609447 C369.784988,454.903447 369.443988,454.562447 368.420988,453.539447 C367.396988,452.517447 365.692988,453.198447 364.668988,453.198447 C363.647988,453.198447 362.623988,454.562447 361.600988,453.539447 C360.577988,452.517447 354.780988,458.314447 353.759988,459.337447 C352.735988,460.359447 350.007988,458.654447 348.644988,457.290447 C347.280988,455.926447 348.644988,455.245447 349.667988,454.222447 C350.688988,453.198447 353.759988,452.517447 354.099988,450.811447 C354.440988,449.107447 353.759988,447.743447 353.076988,445.698447 C352.395988,443.651447 352.395988,444.334447 351.031988,439.900447 C349.667988,435.469447 350.348988,438.195447 350.007988,436.148447 C349.667988,434.103447 348.984988,433.763447 347.620988,431.376447 C346.256988,428.988447 347.620988,431.376447 347.620988,429.671447 C347.620988,427.965447 346.937988,426.943447 345.914988,424.896447 C344.892988,422.851447 341.481988,422.168447 340.458988,421.145447 C339.437988,420.124447 338.073988,423.532447 335.685988,422.509447 C333.298988,421.488447 336.026988,418.417447 336.368988,417.053447 C336.709988,415.689447 328.185988,415.689447 328.185988,415.689447 C328.185988,415.689447 326.138988,415.689447 325.797988,417.053447 C325.457988,418.417447 324.433988,419.100447 323.410988,420.124447 C322.386988,421.145447 322.386988,422.168447 322.729988,425.237447 C323.069988,428.307447 316.931988,431.035447 315.226988,429.329447 C313.522988,427.624447 311.817988,429.671447 310.113988,429.671447 C309.286988,429.671447 307.818988,429.992447 306.408988,430.360447 C306.947988,431.916447 307.770988,434.892447 307.043988,436.831447 C306.019988,439.557447 304.657988,438.876447 303.632988,440.242447 C302.610988,441.606447 302.610988,441.264447 299.883988,441.946447 C297.155988,442.627447 296.131988,441.946447 294.767988,442.627447 C293.403988,443.310447 295.108988,442.970447 291.016988,442.970447 C286.924988,442.970447 288.631988,440.242447 285.560988,445.355447 C282.492988,450.471447 283.175988,450.130447 285.220988,450.130447 C287.267988,450.130447 291.699988,449.447447 291.358988,452.858447 C291.016988,456.267447 291.358988,459.337447 292.040988,460.359447 C292.722988,461.382447 295.791988,463.429447 293.744988,466.495447 C291.699988,469.566447 288.971988,468.202447 289.995988,472.293447 C291.016988,476.385447 293.403988,475.021447 292.722988,476.043447 C292.040988,477.068447 288.971988,479.456447 290.335988,481.841447 C291.699988,484.228447 291.699988,484.569447 291.699988,486.956447 C291.699988,489.342447 291.358988,487.639447 290.335988,491.048447 C289.312988,494.459447 292.040988,494.116447 292.040988,495.480447 C292.040988,496.844447 292.040988,497.525447 291.016988,498.889447 C289.995988,500.253447 289.652988,501.959447 289.995988,502.981447 C290.148988,503.443447 290.441988,504.668447 290.716988,505.874447 L291.699988,504.345447 L297.495988,503.323447 C297.495988,503.323447 300.223988,499.232447 302.951988,502.300447 C305.679988,505.368447 301.587988,503.323447 306.702988,506.392447 C311.817988,509.460447 314.545988,509.801447 314.545988,507.415447 C314.545988,505.028447 316.931988,504.004447 317.954988,503.664447 C318.978988,503.323447 324.093988,506.392447 325.114988,505.028447 C326.138988,503.664447 327.502988,499.232447 328.525988,501.278447 C329.549988,503.323447 331.253988,507.415447 333.298988,506.732447 C335.345988,506.051447 336.709988,502.300447 336.709988,502.300447 C336.709988,502.300447 337.390988,498.208447 340.118988,500.253447 C342.845988,502.300447 342.845988,503.664447 342.845988,503.664447 C342.845988,503.664447 347.961988,500.595447 349.325988,501.959447 C350.688988,503.323447 347.620988,500.595447 350.688988,503.323447 C352.662988,505.078447 356.893988,504.152447 359.661988,503.269447 C359.963988,501.825447 360.896988,500.872447 362.283988,500.595447 C363.987988,500.253447 367.739988,498.889447 367.739988,498.889447 C367.739988,498.889447 372.852988,495.823447 372.852988,494.459447 C372.852988,493.095447 374.899988,490.706447 374.899988,490.706447 L378.650988,492.752447 L383.082988,491.388447 C383.082988,491.388447 384.446988,490.025447 384.446988,488.320447 C384.446988,486.614447 385.810988,487.297447 385.810988,487.297447 L387.328988,488.245447 C387.101988,486.150447 386.720988,482.866447 386.491988,482.183447 C386.151988,481.158447 383.763988,480.819447 380.695988,480.477447"></path>`

	resp += data.circle ? '<circle cx="325" cy="470" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default sevilla