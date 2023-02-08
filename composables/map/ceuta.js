const ceuta = data => {
	let resp =`<g id="${data.id}" 
		class="fill-gray-300 hover:fill-[${data.active}]">
		<polygon points="331.906788 596.840247 342.615788 596.840247 342.615788 586.131247 331.906788 586.131247"></polygon>`

	resp += data.circle ? '<circle cx="338" cy="592" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default ceuta