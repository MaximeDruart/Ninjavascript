let tileHeight = 50,
  tileWidth = 100,
  ninja = 0,
  spawns = []

class GameLevel {
  constructor(level) {
    this.canvas = document.querySelector("canvas")
    this.context = canvas.getContext("2d")
    this.width = this.canvas.width = window.innerWidth  // a modifier pour la taille
    this.height = this.canvas.height = window.innerHeight  // pareil
    this.tileWidth = tileWidth // 50
    this.tileHeight = tileHeight // 100
    this.level = level
    this.colors = []
    this.map = maps[level]
    this.spawn = []
    // this.timedMapDraw = function(){
    //   // https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
    //   let self = this
    //   self.context.translate(self.width / 2, 200) // on recentre un peu le canvas
    //   for (let i = 0; i < self.map.length; i++) {
    //     for (let j = 0; j < self.map[i].length; j++) {
    //       if (self.map[i][j][0]!=0) {
    //         self.drawBlock(i, j, self.map[i][j][1], self.map[i][j][2])
    //       }
    //     }
    //   }
    // } // dans le flou pour l'instant, on veut faire apparaitre les cases les unes après les autres mais il y a des spicy problèmes avec this dans le setTimeout
  }
  levelInit(){
    this.context.clearRect(-this.canvas.width / 2,-200, this.canvas.width, this.canvas.height)
    this.drawMap()
  }

  drawMapItem(x, y, item){
    let image = document.createElement("img")
    image.src = "images/assets/"+item+".svg"
    image.transform = "scaleX(-1)"
    console.log(image)
    let self = this
    image.onload = function(){
      self.context.save()
      self.context.translate((x-y) * tileWidth / 2, (x+y)*self.tileHeight / 2)
      self.context.drawImage(image, -image.width /2, -image.height) // A ECRIRE
      self.context.restore()
    }
  }

  drawBlock(x, y, zStart, zEnd, color) {
    let top, right, left

    if (color == "red") {
      top = "#ff7b7b"
      right = "#ff0000"
      left = "#a70000"
    } else {
      top = "#eee"
      right = "#ddd"
      left = "#999"
    }

    this.context.save()
    this.context.translate((x - y) * this.tileWidth / 2, (x + y) * this.tileHeight / 2) // on se déplace a l'endroit de la case d'après

    // on dessine la face du haut
    this.context.beginPath()
    this.context.moveTo(0.5, -zStart * this.tileHeight+0.5) // coin du haut (0, 0 | auquel on soustrait en y la hauteur du bloc de la case multiplié par la valeur en z)
    this.context.lineTo(this.tileWidth / 2, this.tileHeight / 2 - zStart * this.tileHeight) // coin de droite
    this.context.lineTo(0, this.tileHeight - zStart * this.tileHeight)
    this.context.lineTo(-this.tileWidth / 2, this.tileHeight / 2 - zStart * this.tileHeight)
    this.context.closePath()
    this.context.fillStyle = top
    this.context.strokeStyle = "#aaa"
    this.context.stroke()
    this.context.fill()

    // on dessine la face de gauche
    this.context.beginPath()
    this.context.moveTo(-this.tileWidth / 2, this.tileHeight / 2 - zStart * this.tileHeight)
    this.context.lineTo(0, this.tileHeight - zStart * this.tileHeight)
    this.context.lineTo(0, (-zEnd * this.tileHeight)+this.tileHeight)
    this.context.lineTo(-this.tileWidth / 2, this.tileHeight / 2 - zEnd * this.tileHeight)
    this.context.closePath()
    this.context.fillStyle = left
    this.context.fill()
    this.context.strokeStyle = "#aaa"
    this.context.stroke()


    // on dessine la face de droite
    this.context.beginPath()
    this.context.moveTo(this.tileWidth / 2, this.tileHeight / 2 - zStart * this.tileHeight)
    this.context.lineTo(0, this.tileHeight - zStart * this.tileHeight)
    this.context.lineTo(0, (-zEnd * this.tileHeight)+this.tileHeight)
    this.context.lineTo(this.tileWidth / 2, this.tileHeight / 2 - zEnd * this.tileHeight)
    this.context.closePath()
    this.context.fillStyle = right
    this.context.fill()
    this.context.strokeStyle = "#aaa"
    this.context.lineWidth = 0.5
    this.context.stroke()


    this.context.restore()
  }
  spawnGen(){
    maps.forEach((map) => {
      map.forEach((row) => {

      })
    })

  }


  drawMap(map, reset) {
    this.context.clearRect(-this.width / 2, -200, this.width, this.height)
    this.context.setTransform(1,0,0,1,0,0)
    this.context.translate(this.width / 2, 200) // on recentre un peu le canvas
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (this.map[i][j][0]==10) {
          this.spawn = [i, j]
        }
        if (this.map[i][j][0]!=0 && this.map[i][j][0]!=8) {
          this.drawBlock(i, j, this.map[i][j][1], this.map[i][j][2], "grey") // case basique
        } else if (this.map[i][j][0]==8) {
           this.drawBlock(i, j, this.map[i][j][1], this.map[i][j][2], "red") // les cases rouges qui bloquent
         }
        if (this.map[i][j][0]!=0 && this.map[i][j][0]!=1 && this.map[i][j][0]!=8 && this.map[i][j][0]!=10) { // pas vide pas case normale pas case rouge pas spawn(10)
          let itemToDraw = this.map[i][j][0]
          if (itemToDraw == 6) { // les téléporteurs entrée / sortie ont des codes différents mais la meme image
            itemToDraw = 5
          }
          this.drawMapItem(i+0.25, j+0.25, itemToDraw)
       }
      }
    }

  if (reset) {
    if (ninja == 0) { // on créé un ninja pour le premier niveau
      ninja = new Character(this.spawn[0],this.spawn[1], this.level)
      ninja.startImage.onload = function(){ // obligé de le faire en dehors de l'objet ou sinon c'est des conflits entre les this.
        ninja.eventStart() // dessin initial
        ninja.moveEL() // on lance l'event listener de déplacement
        ninja.imagesNinja()
      }
    } else { // pour les autres niveaux, on update son x, y, level, map et le redraw
      ninja.x = this.spawn[0]
      ninja.y = this.spawn[1]
      ninja.level ++
      ninja.charModMap = maps[this.level]
      ninja.drawCharacter(ninja.startImage, this.spawn[0],this.spawn[1])
      console.log("defined")
      ninja.startImage.onload = function(){
        ninja.eventStart() // dessin initial
        ninja.moveEL() // on lance l'event listener de déplacement
        ninja.imagesNinja()
      }
    }

  }



  }

}


class Character {
  constructor(x, y, level) {
    this.level = level
    this.charModMap = maps[level] // on garde une copie dans le perso de la map actuelle, on veut pas modifier la map sur maps.js a chaque fois
    this.x = x
    this.y = y
    this.canvas = document.querySelector("#charCanvas")
    this.ctx = this.canvas.getContext("2d")
    this.cWidth = this.canvas.width = window.innerWidth  // a modifier pour la taille
    this.cHeight = this.canvas.height = window.innerHeight  // pareil
    this.ctx.translate(this.cWidth / 2, 200)
    this.images = ["images/assets/ninjaHaut.svg","images/assets/ninjaBas.svg","images/assets/ninjaGauche.svg","images/assets/ninjaDroite.svg"]
    this.finalImages = []
    this.startImage = document.createElement("img")
    this.startImage.src = "images/assets/ninjaDroite.svg"
    this.activeImage = this.startImage
    this.imageWidth = 25
    this.imageHeight = 25
    this.imagesNinja = function(){
      for (var i = 0; i < 4; i++) {
        let img = document.createElement("img")
        img.src = this.images[i]
        this.finalImages.push(img)
      }
    }
    this.moveEL = function(){
      let self = this
      console.log(self)
      document.addEventListener("keydown", function(event){
        switch (event.keyCode) {
          case 37: // left
            if (self.canMove(self.x-1, self.y, self.level)) {
              self.x--
              self.activeImage = self.finalImages[2]
              self.drawCharacter(self.finalImages[2], self.x, self.y)
              self.winTest(self.x, self.y, self.level)
            }
            break;
          case 38: // UP
            if (self.canMove(self.x, self.y-1, self.level)) {
              self.y--
              self.activeImage = self.finalImages[0]
              self.drawCharacter(self.finalImages[0], self.x, self.y)
              self.winTest(self.x, self.y, self.level)
            }
            break;
          case 39: // RIGHT
            console.log(self.level)
            if (self.canMove(self.x+1, self.y, self.level)) {
              self.x++
              self.activeImage = self.finalImages[3]
              self.drawCharacter(self.finalImages[3], self.x, self.y)
              self.winTest(self.x, self.y, self.level)
            }
            break;
          case 40: // DOWN
            if (self.canMove(self.x, self.y+1, self.level)) {
              self.y++
              self.activeImage = self.finalImages[1]
              self.drawCharacter(self.finalImages[1], self.x, self.y)
              self.winTest(self.x, self.y, self.level)
            }
            break;
        }
      })
    }
  }
  winTest(x, y, level){
    if (maps[level][x][y][0] == 100) { // on est donc sur l'arrivée
      levelsCompleted++
      // levels[level].goNext() // on appelle la fonction go next de la  map actuel
    }
  }

  drawCharacter(image, x, y){
    this.ctx.clearRect(-this.cWidth / 2,-200, this.cWidth, this.cHeight)
    this.ctx.save()
    this.ctx.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2 + 13); // on se déplace a l'endroit de la case d'après
    this.ctx.drawImage(image, -this.startImage.width / 2, -this.startImage.height)
    this.ctx.restore()
  }

  eventStart(){
    this.drawCharacter(this.startImage, this.x, this.y)
  }

  canMove(x, y, level){ // on doit appeler sinon il y a un problème de scope je sais pas pourquoi
    if (typeof maps[level][x][y] && maps[level][x][y][0] === "undefined") { // il y a pas de map
      console.log("pas de case")
      return false
    } else if (maps[level][x][y][0] == 0) { // c'est un trou
      console.log("trou")
      return false
      // respectivement bambou (attaquer), sol rouge, mob (tirer) et caillou (sauter)
    } else if (maps[level][x][y][0] == 2 || maps[level][x][y][0] == 8 || maps[level][x][y][0] == 3 || maps[level][x][y][0] == 5) {
      return false
    } else {
      return true
    }
  }

  action(x, y, actionType, map){
    let casesATest = [map[x+1][y][0], map[x][y+1][0], map[x][y-1][0], map[x-1][y-1][0]]
    casesATest.forEach(case => {
      switch (case) { // switch sur le type de cases dans un rayon de x-1 autour du personnage
        case "undefined":
          console.log("OUI ON SAIT QUE C'EST UNDEFINED MERCI")
          break;
        case 2: // bambou
          if (actionType == "attaquer"){
            case = 1 // on change la case en case simple
          }
          break;
        case 3: // mob
          if (actionType == "attaquer"){
            case = 1 // on change la case en case simple
          }
          break;
        case 5: // caillou
          if (actionType == "sauter"){
            this.x -=2
          }
          break;
        case 0:
          if (actionType == "sauter" && (map[x-2][y][0] == 1 || map[x-2][y][0] == 5 || map[x-2][y][0] == 6)){
            this.x -=2
          }
          break;
      }
    })

    switch (map[x-1][y][0]) { // switch sur le type de cases dans un rayon de x-1 autour du personnage
      case "undefined":
        console.log("OUI ON SAIT QUE C'EST UNDEFINED MERCI")
        break;
      case 2: // bambou
        if (actionType == "attaquer"){
          map[x-1][y][0] = 1 // on change la case en case simple
        }
        break;
      case 3: // mob
        if (actionType == "attaquer"){
          map[x-1][y][0] = 1 // on change la case en case simple
        }
        break;
      case 5: // caillou
        if (actionType == "sauter"){
          this.x -=2
        }
        break;
      case 0:
        if (actionType == "sauter" && (map[x-2][y][0] == 1 || map[x-2][y][0] == 5 || map[x-2][y][0] == 6)){
          this.x -=2
        }
        break;
    }
    switch (map[x][y-1][0]) { // switch sur le type de cases dans un rayon de y-1 autour du personnage
      case 2: // bambou
        if (actionType == "attaquer"){
          map[x][y-1][0] = 1 // on change la case en case simple
        }
        break;
      case 3: // mob
        if (actionType == "attaquer"){
          map[x][y-1][0] = 1 // on change la case en case simple
        }
        break;
      case 5: // caillou
        if (actionType == "sauter"){
          this.x -=2
        }
        break;
    }
    if (map[x-2][y][0] == 3 && actionType == "attaquer") { // on peut attaquer dans un rayon de 2 cases.
      map[x-2][y][0] = 1
    } else if (map[x][y-2][0] == 3 && actionType == "attaquer") {
      map[x][y-2][0] = 1
    }
    this.drawCharacter(this.activeImage, this.x, this.y)
    levels[this.level].drawMap(this.charModMap, false)
  }
}


let levels = [], activeMap, j = 0, levelsCompleted = 0
for (var i = 0; i < 10; i++) { // 1O niveaux
  levels.push(new GameLevel(i))
}
levels[0].drawMap(levels[0].map, true)
activeMap = 0

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 32) {
    activeMap++
    levels[activeMap].drawMap(levels[activeMap].map, true)
  }
})

// while (levelsCompleted<10) {
//   let activeMap = levels[j]
//   if (j == 0) {
//     activeMap.drawMap(activeMap.map)
//   }
//   if (winCond) {
//     j++
//     levelsCompleted++
//     activeMap = levels[j]
//     activeMap.drawMap(activeMap.map)
//   }
// }
// if (levelsCompleted == 10) {
//   console.log("message de victoire")
// }
