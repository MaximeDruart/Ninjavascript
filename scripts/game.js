/* ---------------------------------------------- /*
 * AUDIO AUTOPLAY MUTE HAHAAHAHA
/* ---------------------------------------------- */

class HUD_Elements {
  constructor() {
    /* ---------------------------------------------- /*
     * MUSIC
    /* ---------------------------------------------- */

    this.logoMusic = document.querySelector("#logoMusic img")
    this.audio = document.querySelector("#audio")
    this.audio.muted = true
    this.logoMusic.addEventListener('click', (e) => {
      if (this.audio.muted) {
        this.audio.muted = false
        this.logoMusic.src = "images/game/music.svg"
      } else {
        this.audio.muted = true
        this.logoMusic.src = "images/game/nomusic.svg"
      }
    })

    /* ---------------------------------------------- /*
     * HELP BUTTON
    /* ---------------------------------------------- */

    this.blackBg = document.querySelector(".blackBg")
    this.side = document.querySelector(".sideBar")
    this.openButton = document.querySelectorAll(".openButton")
    this.closeButton = document.querySelector(".closeButton")

    this.openButton.forEach(button => {
      button.addEventListener('click', (e) => {
        this.side.classList.remove("hidden")
        this.blackBg.classList.remove("hideblackBg")
      })
    })

    this.closeButton.addEventListener("click", (e) => {
      this.side.classList.add("hidden")
      this.blackBg.classList.add("hideblackBg")
    })

    /* ---------------------------------------------- /*
     * SKINS BUTTONS
    /* ---------------------------------------------- */

    this.windowSkin = document.querySelector(".windowSkinContainer")
    this.openButton3 = document.querySelectorAll(".openButton3")
    this.closeButton3 = document.querySelector(".closeButton3")

    this.openButton3.forEach(button => {
      button.addEventListener('click', (e) => {
        this.windowSkin.classList.remove("hidden")
        this.blackBg.classList.remove("hideblackBg")
      })
    })

    this.closeButton3.addEventListener("click", (e) => {
      this.windowSkin.classList.add("hidden")
      this.blackBg.classList.add("hideblackBg")
    })


    // ON SKIN CLICK
    this.skinLinks = document.querySelectorAll('.skinContent img')
    this.skinLinks.forEach((skin, index) => {
      skin.addEventListener('click', (event) => {
        ninja.skinSwap(index)
        this.windowSkin.classList.add("hidden")
        this.blackBg.classList.add("hideblackBg")
        setTimeout((e) => {
          ninja.drawCharacter(ninja.finalImages[3], ninja.x, ninja.y, ninja.z)
        }, 500)
      })
    })

    /* ---------------------------------------------- /*
     * LEVEL BUTTONS
    /* ---------------------------------------------- */

    this.levelsButton = document.querySelectorAll(".part1 span, .part2 span, .part3 span")
    this.containerWindow = document.querySelector(".containerWindow")
    this.openButton2 = document.querySelectorAll(".openButton2")
    this.closeButton2 = document.querySelector(".closeButton2")

    // OPEN POP UP
    this.openButton2.forEach(butt => {
      butt.addEventListener('click', (e) => {
        this.completedLevelUpdate()
        this.containerWindow.classList.remove("hidden")
        this.blackBg.classList.remove("hideblackBg")
        this.buttonsClear()
        this.levelsButton.forEach((button) => {
          if (parseInt(button.innerHTML) == activeMap + 1) {
            button.classList.add("activeLevel")
          }
        })
      })
    })

    // CLOSE POP UP
    this.closeButton2.addEventListener("click", (e) => {
      this.containerWindow.classList.add("hidden")
      this.blackBg.classList.add("hideblackBg")
    })

    // ON LEVEL CLICK
    this.levelsButton.forEach(button => {
      button.addEventListener('click', (event) => {
        this.buttonsClear()
        button.classList.add("activeLevel")
        activeMap = parseInt(button.innerHTML) - 1 //
        levels[activeMap].drawMap(levels[activeMap].map, true)
        this.containerWindow.classList.add("hidden")
        this.blackBg.classList.add("hideblackBg")
        cBoard.levelIndicatorUpdate()
        cBoard.clear()
        cBoard.blockLimitTxtUpdate()
      })
    })

  }

  buttonsClear() {
    this.levelsButton.forEach(button => {
      button.classList.remove("activeLevel")
    })
  }

  completedLevelUpdate() {
    if (localStorage.getItem('CompletedLevelsLocal') === null) {
      levelsCompleted = []
    } else {
      levelsCompleted = JSON.parse(localStorage.getItem('CompletedLevelsLocal'))
    }
    for (var i = 0; i < this.levelsButton.length; i++) {
      levelsCompleted.forEach((level) => {
        if (level == parseInt(this.levelsButton[i].innerHTML) - 1) {
          this.levelsButton[i].setAttribute("id", "completedLevel")
        }
      })
      // for (level of levelsCompleted) {
      //   if (level == parseInt(this.levelsButton[i].innerHTML) - 1) {
      //     this.levelsButton[i].setAttribute("id", "completedLevel")
      //   }
      // }
    }

  }
}

let hud = new HUD_Elements()
