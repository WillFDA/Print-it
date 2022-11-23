const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector('.arrow_right');
const dots = document.getElementsByClassName("dot")
const slidNumber = slides.length;
const banerImage = document.querySelector('.active_img');
const banerParagraph = document.querySelector("#banner p");
console.log(banerParagraph)
var sourceImage = "./assets/images/slideshow/";
let count = 0;

function img() {
	const image = slides[count].image;
	// const image = `slide${count + 1}.jpg`
	console.log(image)
	banerImage.setAttribute("src", sourceImage + image )
	const paragraph = slides[count].tagLine;
	console.log(paragraph)
	banerParagraph.innerHTML = paragraph;
}


function slideSuivant() {
	dots[count].classList.remove("dot_selected");
	if(count < slidNumber - 1)  {
		count++
	} else {
		count = 0;
	}
	dots[count].classList.add("dot_selected");
	img()
}

function slidePrecedent() {
	dots[count].classList.remove("dot_selected");
	if(count > 0)  {
		count--
	} else {
		count = slidNumber - 1;
	}
	dots[count].classList.add("dot_selected");
	img()
}

leftArrow.addEventListener("click", slidePrecedent);
rightArrow.addEventListener("click", slideSuivant);
