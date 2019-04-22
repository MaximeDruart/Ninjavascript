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
 * BUTTON SKINS
/* ---------------------------------------------- */

let windowSkin = document.querySelector(".windowSkinContainer")
let openButton3 = document.querySelectorAll(".openButton3")
let closeButton3 = document.querySelector(".closeButton3")

openButton3.forEach(e => {
  e.addEventListener('click', function () {
      windowSkin.classList.remove("hidden")
      console.log("haha")
      blackBg.classList.remove("hideblackBg")
  })
})

closeButton3.addEventListener("click", function () {
  windowSkin.classList.add("hidden")
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
        completedLevelUpdate()
        containerWindow.classList.remove("hidden")
        console.log("haha")
        blackBg.classList.remove("hideblackBg")
        buttonsClear()
        for (button of levelsButton) {
          if (parseInt(button.innerHTML) == activeMap+1) {
            button.classList.add("activeLevel")
          }
        }
    })
})

closeButton2.addEventListener("click", function () {
    containerWindow.classList.add("hidden")
    blackBg.classList.add("hideblackBg")
})




// sélecteur de niveau
let levelsButton = document.querySelectorAll(".part1 span, .part2 span, .part3 span")
function buttonsClear() {
  levelsButton.forEach(button => {
    button.classList.remove("activeLevel")
 })
}

levelsButton.forEach(button => {
  button.addEventListener('click',(event) => {
    buttonsClear()
    button.classList.add("activeLevel")
    activeMap = parseInt(button.innerHTML)-1 //
    levels[activeMap].drawMap(levels[activeMap].map, true)
    containerWindow.classList.add("hidden")
    blackBg.classList.add("hideblackBg")
    levelIndicatorUpdate()
    cBoard.clear()
  })
})

function completedLevelUpdate() {
  if (localStorage.getItem('CompletedLevelsLocal') === null) {
    levelsCompleted = []
  } else {
    levelsCompleted = JSON.parse(localStorage.getItem('CompletedLevelsLocal'))
  }
  for (var i = 0; i < levelsButton.length; i++) {
    for (level of levelsCompleted) {
      if (level == parseInt(levelsButton[i].innerHTML)-1) {
        levelsButton[i].setAttribute("id", "completedLevel")
      }
    }
  }
}



// bouton RESET
let resetButton = document.querySelector(".resetButton")
resetButton.addEventListener("click", (e) => {
  levels[activeMap].mapReset()
  levels[activeMap].drawMap(levels[activeMap].map, true)
  cBoard.clearFields()
  cBoard.clear()
})


// bouton PLAY
let playButton = document.querySelector(".playButton")
playButton.addEventListener('click', (e) => {
  cBoard.read()
})

// bouton + FOR
let addForButton = document.querySelector(".addFor")
addForButton.addEventListener('click', (e) => {
  cBoard.createFor()
})

// bouton + Action
let addActionButton = document.querySelector(".addAction")
addActionButton.addEventListener('click', (e) => {
  cBoard.createAction()
})


// update du texte de niveau dans la commandBoard
let lvlInd = document.querySelector(".levelIndicator")
function levelIndicatorUpdate(){
  lvlInd.innerHTML = "Level "+(activeMap+1)
}

// bouton de skins
let skinLinks = document.querySelectorAll('.skinContent img')
skinLinks.forEach((skin, index) => {
  skin.addEventListener('click', (event) => {
    ninja.skinSwap(index)
    windowSkin.classList.add("hidden")
    blackBg.classList.add("hideblackBg")
    // setTimeout((e) => {
    //
    //   ninja.drawCharacter(ninja.finalImages[3], ninja.x, ninja.y, ninja.z)
    // },500)
  })
})
