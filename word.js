const el = document.getElementById("matrix")
const matrix = { element: el, width: el.offsetWidth, height: el.offsetHeight }
const min = 6
class Word {
	constructor() {
		this.element = document.createElement("div")
		this.element.classList.add("word")

		this.length = Math.floor(Math.random() * 100) + min
		matrix.element.appendChild(this.element)

		this.X = Math.floor(Math.random() * matrix.width)
		this.element.style.left = `${this.X}px`
	}

	increment() {
		// for (let i = 0; i < this.length; i++) {
		if (this.element.childNodes.length > this.length) {
			return
		}
		const letter = document.createElement("p")
		letter.style.opacity = this.element.childNodes.length / this.length
		letter.innerHTML = String.fromCharCode(Math.floor(Math.random() * 500 + 97))
		this.element.appendChild(letter)
		// }
	}

	out() {
		if (this.element.offsetHeight > matrix.height) {
			return true
		} else {
			return false
		}
	}
}
