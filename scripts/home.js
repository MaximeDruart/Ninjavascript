(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Animated scrolling / Scroll Up
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});
	});

})(jQuery);

// SLIDER

let pos = 0
let imageList = []
for (var i = 0; i < 6; i++) {
  imageList.push("images/akira_side (" + i + ").jpg")
}
let textList = []
for (var i = 0; i < 6; i++) {
  textList.push("sub-text " + (i + 1))
}

const subtitle = document.querySelector(".subtitle")
const line = document.querySelector(".line")
const img = document.querySelector("#akira_sideimg")
const text = document.querySelector(".text")
const nav = document.querySelector(".nav")
const arrows = document.querySelectorAll(".arrow")
const leftArrow = arrows[0]
const rightArrow = arrows[1]
const fondblancdecemaures = document.querySelector(".fondblancdecemaures")
const truc_xd = document.querySelector(".truc_xd")
let bullpoints = document.querySelectorAll("li") // On récupère les <li> sous forme de nodeList
let arr_bullpoints = Array.prototype.slice.call(bullpoints) // Conversion de la nodeList en array
img.src = imageList[pos]

// document.addEventListener("scroll", function() {
//   if (window.scrollY >= 800 && window.scrollY<1600) { // UPDATE LES VALEURS : ou est triggered l'apparition
//     appearing_anim()
//   } else if (window.scrollY < 750 || window.scrollY>=1563) { // UPDATE LES VALEURS
//     disappearing_anim()
//   }
// })

appearing_anim()

tlApparition = new TimelineMax({paused:true})
tlApparition.to(".line",0.6,{ease: Power1.easeOut,top:'50%'})
.to(".fondblancdecemaures",0.3,{ease: Power1.easeOut,opacity:1},"syncApp-0.3")
tlApparition.to("#akira_sideimg",0.6,{opacity:1},"syncApp")
.to(".text",0.6,{ease: Power1.easeOut, left:"52%", opacity:1},"syncApp")
.to(".nav",0.6,{ease: Power1.easeOut,left:"58%", opacity:1},"syncApp")
.to(leftArrow,0.6,{ease: Power1.easeOut,left:"53%", opacity:1},"syncApp")
.to(rightArrow,0.6,{ease: Power1.easeOut,left:"77%", opacity:1},"syncApp")



function appearing_anim() {
  line.style.top = "50%" // barre au milieu
  if (pos != 0) {
    img.style.left = "35%"
  } else {
    img.style.left = "50%"
  }
  img.style.opacity = "1"
  text.style.left = "52%", text.style.opacity = "1"
  nav.style.left = "58%", nav.style.opacity = "1"
  arrows[0].style.left = "53%", arrows[0].style.opacity = "1"
  arrows[1].style.left = "77%", arrows[1].style.opacity = "1"
  fondblancdecemaures.style.opacity = "1"
}
function disappearing_anim() {
  line.style.top = "200%" // barre au milieu
  img.style.left = "0%", img.style.opacity = "0"
  text.style.left = "68%", text.style.opacity = "0"
  nav.style.left = "75%", nav.style.opacity = "0"
  arrows[0].style.left = "83%", arrows[0].style.opacity = "0"
  arrows[1].style.left = "96%", arrows[1].style.opacity = "0"
  fondblancdecemaures.style.opacity = "0"

}

arrows[1].addEventListener('click', slideRight)
arrows[0].addEventListener('click', slideLeft)
window.addEventListener('keydown', function(e){
  if (e.keyCode == 39) {
    slideRight()
  } else if (e.keyCode == 37) {
    slideLeft()
  }
})


function slideLeft() {
  text.style.transform = "translateY(-50%) scaleX(0.001)"
  text.style.left = "50%"
  text.style.opacity = "0"
  img.style.left = "75%"
  pos--
  if (pos < 0) {
    pos = 5
  }
  setTimeout(function() {
    img.src = imageList[pos]
    subtitle.innerHTML = textList[pos]
    if (pos != 0) {
      img.style.left = "35%"
    } else {
      img.style.left = "50%"
    }
    text.style.transform = "translateY(-50%)"
    text.style.left = "52%"
    text.style.opacity = "1"
  }, 800)
}
function slideRight() {
  text.style.transform = "translateY(-50%) scaleX(0.001)"
  text.style.left = "50%"
  img.style.left = "75%"
  pos++
  if (pos == 6) {
    pos = 0
  }
  setTimeout(function() {
    img.src = imageList[pos]
    subtitle.innerHTML = textList[pos]
    if (pos != 0) {
      img.style.left = "35%"
    } else {
      img.style.left = "50%"
    }
    text.style.transform = "translateY(-50%)"
    text.style.left = "52%"
  }, 800)
}
function slideNeutral() {
  text.style.transform = "translateY(-50%) scaleX(0.001)"
  text.style.left = "50%"
  img.style.left = "75%"
  setTimeout(function() {
    img.src = imageList[pos]
    subtitle.innerHTML = textList[pos]
    if (pos != 0) {
      img.style.left = "35%"
    } else {
      img.style.left = "50%"
    }
    text.style.transform = "translateY(-50%)"
    text.style.left = "52%"
  }, 800)
}

// BULLETPOINTS
function bullPointCheck() { // Fonction qui vient update le bullet point foncé en fonction de la valeur de pos
  for (var i = 0; i < arr_bullpoints.length; i++) { // on parcourt les bullet points
    if (arr_bullpoints.indexOf(arr_bullpoints[i]) == pos) { // Si le bullet point sur lequel la boucle est actuellement a un index egal à pos
      bullpoints[i].style.listStyleType = "disc" // on change le list style en disque (rond rempli)
    } else {
      bullpoints[i].style.listStyleType = "circle" // dans le cas contraire on le remet en circle (rond vide)
    }
  }
}
setInterval(bullPointCheck, 10) // On effectue le check du bulletpoint actuel en continu

let current
bullpoints.forEach(function(item, currentIndex) { // forEach parcourt chaque item de bulletpoints
  item.addEventListener('click', function() { // cette fonction permet de cliquer sur un bulletpoint pour changer d'endroit dans le slider
    pos = currentIndex
    // on définit alors la position comme l'index de l'élément sur lequel on a cliqué
    // currentIndex est un argument que l'on peut préciser lorsqu'on applique la méthode forEach à une nodeList
    slideNeutral()
  })
})





