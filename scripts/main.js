class GameLevel {
  constructor(level) {   // charCanvas ? ou autre classe
    this.canvas = document.querySelector("canvas")
    this.context = canvas.getContext("2d")
    this.width = this.canvas.width = window.innerWidth // a modifier pour la taille
    this.height = this.canvas.height = window.innerHeight // pareil
    this.tileWidth = 100
    this.tileHeight = 50
    // this.groundMap = groundMap // A gérer avec du json
    // this.heightMap = heightMap

    // TEMPORAIRE POUR TESTER, A ACCEDER PLUS TARD DANS LE JSON AVEC MAPS[LEVEL-1]
    // 0 = vide, 1 = case , 2 = arbre, 3 = mob, 4 = tp, 5 = caillou
    // this.groundMap = [
    //   [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //   [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    // ]
    this.map = [
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[100,4,3.5],[1,4,3.5],[1,4,3.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,3.5,3],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[1,4,3.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[1,3.5,3],[1,3,2.5],[1,3,2.5],[1,3,2.5],[0,0.5,0],[1,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[1,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[1,2.5,2],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,3,2.5],[0,0.5,0],[0,0.5,0],[1,1.5,1],[1,1.5,1],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[1,2,1.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,1.5,1],[1,1.5,1],[1,1,0.5],[1,0.5,0]],
        [[0,0.5,0],[1,1.5,1],[1,1,0.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,1.5,1],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[1,1,0.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[1,1,0.5],[0,0.5,0],[1,1,0.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[10,1.5,1],[0,0.5,0],[0,0.5,0],[0,0.5,0]]
    ]
    this.level = level
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
  drawBlock(x, y, zStart, zEnd) {
    let top = "#eeeeee",
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
        if (this.map[i][j][0]!=0) {
          this.drawBlock(i, j, this.map[i][j][1], this.map[i][j][2])
        }
      }
    }
  }
}

let level1 = new GameLevel(1)
// level1.tempMapGen()
level1.mapDraw()

class Character {
  constructor(tileX, tileY) {
    this.tileX = tileX
    this.tileY = tileY
    this.x = level1.tileHeight * tileX
    this.y = level1.tileHeight * tileY
    this.canvas = document.querySelector("#charCanvas")
    this.ctx = canvas.getContext("2d")
    this.ctx.translate(this.width / 2, 50)
    this.cWidth = this.canvas.width = window.innerWidth // a modifier pour la taille
    this.cHeight = this.canvas.height = window.innerHeight // pareil
    this.images = ["../assets/ninjaHaut.svg","../assets/ninjaBas.svg","../assets/ninjaGauche.svg","../assets/ninjaDroite.svg"]
    this.mainImage = document.createElement("img")
    this.mainImage.src = "assets/ninjaBas.svg"
    // this.activeImage =
    this.imageWidth = 25
    this.imageHeight = 25
  }
  charEventListener(){
    document.addEventListener("keydown", move)
  }

  drawCharacter(x, y){
    console.log(this.ctx)
    // this.ctx.clearRect(-this.cWidth / 2,-200, this.cWidth, this.cHeight)
    this.ctx.save()
    this.ctx.translate((x - y) * this.tileWidth / 2, (x + y) * this.tileHeight / 2); // on se déplace a l'endroit de la case d'après
    this.ctx.drawImage(this.mainImage, -this.imageWidth/2, -this.imageHeight)
    this.ctx.restore()
  }
  canMove(x, y){
    if (true) {
      return false
    } else {
      return true
    }
  }
  move(){
    switch (event.keyCode) {
      case 37: // left
        if (canMove(this.x-1, this.y)) {
          this.tileX--, this.x = level1.tileHeight * tileX
          drawCharacter(x, y)
        }
        break;
      case 38: // UP
        if (canMove(this.x, this.y-1)) {
          this.tileY--, this.y = level1.tileHeight * tileY
          drawCharacter()
        }
        break;
      case 39: // RIGHT
        if (canMove(this.x+1, this.y)) {
          this.tileX++, this.x = level1.tileHeight * tileX
          drawCharacter()
        }
        break;
      case 40: // DOWN
        if (canMove(this.x, this.y+1)) {
          this.tileY++, this.y = level1.tileHeight * tileY
          drawCharacter()
        }
        break;
    }
  }
  jump(){

  }
  gunAttack(){

  }
  treeCut(){

  }
}

let ninja = new Character(5,2)
ninja.drawCharacter(0,0)
