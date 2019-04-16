let tileHeight = 50,
  tileWidth = 100

class GameLevel {
  constructor(level) {   // charCanvas ? ou autre classe
    this.canvas = document.querySelector("canvas")
    this.context = canvas.getContext("2d")
    this.width = this.canvas.width = window.innerWidth  // a modifier pour la taille
    this.height = this.canvas.height = window.innerHeight  // pareil
    this.tileWidth = tileWidth // 50
    this.tileHeight = tileHeight // 100
    // this.map = maps[level]
    this.map = [
      [[1,0.5,0],[1,0.5,0],[1,0.5,0],[1,0.5,0]],
      [[1,0.5,0],[1,0.5,0],[1,0.5,0],[1,0.5,0]],
      [[1,0.5,0],[1,0.5,0],[1,0.5,0],[1,0.5,0]],
      [[1,0.5,0],[1,0.5,0],[1,0.5,0],[1,0.5,0]]
    ]
    this.level = level
    this.timedMapDraw = function(){
      // https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
      let self = this
      self.context.translate(self.width / 2, 200) // on recentre un peu le canvas
      for (let i = 0; i < self.map.length; i++) {
        for (let j = 0; j < self.map[i].length; j++) {
          if (self.map[i][j][0]!=0) {
            self.drawBlock(i, j, self.map[i][j][1], self.map[i][j][2])
          }
        }
      }
    }
  }

  tempMapGen(){ // temporaire
    for (var i = 0; i < 7; i++) {
      let array = []
      for (var j = 0; j < 10; j++) {
        let subArray = [1, 0.5,0]
        array.push(subArray)
      }
      this.map.push(array)
    }
  }

  itemMapGen(){
    for (var i = 0; i < groundMap.length; i++) {
      for (var j = 0; j < groundMap[i].length; j++) {
        groundMap[i][j]
      }
    }
  }
  drawBlock(x, y, zStart, zEnd, topColor) {
    let top = topColor,
      right = "#cccccc",
      left = "#999999";

    this.context.save();
    this.context.translate((x - y) * this.tileWidth / 2, (x + y) * this.tileHeight / 2); // on se déplace a l'endroit de la case d'après

    // draw top
    this.context.beginPath();
    this.context.moveTo(0.5, -zStart * this.tileHeight+0.5); // coin du haut (0, 0 | auquel on soustrait en y la hauteur du bloc de la case multiplié par la valeur en z)
    this.context.lineTo(this.tileWidth / 2, this.tileHeight / 2 - zStart * this.tileHeight); // coin de droite
    this.context.lineTo(0, this.tileHeight - zStart * this.tileHeight);
    this.context.lineTo(-this.tileWidth / 2, this.tileHeight / 2 - zStart * this.tileHeight);
    this.context.closePath();
    this.context.fillStyle = top;
    this.context.strokeStyle = "#aaa";
    this.context.stroke();
    this.context.fill();

    // draw left
    this.context.beginPath();
    this.context.moveTo(-this.tileWidth / 2, this.tileHeight / 2 - zStart * this.tileHeight);
    this.context.lineTo(0, this.tileHeight - zStart * this.tileHeight);
    this.context.lineTo(0, (-zEnd * this.tileHeight)+this.tileHeight);
    this.context.lineTo(-this.tileWidth / 2, this.tileHeight / 2 - zEnd * this.tileHeight);
    this.context.closePath();
    this.context.fillStyle = left;
    this.context.fill();
    this.context.strokeStyle = "#aaa";
    this.context.stroke();


    // // draw right
    this.context.beginPath();
    this.context.moveTo(this.tileWidth / 2, this.tileHeight / 2 - zStart * this.tileHeight);
    this.context.lineTo(0, this.tileHeight - zStart * this.tileHeight);
    this.context.lineTo(0, (-zEnd * this.tileHeight)+this.tileHeight);
    this.context.lineTo(this.tileWidth / 2, this.tileHeight / 2 - zEnd * this.tileHeight);
    this.context.closePath();
    this.context.fillStyle = right;
    this.context.fill();
    this.context.strokeStyle = "#aaa";
    this.context.lineWidth = 0.5
    this.context.stroke();


    this.context.restore();
  }

  mapDraw() {
    this.context.translate(this.width / 2, 200) // on recentre un peu le canvas
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (this.map[i][j][0]==1) {
          this.drawBlock(i, j, this.map[i][j][1], this.map[i][j][2], "#eee")
        } else if (this.map[i][j][0]==2) {
          this.drawBlock(i, j, this.map[i][j][1], this.map[i][j][2], "red")
        }
      }
    }
  }
}


class Character {
  constructor(x, y, level) {
    this.level = level-1 // le niveau 1 devient le niveau 0 pour l'index
    this.x = x
    this.y = y
    this.canvas = document.querySelector("#charCanvas")
    this.ctx = this.canvas.getContext("2d")
    this.cWidth = this.canvas.width = window.innerWidth  // a modifier pour la taille
    this.cHeight = this.canvas.height = window.innerHeight  // pareil
    this.ctx.translate(this.cWidth / 2, 200)
    this.images = ["../images/assets/ninjaHaut.svg","../assets/images/ninjaBas.svg","../assets/images/ninjaGauche.svg","../images/assets/ninjaDroite.svg"]
    this.mainImage = document.createElement("img")
    this.mainImage.src = "images/assets/ninjaBas.svg"
    // this.activeImage =
    this.imageWidth = 25
    this.imageHeight = 25
    this.moveEL = function(){
      let self = this
      console.log(self)
      document.addEventListener("keydown", function(event){
        self.canMove(self.x, self.y)
        switch (event.keyCode) {
          case 37: // left
            if (self.canMove(self.x-1, self.y)) {
              self.x--
              self.drawCharacter(self.mainImage, self.x, self.y)
            }
            break;
          case 38: // UP
            if (self.canMove(self.x, self.y-1)) {
              self.y--
              self.drawCharacter(self.mainImage, self.x, self.y)
            }
            break;
          case 39: // RIGHT
            if (self.canMove(self.x+1, self.y)) {
              self.x++
              self.drawCharacter(self.mainImage, self.x, self.y)
            }
            break;
          case 40: // DOWN
            if (self.canMove(self.x, self.y+1)) {
              self.y++
              self.drawCharacter(self.mainImage, self.x, self.y)
            }
            break;
        }
      })
    }
  }

  drawCharacter(image, x, y){
    this.ctx.clearRect(-this.cWidth / 2,-200, this.cWidth, this.cHeight)
    this.ctx.save()
    this.ctx.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2 + 25); // on se déplace a l'endroit de la case d'après
    this.ctx.drawImage(image, -this.mainImage.width / 2, -this.mainImage.height)
    this.ctx.restore()
  }

  eventStart(){
    this.drawCharacter(this.mainImage, this.x, this.y)
  }

  canMove(x, y){
    console.log(x, y)
    return true
  }

  jump(){

  }
  gunAttack(){

  }
  treeCut(){

  }
}

let ninja = new Character(0,0)
ninja.mainImage.onload = function(){
  ninja.eventStart() // dessin initial
  ninja.moveEL() // on lance l'event listener de déplacement
}



let levels = [], activeMap, j = 0, levelsCompleted = 0
for (var i = 0; i < 10; i++) { // 1O niveaux
  levels.push(new GameLevel(i))
}
levels[0].mapDraw()


// while (levelsCompleted<10) {
//   let activeMap = levels[j]
//   if (winCond) {
//     j++
//     levelsCompleted++
//     reset()
//   }
// }
// if (levelsCompleted == 10) {
//   console.log("message de victoire")
// }
