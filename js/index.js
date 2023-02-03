let person = document.querySelector("#aktuelle-person-navn")


document.addEventListener ("DOMContentLoaded", (event) => {

let myArray = [
		"Fedtmule",
		"Anders",
		"Mickey",
]
console.log(myArray);


let random = Math.floor(Math.random() * myArray.length)

console.log(random);
person.innerText = myArray [random]
	// Slå dig løs her

}); // Afslutter: DOMContentLoaded
