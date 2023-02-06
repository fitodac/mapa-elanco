const guipuzcoa = data => {
	let resp =`<g id="${data.id}"
		class="fill-[${data.color}] hover:fill-[${data.active}]">
		<path d="M577.786888,59.0271469 C577.786888,60.4171469 577.666888,60.1271469 577.706888,60.9571469 L576.426888,61.4071469 C576.426888,61.4071469 569.596888,67.5471469 568.236888,68.5671469 C566.876888,69.5971469 565.166888,71.2971469 564.146888,76.7571469 C563.126888,82.2071469 558.686888,84.2571469 556.986888,86.3071469 C555.276888,88.3471469 549.486888,89.7171469 549.486888,89.7171469 C549.486888,89.7171469 549.466888,89.7871469 549.426888,89.9171469 C549.206888,89.9571469 548.996888,89.8671469 548.816888,89.8671469 C548.396888,89.8671469 548.206888,89.8371469 547.856888,89.6671469 C547.666888,89.5771469 547.566888,89.3571469 547.546888,89.1171469 C547.516888,88.8671469 547.546888,88.5971469 547.576888,88.4271469 C547.616888,88.2771469 547.536888,88.1771469 547.446888,88.0471469 C547.346888,87.9171469 547.236888,87.7771469 547.236888,87.5871469 C547.236888,87.5171469 547.196888,87.4771469 547.136888,87.4571469 C547.066888,87.4471469 546.976888,87.4571469 546.876888,87.4771469 C546.676888,87.5071469 546.436888,87.5571469 546.276888,87.5171469 C546.066888,87.4671469 545.876888,87.4371469 545.706888,87.3871469 C545.546888,87.3371469 545.386888,87.2571469 545.246888,87.1271469 C545.056888,86.9471469 544.856888,86.8771469 544.676888,86.7871469 C544.496888,86.6971469 544.356888,86.5971469 544.286888,86.3471469 C544.226888,86.1171469 544.186888,85.9671469 544.086888,85.9071469 C543.986888,85.8371469 543.826888,85.8471469 543.526888,85.9671469 C543.396888,86.0171469 543.186888,85.9771469 542.966888,85.9271469 C542.756888,85.8771469 542.526888,85.7971469 542.366888,85.7571469 C542.166888,85.7071469 542.096888,85.5871469 542.016888,85.5071469 C541.926888,85.4171469 541.816888,85.3671469 541.536888,85.4371469 C541.326888,85.4871469 541.246888,85.4671469 541.176888,85.4171469 C541.106888,85.3571469 541.036888,85.2571469 540.846888,85.1671469 C540.726888,85.1171469 540.536888,85.2171469 540.356888,85.3471469 C540.276888,85.4171469 540.116888,85.5971469 540.006888,85.6071469 C539.856888,85.6271469 539.706888,85.4471469 539.586888,85.3471469 C539.456888,85.2371469 539.316888,85.1271469 539.146888,85.0671469 C538.986888,85.0071469 538.786888,85.0171469 538.646888,85.1271469 C538.466888,85.2771469 538.436888,85.5971469 538.206888,85.6771469 C538.056888,85.7271469 537.876888,85.6371469 537.776888,85.5071469 C537.666888,85.3771469 537.606888,85.2171469 537.516888,85.0771469 C537.226888,84.6571469 536.596888,84.5071469 536.146888,84.7571469 C535.806888,84.9571469 535.526888,85.3471469 535.136888,85.2971469 C534.936888,85.2671469 534.766888,85.1171469 534.606888,84.9771469 C534.316888,84.7371469 533.976888,84.5471469 533.616888,84.4271469 C533.456888,84.3671469 533.236888,84.3371469 533.136888,84.4871469 C533.076888,84.5771469 533.096888,84.7071469 533.166888,84.8071469 C533.226888,84.9071469 533.316888,84.9771469 533.406888,85.0571469 C533.566888,85.1971469 533.686888,85.3871469 533.766888,85.5871469 C533.806888,85.6671469 533.826888,85.7571469 533.786888,85.8371469 C533.756888,85.9071469 533.686888,85.9371469 533.616888,85.9571469 C533.386888,85.9971469 533.166888,85.8571469 532.996888,85.7071469 C532.826888,85.5571469 532.656888,85.3771469 532.426888,85.3271469 C532.286888,85.2971469 532.146888,85.3071469 532.006888,85.2771469 C531.406888,85.1371469 531.256888,84.3571469 530.616888,84.1971469 C530.426888,84.1571469 530.286888,84.0471469 530.156888,83.9271469 C530.026888,83.8071469 529.926888,83.6671469 529.796888,83.5471469 C529.696888,83.4571469 529.836888,83.4371469 529.996888,83.4071469 C530.176888,83.3871469 530.386888,83.3671469 530.466888,83.2771469 C530.526888,83.2271469 530.126888,82.5971469 530.126888,82.4471469 C530.126888,82.2171469 530.136888,82.0671469 530.156888,81.9571469 C530.176888,81.8371469 530.216888,81.7571469 530.336888,81.6571469 C530.396888,81.5971469 531.166888,81.3371469 531.366888,81.1971469 C531.736888,80.9371469 531.906888,80.6771469 532.336888,80.4771469 C532.536888,80.3771469 532.676888,80.3871469 532.786888,80.3871469 C532.896888,80.3871469 532.986888,80.3871469 533.146888,80.2271469 C533.356888,80.0271469 533.456888,79.6071469 533.636888,79.3771469 C533.846888,79.1171469 534.006888,79.0071469 534.186888,78.6571469 C534.306888,78.4371469 534.266888,78.2471469 534.176888,78.0871469 C534.076888,77.9171469 533.906888,77.7771469 533.766888,77.6771469 C533.566888,77.5271469 533.446888,77.5571469 533.376888,77.5271469 C533.306888,77.4971469 533.286888,77.4271469 533.286888,77.0871469 C533.286888,76.9471469 533.196888,76.9771469 533.136888,76.9271469 C533.076888,76.8671469 533.036888,76.7371469 533.146888,76.3071469 C533.206888,76.0771469 533.186888,75.8771469 533.196888,75.7271469 C533.206888,75.6971469 533.216888,75.3671469 533.226888,75.3371469 L533.236888,75.2871469 C533.276888,75.2571469 533.336888,75.2271469 533.416888,75.2071469 C533.616888,75.1671469 533.756888,75.0671469 533.926888,75.0171469 C534.106888,74.9671469 534.286888,74.9471469 534.576888,75.0171469 C534.636888,75.0371469 534.686888,75.0571469 534.726888,75.0871469 L534.736888,75.0871469 C534.896888,75.1371469 535.056888,75.1871469 535.216888,75.1571469 C535.276888,75.1471469 535.326888,75.1271469 535.376888,75.0971469 C535.386888,75.0871469 535.386888,75.0871469 535.396888,75.0771469 C535.496888,74.9771469 535.576888,74.8671469 535.616888,74.7471469 C535.636888,74.7071469 535.636888,74.6571469 535.646888,74.6171469 C535.676888,74.4571469 535.676888,74.2771469 535.676888,74.0971469 C535.676888,73.6771469 535.666888,73.2471469 535.746888,72.8571469 C535.756888,72.8171469 535.786888,72.7971469 535.816888,72.7871469 C535.876888,72.7571469 535.986888,72.7871469 536.046888,72.7871469 C536.106888,72.7871469 536.076888,72.7271469 535.746888,72.4071469 C535.636888,72.3071469 535.606888,72.1371469 535.596888,71.9571469 C535.586888,71.7871469 535.606888,71.5871469 535.606888,71.4271469 L535.606888,70.3871469 C535.606888,70.2271469 535.516888,70.0571469 535.416888,69.9071469 C535.326888,69.7471469 535.226888,69.6071469 535.186888,69.5371469 C535.186888,69.5271469 535.216888,69.5171469 535.256888,69.5171469 C535.266888,69.5171469 535.286888,69.5071469 535.306888,69.5071469 C535.516888,69.4771469 536.176888,69.4671469 536.256888,69.4671469 C536.396888,69.4671469 536.496888,69.4571469 536.566888,69.4371469 C536.626888,69.4171469 536.666888,69.3971469 536.676888,69.3571469 C536.726888,69.2671469 536.666888,69.1371469 536.566888,68.9471469 C536.426888,68.6871469 536.276888,68.6271469 536.246888,68.5771469 C536.226888,68.5571469 536.236888,68.5371469 536.276888,68.5271469 C536.286888,68.5171469 536.326888,68.4871469 536.426888,68.4371469 C536.496888,68.3971469 536.586888,68.3571469 536.706888,68.2971469 C536.826888,68.2471469 536.566888,67.6971469 536.566888,67.4571469 C536.566888,67.1771469 536.606888,66.9871469 536.556888,66.8871469 C536.546888,66.8571469 536.536888,66.8471469 536.516888,66.8371469 C536.476888,66.8071469 536.406888,66.8171469 536.316888,66.8371469 C536.256888,66.8571469 536.196888,66.8871469 536.106888,66.9271469 C536.066888,66.9471469 536.036888,66.9571469 536.006888,66.9571469 C535.966888,66.9771469 535.926888,66.9671469 535.896888,66.9571469 L535.876888,66.9571469 C535.826888,66.9271469 535.796888,66.8771469 535.776888,66.8071469 C535.726888,66.6571469 535.746888,66.4471469 535.746888,66.2771469 C535.746888,66.0071469 535.786888,65.8371469 535.856888,65.6771469 C535.936888,65.5171469 536.036888,65.3871469 536.156888,65.1771469 C536.226888,65.0371469 536.306888,64.9671469 536.396888,64.9371469 L536.416888,64.9371469 C536.466888,64.9171469 536.526888,64.9171469 536.576888,64.9371469 C536.616888,64.9371469 536.646888,64.9471469 536.676888,64.9671469 C536.846888,65.0571469 536.986888,65.2271469 537.076888,65.3071469 C537.176888,65.3971469 537.366888,65.4071469 537.566888,65.3971469 L537.586888,65.3971469 C537.696888,65.3971469 537.796888,65.3771469 537.886888,65.3671469 C537.966888,65.3471469 538.036888,65.3271469 538.086888,65.3071469 C538.226888,65.2371469 538.296888,65.0671469 538.366888,64.8971469 C538.426888,64.7271469 538.486888,64.5571469 538.626888,64.4571469 C538.836888,64.2971469 539.126888,63.9871469 539.316888,63.7971469 C539.666888,63.4671469 539.886888,63.1271469 540.206888,62.8271469 C540.356888,62.6771469 540.396888,62.5771469 540.396888,62.4471469 C540.386888,62.3171469 540.346888,62.1771469 540.346888,61.9771469 C540.346888,61.7771469 540.126888,61.5371469 539.876888,61.3071469 C539.626888,61.0771469 539.346888,60.8471469 539.246888,60.6671469 C539.346888,60.3571469 539.386888,60.1571469 539.366888,60.0271469 C539.366888,59.8871469 539.316888,59.8371469 539.266888,59.7871469 C539.236888,59.7371469 539.206888,59.7071469 539.216888,59.6371469 C539.236888,59.5771469 539.306888,59.4871469 539.466888,59.3071469 C539.546888,59.1971469 539.636888,59.1371469 539.726888,59.1171469 C539.736888,59.1071469 539.736888,59.1071469 539.746888,59.1071469 C539.836888,59.0871469 539.936888,59.0871469 540.026888,59.0771469 C540.066888,59.0771469 540.096888,59.0671469 540.126888,59.0571469 C540.166888,59.0471469 540.196888,59.0371469 540.236888,59.0071469 C540.306888,58.9571469 540.376888,58.8671469 540.416888,58.7171469 C540.486888,58.4471469 540.586888,58.2471469 540.676888,58.0171469 L540.876888,57.7371469 L540.886888,57.7371469 C541.106888,57.9371469 541.416888,58.1071469 541.866888,58.2371469 C543.256888,58.6271469 545.836888,57.2371469 546.826888,59.0271469 C547.816888,60.8171469 547.616888,61.0071469 549.206888,60.8171469 C550.796888,60.6171469 550.796888,61.0071469 552.186888,61.8071469 C553.576888,62.5971469 554.166888,63.5871469 555.756888,62.9971469 C557.346888,62.3971469 557.146888,61.0071469 559.726888,61.0071469 C562.306888,61.0071469 563.696888,60.4171469 563.696888,60.4171469 L568.656888,58.2371469 C568.656888,58.2371469 572.136888,53.5971469 573.326888,53.9971469 C574.516888,54.3871469 575.596888,56.6471469 576.396888,56.6471469 C577.186888,56.6471469 577.986888,56.2471469 579.366888,56.0471469 C580.756888,55.8471469 577.786888,57.2371469 577.786888,59.0271469"></path>`

	resp += data.circle ? '<circle cx="550" cy="74" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default guipuzcoa