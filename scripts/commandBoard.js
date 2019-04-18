class CommandBoard {
  constructor() {
    this.blocks = []
    this.board = document.querySelector(".screen")
    this.inputFields = []
  }
  clear(){
    this.blocks.forEach(e => {
      this.board.removeChild(e)
    })
    this.blocks = []
    this.inputFields = []
  }

  clearFields(){
    this.inputFields.forEach(e => {
      e.value=""
    })
  }
  createFor(){
    let section = document.createElement("section")
    section.classList.add("bouclFor")
    let span1 = document.createElement("span")
    span1.innerHTML = "for (var i = "
    section.classList.add("for")
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
    let inputInstructions = document.createElement("input")
    inputInstructions.setAttribute("type", "text")
    let pInstructionClose = document.createElement("span")
    pInstructionClose.innerHTML = "()"
    let span4 = document.createElement("p")
    span4.innerHTML = "}"
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
    this.board.appendChild(section)
    this.blocks.push(section)
    this.inputFields.push(input1, input2, inputInstructions)
  }
  createWhile(){
    let section = document.createElement("section")
    section.classList.add("boucleWhile")
    let span1 = document.createElement("span")
    span1.innerHTML = "while ( "
    let input1 = document.createElement("input")
    input1.setAttribute("type", "text")
    section.classList.add("UP")
    let span3 = document.createElement("span")
    span3.innerHTML = " ) {"
    let divInstructions = document.createElement("div")
    let spanInstructions = document.createElement("span")
    spanInstructions.innerHTML = "ninja."
    let inputInstructions = document.createElement("input")
    inputInstructions.setAttribute("type", "text")
    let pInstructionClose = document.createElement("span")
    pInstructionClose.innerHTML = "()"
    let span4 = document.createElement("p")
    span4.innerHTML = "}"
    section.appendChild(span1)
    section.appendChild(input1)
    section.appendChild(span3)
    divInstructions.appendChild(spanInstructions)
    divInstructions.appendChild(inputInstructions)
    divInstructions.appendChild(pInstructionClose)
    section.appendChild(divInstructions)
    section.appendChild(span4)
    this.board.appendChild(section)
    this.blocks.push(section)
    this.inputFields.push(input1, inputInstructions)
  }
  createIf(){
    let section = document.createElement("section")
    section.classList.add("if")
    let span1 = document.createElement("span")
    span1.innerHTML = "if ( "
    let input1 = document.createElement("input")
    input1.setAttribute("type", "number")
    let span3 = document.createElement("span")
    span3.innerHTML = " ) {"
    let divInstructions = document.createElement("div")
    let spanInstructions = document.createElement("span")
    spanInstructions.innerHTML = "ninja."
    let inputInstructions = document.createElement("input")
    inputInstructions.setAttribute("type", "text")
    let pInstructionClose = document.createElement("span")
    pInstructionClose.innerHTML = "()"
    let span4 = document.createElement("p")
    span4.innerHTML = "}"
    section.appendChild(span1)
    section.appendChild(input1)
    section.appendChild(span3)
    divInstructions.appendChild(spanInstructions)
    divInstructions.appendChild(inputInstructions)
    divInstructions.appendChild(pInstructionClose)
    section.appendChild(divInstructions)
    section.appendChild(span4)
    this.board.appendChild(section)
    this.blocks.push(section)
    this.inputFields.push(input1, inputInstructions)
  }



  read(){
    this.blocks.forEach((bloc) => {
      bloc.children.forEach((child) => {
        if (child.nodeName == "INPUT") {

        }
      })
    })
  }

}

let cBoard = new CommandBoard()
cBoard.createFor()
cBoard.createWhile()
cBoard.createIf()
