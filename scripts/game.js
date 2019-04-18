/* ---------------------------------------------- /*
 * AUDIO AUTOPLAY MUTE HAHAAHAHA
/* ---------------------------------------------- */

let logoMusic = document.querySelector("#logoMusic img")
let audio = document.querySelector("#audio")
audio.muted = true;

// audio.muted = true;


logoMusic.addEventListener('click', function(){
    if (audio.muted) {
        audio.muted = false
        logoMusic.src = "images/game/music.svg"
    } else {
        audio.muted = true
        logoMusic.src = "images/game/nomusic.svg"
        
    }
})

let blackBg = document.querySelector(".blackBg")

/* ---------------------------------------------- /*
 * BUTTON HELP
/* ---------------------------------------------- */

let side = document.querySelector(".sideBar")
let openButton = document.querySelectorAll(".openButton")
let closeButton = document.querySelector(".closeButton")

openButton.forEach(e => {
    e.addEventListener('click', function () {
        side.classList.remove("hidden")
        console.log("haha")
        blackBg.classList.remove("hideblackBg")
    })
})


// openButton.addEventListener("click", function () {
//     side.classList.remove("hidden")
//     console.log("haha")
// })

closeButton.addEventListener("click", function () {
    side.classList.add("hidden")
    blackBg.classList.add("hideblackBg")
})

/* ---------------------------------------------- /*
 * BUTTON LEVEL
/* ---------------------------------------------- */

let containerWindow = document.querySelector(".containerWindow")
let openButton2 = document.querySelectorAll(".openButton2")
let closeButton2 = document.querySelector(".closeButton2")

openButton2.forEach(e => {
    e.addEventListener('click', function () {
        containerWindow.classList.remove("hidden")
        console.log("haha")
        blackBg.classList.remove("hideblackBg")
    })
})

closeButton2.addEventListener("click", function () {
    containerWindow.classList.add("hidden")
    blackBg.classList.add("hideblackBg")
})



