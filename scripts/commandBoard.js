class CommandBoard {
  constructor() {
    this.blocks = []
    this.board = document.querySelector(".screen")
  }
  clear(){

  }
  createFor(){
    let section = document.createElement("section")
    let span1 = document.createElement("span")
    span1.innerHTML = "for (var i="
    let input1 = document.createElement("input")
    input1.setAttribute("type", "number")
    let span2 = document.createElement("span")
    span2.innerHTML = "; i <"
    let input2 = document.createElement("input")
    input2.setAttribute("type", "number")
    let span3 = document.createElement("span")
    span3.innerHTML = "; i++) {"
    let div = document.createElement("div")
    let span4 = document.createElement("span")
    span4.innerHTML = "}"
    section.appendChild(span1, input1, span2, input2, span3, div, span4)
    this.board.appendChild(section)
    this.blocks.push(section)
  }
  createWhile(){
    // créer le bloc
    this.blocks.push(bloc)
  }
  createIf(){
    // créer le bloc
    this.blocks.push(bloc)
  }
}

let commandBoard = new CommandBoard()
commandBoard.createFor()
