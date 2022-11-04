window.onload = () => {
	const matrix = { element: el, width: el.offsetWidth, height: el.offsetHeight }
	const Words = new Array(100).fill("")
	for (let i = 0; i < Words.length; i++) {
		const w = new Word()
		Words[i] = w
	}

	for (let i = 0; i < Words.length; i++) {
		if (Words[i].out()) {
			matrix.element.removeChild(Words[i].element)
			const nw = new Word()
			matrix.element.appendChild(nw)

			Words[i] = nw
		} else {
			const velocity = Math.floor(Math.random() * 1000)
			setInterval(() => {
				Words[i].increment()
			}, velocity)
		}
	}
}
