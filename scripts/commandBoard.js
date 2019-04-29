class CommandBoard {
  constructor() {
    this.blocks = []
    this.board = document.querySelector(".screen")
    this.scrollContent = document.querySelector(".simplebar-content")
    this.actionItems = document.querySelector(".actionItems")
    this.inputFields = []
    this.blockLimits = [2,10, 10, 10, 10, 10, 10, 10, 10, 11]
    this.blockLimitTxt = document.querySelector(".blockLimit")
    this.lvlInd = document.querySelector(".levelIndicator")
    this.userLose = false
    this.userWin = false

    this.playButton = document.querySelector(".playButton")
    this.playButton.addEventListener('click', (e) => {
      this.read()
    })

    this.addForButton = document.querySelector(".addFor")
    this.addForButton.addEventListener('click', (e) => {
      if (this.blocks.length < this.blockLimits[activeMap]) {
        this.createFor()
        this.blockLimitTxtUpdate()
      } else {
        this.displayError("CANNOT EXCESS BLOCK LIMIT", "red")
      }
    })

    this.addActionButton = document.querySelector(".addAction")
    this.addActionButton.addEventListener('click', (e) => {
      if (this.blocks.length < this.blockLimits[activeMap]) {
        this.createAction()
        this.blockLimitTxtUpdate()
      } else {
        this.displayError("CANNOT EXCESS BLOCK LIMIT", "red")
      }
    })

    this.resetButton = document.querySelector(".resetButton")
    this.resetButton.addEventListener("click", (e) => {
      levels[activeMap].mapReset()
      levels[activeMap].drawMap(levels[activeMap].map, true)
      this.clearFields()
      this.clear()
      this.blockLimitTxtUpdate()
    })


  }

  levelIndicatorUpdate() {
    this.lvlInd.innerHTML = "Level " + (activeMap + 1)
  }

  clear() {
    this.blocks.forEach(e => {
      this.actionItems.removeChild(e)
    })
    this.blocks = []
    this.inputFields = []
    this.displayError("BOARD CLEARED", "green")
  }

  clearFields() {
    this.inputFields.forEach(e => {
      e.value = ""
    })
    this.displayError("FIELDS CLEARED", "green")
  }
  createFor() {
    let section = document.createElement("section")
    section.classList.add("boucleFor")
    let span10 = document.createElement("span")
    span10.innerHTML = "for "
    span10.classList.add("for")
    let span1 = document.createElement("span")
    span1.innerHTML = "(var i = "
    let input1 = document.createElement("input")
    input1.setAttribute("type", "number")
    let span2 = document.createElement("span")
    span2.innerHTML = " ; i < "
    let input2 = document.createElement("input")
    input2.setAttribute("type", "number")
    let span3 = document.createElement("span")
    span3.innerHTML = " ; i++) {"
    let divInstructions = document.createElement("div")
    let spanInstructions = document.createElement("span")
    spanInstructions.innerHTML = "ninja."
    spanInstructions.classList.add("ninja")
    let inputInstructions = document.createElement("input")
    inputInstructions.setAttribute("type", "text")
    inputInstructions.setAttribute("placeholder", "Action")
    inputInstructions.classList.add("MIDDLE")
    let pInstructionClose = document.createElement("span")
    pInstructionClose.innerHTML = "()"
    let span4 = document.createElement("span")
    span4.innerHTML = "}"
    let bye = document.createElement("img")
    bye.classList.add("bye")
    bye.setAttribute("src", "images/game/close.svg")
    section.appendChild(span10)
    section.appendChild(span1)
    section.appendChild(input1)
    section.appendChild(span2)
    section.appendChild(input2)
    section.appendChild(span3)
    divInstructions.appendChild(spanInstructions)
    divInstructions.appendChild(inputInstructions)
    divInstructions.appendChild(pInstructionClose)
    section.appendChild(divInstructions)
    section.appendChild(span4)
    section.appendChild(bye)
    this.actionItems.appendChild(section)
    this.blocks.push(section)
    this.inputFields.push(input1, input2, inputInstructions)

    bye.addEventListener('click', (event) => {
      this.actionItems.removeChild(bye.parentElement)
      this.blockLimitTxtUpdate()
    })
  }

  createAction() {
    let section = document.createElement("section")
    section.classList.add("action")
    let divInstructions = document.createElement("div")
    let spanInstructions = document.createElement("span")
    spanInstructions.innerHTML = "ninja."
    spanInstructions.classList.add("ninja")
    let inputInstructions = document.createElement("input")
    inputInstructions.setAttribute("type", "text")
    inputInstructions.setAttribute("placeholder", "Action")
    inputInstructions.classList.add("UP")
    let pInstructionClose = document.createElement("span")
    pInstructionClose.innerHTML = "()"
    let bye = document.createElement("img")
    bye.classList.add("bye")
    bye.setAttribute("src", "images/game/close.svg")
    divInstructions.appendChild(spanInstructions)
    divInstructions.appendChild(inputInstructions)
    divInstructions.appendChild(pInstructionClose)
    section.appendChild(divInstructions)
    section.appendChild(bye)
    this.actionItems.appendChild(section)
    this.blocks.push(section)
    this.inputFields.push(inputInstructions)


    bye.addEventListener('click', (event) => {
      this.actionItems.removeChild(bye.parentElement)
      this.blockLimitTxtUpdate()
    })
  }

  createIf() {
    let section = document.createElement("section")
    section.classList.add("if")
    let span10 = document.createElement("span")
    span10.innerHTML = "if "
    span10.classList.add("ifText")
    let span1 = document.createElement("span")
    span1.innerHTML = "( "
    let input1 = document.createElement("input")
    input1.setAttribute("type", "text")
    input1.classList.add("UP")
    let span3 = document.createElement("span")
    span3.innerHTML = " ) {"
    let divInstructions = document.createElement("div")
    let spanInstructions = document.createElement("span")
    spanInstructions.innerHTML = "ninja."
    let inputInstructions = document.createElement("input")
    inputInstructions.setAttribute("type", "text")
    inputInstructions.classList.add("UP")
    let pInstructionClose = document.createElement("span")
    pInstructionClose.innerHTML = "()"
    let span4 = document.createElement("span")
    span4.innerHTML = "}"
    section.appendChild(span10)
    section.appendChild(span1)
    section.appendChild(input1)
    section.appendChild(span3)
    divInstructions.appendChild(spanInstructions)
    divInstructions.appendChild(inputInstructions)
    divInstructions.appendChild(pInstructionClose)
    section.appendChild(divInstructions)
    section.appendChild(span4)
    this.actionItems.appendChild(section)
    this.blocks.push(section)
    this.inputFields.push(input1, inputInstructions)
  }

  blockCount() {
    this.blocks = []
    for (var i = 0; i < this.actionItems.children.length; i++) {
      this.blocks.push(this.actionItems.children[i])
    }
    // for (var i = 0; i < this.board.children.length; i++) {
    //   if (this.board.children[i].classList.contains("boucleFor") || this.board.children[i].classList.contains("action")) {
    //     this.blocks.push(this.board.children[i])
    //   }
    // }
  }

  read() {
    this.blockCount()
    let startLevel = activeMap
    let c = 0,
      delay = 0
    // pour chaque bloc, on identifie son type et éxécute l'action correspondante apres un delai pour ajouter de la fluidité
    this.blocks.forEach(bloc => {
      c++ // hehe
      setTimeout(e => {
        this.blocks.forEach(bloc => {
          bloc.classList.remove("activeInstruction")
        })
        if (bloc.classList.contains("boucleFor")) {
          bloc.classList.add("activeInstruction") // on ajoute la classe activeInstruction qui rajoute une bordure verte a l'instruction en cours
          this.readFor(bloc)
        } else if (bloc.classList.contains("action")) {
          bloc.classList.add("activeInstruction")
          this.readAction(bloc)
        }
      }, 300 * (c + 1))
      delay += 300 * (c + 1)
    })
    // a la fin des instructions, on display un message en fn du run
    setTimeout(() => {
      if (!activeMap > startLevel) {
        this.displayError("UNSUCCESSFUL RUN, RESET", "white")
      } else {
        this.displayError("GOOD JOB !", "green")
      }
    }, delay)
    // levels[activeMap].mapReset()
    // levels[activeMap].drawMap(levels[activeMap].map, true)
    this.blockLimitTxtUpdate()
  }

  readFor(bloc) {
    this.userLose = false
    let inputs = []
    let blocChilds = bloc.children
    for (var i = 0; i < blocChilds.length; i++) {
      if (bloc.children[i].nodeName == "INPUT") {
        inputs.push(bloc.children[i])
      } else if (bloc.children[i].childElementCount > 2) {
        inputs.push(bloc.children[i].children[1])
      }
    }
    let forStart = parseInt(inputs[0].value)
    let forEnd = parseInt(inputs[1].value)
    let iterations = forEnd - forStart
    let instruction = inputs[2].value
    for (var i = 0; i < iterations; i++) {
      setTimeout(e => {
        if (instruction == "gauche" || instruction == "droite" || instruction == "haut" || instruction == "bas") {
          if (ninja.moveAlgo(instruction)) {} else {
            this.userLose = true
          }
        } else if (instruction == "couper" || instruction == "tirer") {
          instruction == "attaquer"
          ninja.action(ninja.x, ninja.y, instruction)
        } else if (instruction == "sauter") {
          ninja.action(ninja.x, ninja.y, instruction)
        } else {
          this.displayError("INVALID INSTRUCTION", "red")
          this.userLose = true
        }
      }, i * 50)
    }
    if (this.userLose == true) {
      return false
    }
  }

  readAction(bloc) {
    let input
    let blocChilds = bloc.children
    for (var i = 0; i < blocChilds.length; i++) {
      if (bloc.children[i].nodeName == "INPUT") {
        input = bloc.children[i]
      } else if (bloc.children[i].childElementCount > 2) {
        input = bloc.children[i].children[1]
      }
    }
    let instruction = input.value
    if (instruction == "gauche" || instruction == "droite" || instruction == "haut" || instruction == "bas") {
      if (ninja.moveAlgo(instruction) == true) {} else {
        this.userLose = true
      }
    } else if (instruction == "couper" || instruction == "tirer") {
      instruction = "attaquer"
      ninja.action(ninja.x, ninja.y, instruction)
    } else if (instruction == "sauter") {
      ninja.action(ninja.x, ninja.y, instruction)
    } else {
      this.displayError("INVALID INSTRUCTION", "red")
    }
  }

  displayError(errorMsg, color) {
    let errorDisplayZone = document.querySelector("#screen_error")
    let errorDisplayZoneText = document.querySelector("#screen_error h1")
    errorDisplayZone.classList.remove("hideOpacity")
    errorDisplayZoneText.style.color = color
    errorDisplayZoneText.innerHTML = errorMsg
    setTimeout((e) => {
      errorDisplayZone.classList.add("hideOpacity")
    }, 2500) // ms
  }

  blockLimitTxtUpdate(){
    this.blockCount()
    this.blockLimitTxt.innerHTML = this.blocks.length + " / " + this.blockLimits[activeMap]
  }
}


// on delay sinon scrollContent n'existe pas encore quand c'est créé et ca part en couille
let cBoard
setTimeout((e) => {

  cBoard = new CommandBoard()
  cBoard.blockLimitTxtUpdate()
}, 500)
