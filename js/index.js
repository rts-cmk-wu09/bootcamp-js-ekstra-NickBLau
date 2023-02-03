let person = document.querySelector("#aktuelle-person-navn")
let alder = document.querySelector("#aktuelle-person-alder")

document.addEventListener ("DOMContentLoaded", (event) => {

let myPersonArray = [
		"Fedtmule",
		"Anders",
		"Mickey",
]

let myAgeArray = [
	"60år",
	"73år",
	"68år",
]


let random = Math.floor(Math.random() * myPersonArray.length)



person.innerText = myPersonArray [random]
alder.innerText = myAgeArray [random]
	// Slå dig løs her


}); // Afslutter: DOMContentLoaded
