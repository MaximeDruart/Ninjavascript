class CommandBoard {
  constructor() {
    this.blocks = []
    this.board = document.querySelector(".screen")
  }
  clear(){
    this.blocks.forEach(e => {
      this.board.removeChild(e)
    })
    this.blocks = []
  }
  createFor(){
    let section = document.createElement("section")
    let span1 = document.createElement("span")
    span1.innerHTML = "for (var i = "
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
  }
  createWhile(){
    let section = document.createElement("section")
    let span1 = document.createElement("span")
    span1.innerHTML = "while ( "
    let input1 = document.createElement("input")
    input1.setAttribute("type", "text")
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
  }
  createIf(){
    let section = document.createElement("section")
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
  }
}

let commandBoard = new CommandBoard()
commandBoard.createFor()
commandBoard.createWhile()
commandBoard.createIf()
