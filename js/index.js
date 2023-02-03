let person = document.querySelector("#aktuelle-person-navn")


document.addEventListener ("DOMContentLoaded", (event) => {

let myArray = [
		"Fedtmule",
		"Anders",
		"Mickey",
]


let random = Math.floor(Math.random() * myArray.length)


person.innerText = myArray [random]
	// Slå dig løs her

}); // Afslutter: DOMContentLoaded
