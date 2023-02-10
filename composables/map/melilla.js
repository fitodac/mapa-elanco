const melilla = data => {
	let resp = `<g id="${data.id}"
		class="fill-[${data.color}] hover:fill-[${data.active}]">
		<polygon points="503.636788 651.191247 514.345788 651.191247 514.345788 640.482247 503.636788 640.482247"></polygon>`

	resp += data.circle ? '<circle cx="508" cy="646" r="7" />' : ''
	resp += '</g>'

	return resp
}

export default melilla