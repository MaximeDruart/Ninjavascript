console.log("(っ▀¯▀)つ pssst hey petit ! Je te sens l'âme d'un fouineur à trainer par ici. Alors je vais te donner un conseil rien que pour toi. Appuie sur F12 pour rentrer en mode développeur et déplacer ton personnage librement avec les touches directionnelles. attaque avec M, saute avec L et skip un niveau avec espace (っ▀¯▀)つ")


'use strict';

// var global dont j'ai besoin dans les 2 classes
let tileHeight = 50,
  tileWidth = 100,
  ninja = 0,
  spawns = [],
  tp = [],
  xyRed = [],
  devMode = false,
  yCanvasTranslate = 200


class GameLevel {
  constructor(level) {
    this.canvas = document.querySelector("#mapCanvas")
    this.context = this.canvas.getContext("2d")
    this.width = this.canvas.width = window.innerWidth / 1.7 // a modifier pour la taille
    this.height = this.canvas.height = window.innerHeight // pareil
    this.tileWidth = tileWidth // 50
    this.tileHeight = tileHeight // 100
    this.level = level
    this.map = JSON.parse(JSON.stringify(maps[level])) // tentative de vaudou qui n'a PAS porté ces fruits
    this.spawn = []
  }
  clear() {
    this.context.clearRect(-this.width / 2, -yCanvasTranslate, this.width, this.height)
  }

  mapReset() {
    this.map = maps[this.level]
    if (ninja != 0) {
      ninja.charModMap = maps[this.level]
    }
  }

  drawMapItem(x, y, z, item) {
    let image = document.createElement("img")
    image.src = "images/assets/" + item + ".svg"
    image.transform = "scaleX(-1)"
    let self = this
    image.onload = function() {
      self.context.save()
      self.context.translate((x - y) * tileWidth / 2, ((x + y) * self.tileHeight / 2) - z * self.tileHeight)
      self.context.drawImage(image, -image.width / 2, -image.height) // A ECRIRE
      self.context.restore()
    }
  }

  drawBlock(x, y, zStart, zEnd, color) {
    let top, right, left
    if (color == "red") {
      top = "#ff7b7b", right = "#ff0000", left = "#a70000"
    } else {
      top = "white", right = "#ddd", left = "#999"
    }

    this.context.save()
    this.context.translate((x - y) * this.tileWidth / 2, (x + y) * this.tileHeight / 2) // on se déplace a l'endroit de la case d'après

    // on dessine la face du haut
    this.context.beginPath()
    this.context.moveTo(0.5, -zStart * this.tileHeight + 0.5) // coin du haut (0, 0 | auquel on soustrait en y la hauteur du bloc de la case multiplié par la valeur en z)
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
    this.context.lineTo(0, (-zEnd * this.tileHeight) + this.tileHeight)
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
    this.context.lineTo(0, (-zEnd * this.tileHeight) + this.tileHeight)
    this.context.lineTo(this.tileWidth / 2, this.tileHeight / 2 - zEnd * this.tileHeight)
    this.context.closePath()
    this.context.fillStyle = right
    this.context.fill()
    this.context.strokeStyle = "#aaa"
    this.context.lineWidth = 0.5
    this.context.stroke()


    this.context.restore()
  }

  timedDrawMap(map, reset) {
    let animFrames = 20
    let delayCount = 0
    let mapDrawDelay = 0 // measuring delay to sync next execution of drawChar
    this.mapReset()
    tp = [] // on reset les tp
    for (let i = 0; i < this.map.length; i++) { // for each row
      for (let j = 0; j < this.map[i].length; j++) { // for each tile
        this.context.clearRect(-this.width / 2, -yCanvasTranslate, this.width, this.height)
        this.context.setTransform(1, 0, 0, 1, 0, 0)
        this.context.translate(this.width / 2, yCanvasTranslate) // on recentre un peu le canvas
        for (var f = animFrames; f >= 0; f--) { // for each frame
          setTimeout((e) => {
            delayCount++

            if (this.map[i][j][0] == 10) {
              this.spawn = [i, j, this.map[i][j][1]]
            }
            if (this.map[i][j][0] != 0 && this.map[i][j][0] != 8) {
              // this.drawBlock(i, j, this.map[i][j][1]+(f*0.5), this.map[i][j][2]+(f*0.5), "grey") // case basique
              this.drawBlock(i, j, this.map[i][j][1], this.map[i][j][2], "grey") // case basique
            } else if (this.map[i][j][0] == 8) {
              this.drawBlock(i, j, this.map[i][j][1], this.map[i][j][2], "red") // les cases rouges qui bloquent
            }
            if (this.map[i][j][0] != 0 && this.map[i][j][0] != 1 && this.map[i][j][0] != 8 && this.map[i][j][0] != 10) { // pas vide pas case normale pas case rouge pas spawn(10)
              let itemToDraw = this.map[i][j][0]
              // les téléporteurs entrée / sortie ont des codes différents mais la meme image
              if (itemToDraw == 6) {
                itemToDraw = 5
              }
              this.drawMapItem(i + 0.8, j + 0.8, this.map[i][j][1], itemToDraw) // on envoie x, y, zStart et l'item code
            }
            mapDrawDelay += delayCount * 125
          }, delayCount * 125)
        }
      }
    }
    console.log(mapDrawDelay)
    setTimeout((e) => {
      if (reset) {
        if (ninja == 0) { // on créé un ninja pour le premier niveau
          ninja = new Character(this.spawn[0], this.spawn[1], this.spawn[2], this.level)
          ninja.startImage.onload = function() { // obligé de le faire en dehors de l'objet ou sinon c'est des conflits entre les this.
            ninja.eventStart() // dessin initial
            ninja.moveEL() // on lance l'event listener de déplacement
            ninja.imagesNinja(ninja.activeSrc)
          }
        } else { // pour les autres niveaux, on update son x, y, level, map et le redraw
          ninja.x = this.spawn[0]
          ninja.y = this.spawn[1]
          ninja.z = this.spawn[2]
          ninja.level = this.level
          ninja.charModMap = this.map
          ninja.drawCharacter(ninja.startImage, this.spawn[0], this.spawn[1], this.spawn[2])
          ninja.startImage.onload = function() {
            ninja.eventStart() // dessin initial
            ninja.moveEL() // on lance l'event listener de déplacement
            ninja.imagesNinja(ninja.activeSrc)
          }
        }

      }
    }, mapDrawDelay)
  }

  drawMap(map, reset) { // en paramètre la map et si on souhaite reset la map (avec le ninja) ou tout simplement la redessiner pour update un bambou coupé
    this.mapReset()
    tp = [] // on reset les tp
    this.context.clearRect(-this.width / 2, -yCanvasTranslate, this.width, this.height)
    this.context.setTransform(1, 0, 0, 1, 0, 0)
    this.context.translate(this.width / 2, yCanvasTranslate) // on recentre un peu le canvas
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {

        if (this.map[i][j][0] == 10) {
          this.spawn = [i, j, this.map[i][j][1]]
        }
        if (this.map[i][j][0] != 0 && this.map[i][j][0] != 8) {
          this.drawBlock(i, j, this.map[i][j][1], this.map[i][j][2], "grey") // case basique
        } else if (this.map[i][j][0] == 8) {
          this.drawBlock(i, j, this.map[i][j][1], this.map[i][j][2], "red") // les cases rouges qui bloquent
        }
        if (this.map[i][j][0] != 0 && this.map[i][j][0] != 1 && this.map[i][j][0] != 8 && this.map[i][j][0] != 10) { // pas vide pas case normale pas case rouge pas spawn(10)
          let itemToDraw = this.map[i][j][0]
          if (itemToDraw == 6) { // les téléporteurs entrée / sortie ont des codes différents mais la meme image
            itemToDraw = 5
          }
          this.drawMapItem(i + 0.8, j + 0.8, this.map[i][j][1], itemToDraw) // on envoie x, y, zStart et l'item code
        }

      }
    }

    if (reset) {
      if (ninja == 0) { // on créé un ninja pour le premier niveau
        ninja = new Character(this.spawn[0], this.spawn[1], this.spawn[2], this.level)
        ninja.startImage.onload = function() { // obligé de le faire en dehors de l'objet ou sinon c'est des conflits entre les this.
          ninja.eventStart() // dessin initial
          ninja.moveEL() // on lance l'event listener de déplacement
          ninja.imagesNinja(ninja.activeSrc)
          ninja.drawCharacter(ninja.finalImages[3], this.spawn[0], this.spawn[1], this.spawn[2])
        }
      } else { // pour les autres niveaux, on update son x, y, level, map et le redraw
        ninja.x = this.spawn[0]
        ninja.y = this.spawn[1]
        ninja.z = this.spawn[2]
        ninja.level = this.level
        ninja.charModMap = this.map
        ninja.drawCharacter(ninja.finalImages[3], this.spawn[0], this.spawn[1], this.spawn[2])
        ninja.startImage.onload = function() {
          ninja.eventStart() // dessin initial
          ninja.moveEL() // on lance l'event listener de déplacement
          ninja.imagesNinja(ninja.activeSrc)
        }
      }

    }



  }

}


class Character {
  constructor(x, y, z, level) {
    this.level = level
    this.charModMap = JSON.parse(JSON.stringify(maps[level])) // on garde une copie dans le perso de la map actuelle, on veut pas modifier la map sur maps.js a chaque fois
    this.x = x
    this.y = y
    this.z = z
    this.canvas = document.querySelector("#charCanvas")
    this.ctx = this.canvas.getContext("2d")
    this.cWidth = this.canvas.width = window.innerWidth / 1.7 // a modifier pour la taille
    this.cHeight = this.canvas.height = window.innerHeight // pareil
    this.ctx.translate(this.cWidth / 2, yCanvasTranslate)

    this.skinsName = ["ninja", "red", "blue", "green", "yellow", "lol", "noel"]
    this.skins = []
    this.imageSrc = ["images/assets/skins/ninjaHaut.svg", "images/assets/skins/ninjaBas.svg", "images/assets/skins/ninjaGauche.svg", "images/assets/skins/ninjaDroite.svg"]
    this.finalImages = []
    this.startImage = document.createElement("img")
    this.startImage.src = "images/assets/skins/ninjaDroite.svg"
    this.activeImage = this.startImage
    this.activeSrc = this.imageSrc
    this.imagesNinja = function(sourceImages) {
      this.finalImages = []
      for (var i = 0; i < 4; i++) {
        let img = document.createElement("img")
        img.src = sourceImages[i]
        this.finalImages.push(img)
      }
      ninja.drawCharacter(ninja.finalImages[3], ninja.x, ninja.y, ninja.z)
    }

    this.moveEL = function() {
      let self = this
      document.addEventListener("keydown", function(event) {
        if (devMode) {
          switch (event.keyCode) {
            case 37: // left
              if (self.canMove(self.x - 1, self.y, self.level)) {
                self.x--
                self.activeImage = self.finalImages[2]
                self.floorTest(self.x, self.y, self.level)
                if (self.floorTest(self.x, self.y, self.level) == "tp") {
                  self.x = tp[0]
                  self.y = tp[1]
                } else if (self.floorTest(self.x, self.y, self.level) == "buttonPress") {
                  self.charModMap[xyRed[0]][xyRed[1]][0] = 1
                  levels[self.level].drawMap(self.charModMap, false)
                }
                self.z = self.zAdjusting(self.x, self.y, self.level)
                self.drawCharacter(self.finalImages[2], self.x, self.y, self.z)

              }
              break;
            case 38: // UP
              if (self.canMove(self.x, self.y - 1, self.level)) {
                self.y--
                self.activeImage = self.finalImages[0]
                self.floorTest(self.x, self.y, self.level)
                if (self.floorTest(self.x, self.y, self.level) == "tp") {
                  self.x = tp[0]
                  self.y = tp[1]
                } else if (self.floorTest(self.x, self.y, self.level) == "buttonPress") {
                  self.charModMap[xyRed[0]][xyRed[1]][0] = 1
                  levels[self.level].drawMap(self.charModMap, false)
                }
                self.z = self.zAdjusting(self.x, self.y, self.level)
                self.drawCharacter(self.finalImages[0], self.x, self.y, self.z)
              }
              break;
            case 39: // RIGHT
              if (self.canMove(self.x + 1, self.y, self.level)) {
                self.x++
                self.activeImage = self.finalImages[3]
                self.floorTest(self.x, self.y, self.level)
                if (self.floorTest(self.x, self.y, self.level) == "tp") {
                  self.x = tp[0]
                  self.y = tp[1]
                } else if (self.floorTest(self.x, self.y, self.level) == "buttonPress") {
                  self.charModMap[xyRed[0]][xyRed[1]][0] = 1
                  levels[self.level].drawMap(self.charModMap, false)
                }
                self.z = self.zAdjusting(self.x, self.y, self.level)
                self.drawCharacter(self.finalImages[3], self.x, self.y, self.z)
              }
              break;
            case 40: // DOWN
              if (self.canMove(self.x, self.y + 1, self.level)) {
                self.y++
                self.activeImage = self.finalImages[1]
                self.floorTest(self.x, self.y, self.level)
                if (self.floorTest(self.x, self.y, self.level) == "tp") {
                  self.x = tp[0]
                  self.y = tp[1]
                } else if (self.floorTest(self.x, self.y, self.level) == "buttonPress") {
                  self.charModMap[xyRed[0]][xyRed[1]][0] = 1
                  levels[self.level].drawMap(self.charModMap, false)
                }
                self.z = self.zAdjusting(self.x, self.y, self.level)
                self.drawCharacter(self.finalImages[1], self.x, self.y, self.z)
              }
              break;
          }
        }
      })
    }
    this.moveAlgo = function(instruction) {
      let self = this
      let successfulMove = false
      switch (instruction) {
        case "droite":
          if (self.canMove(self.x + 1, self.y, self.level)) {
            self.x++
            self.activeImage = self.finalImages[3]
            self.floorTest(self.x, self.y, self.level)
            if (self.floorTest(self.x, self.y, self.level) == "tp") {
              self.x = tp[0]
              self.y = tp[1]
            } else if (self.floorTest(self.x, self.y, self.level) == "buttonPress") {
              self.charModMap[xyRed[0]][xyRed[1]][0] = 1
              levels[self.level].drawMap(self.charModMap, false)
            }
            self.z = self.zAdjusting(self.x, self.y, self.level)
            self.drawCharacter(self.finalImages[3], self.x, self.y, self.z)
            return true
          }
          break;
        case "haut":
          if (self.canMove(self.x, self.y - 1, self.level)) {
            self.y--
            self.activeImage = self.finalImages[0]
            self.floorTest(self.x, self.y, self.level)
            if (self.floorTest(self.x, self.y, self.level) == "tp") {
              self.x = tp[0]
              self.y = tp[1]
            } else if (self.floorTest(self.x, self.y, self.level) == "buttonPress") {
              self.charModMap[xyRed[0]][xyRed[1]][0] = 1
              levels[self.level].drawMap(self.charModMap, false)
            }
            self.z = self.zAdjusting(self.x, self.y, self.level)
            self.drawCharacter(self.finalImages[0], self.x, self.y, self.z)
            return true
          }
          break;
        case "bas":
          if (self.canMove(self.x, self.y + 1, self.level)) {
            self.y++
            self.activeImage = self.finalImages[1]
            self.floorTest(self.x, self.y, self.level)
            if (self.floorTest(self.x, self.y, self.level) == "tp") {
              self.x = tp[0]
              self.y = tp[1]
            } else if (self.floorTest(self.x, self.y, self.level) == "buttonPress") {
              self.charModMap[xyRed[0]][xyRed[1]][0] = 1
              levels[self.level].drawMap(self.charModMap, false)
            }
            self.z = self.zAdjusting(self.x, self.y, self.level)
            self.drawCharacter(self.finalImages[1], self.x, self.y, self.z)
            return true
          }
          break;
        case "gauche":
          if (self.canMove(self.x - 1, self.y, self.level)) {
            self.x--
            self.activeImage = self.finalImages[2]
            self.floorTest(self.x, self.y, self.level)
            if (self.floorTest(self.x, self.y, self.level) == "tp") {
              self.x = tp[0]
              self.y = tp[1]
            } else if (self.floorTest(self.x, self.y, self.level) == "buttonPress") {
              self.charModMap[xyRed[0]][xyRed[1]][0] = 1
              levels[self.level].drawMap(self.charModMap, false)
            }
            self.z = self.zAdjusting(self.x, self.y, self.level)
            self.drawCharacter(self.finalImages[2], self.x, self.y, self.z)
            return true
          }
          break;
      }
    }
  }

  skinSwap(skinNumber) { // permet de changer de skins via le menu a gauche
    for (var i = 0; i < this.skinsName.length; i++) {
      let directions = ["Haut", "Bas", "Gauche", "Droite"]
      let skin = []
      for (var j = 0; j < directions.length; j++) {
        skin.push("images/assets/skins/" + this.skinsName[i] + directions[j] + ".svg")
      }
      this.skins.push(skin)
    }
    this.imagesNinja(this.skins[skinNumber])
    this.activeSrc = this.skins[skinNumber]
    this.drawCharacter(this.finalImages[3], this.x, this.y, this.z)
  }

  clearChar() { // on clear le canvas du character
    this.ctx.clearRect(-this.cWidth / 2, -yCanvasTranslate, this.cWidth, this.cHeight)
  }

  floorTest(x, y, level) { // on teste si le joueur est sur une arrivée, un bouton ou un téléporteur et agit en fonction
    if (maps[level][x][y][0] == 100 || maps[level][x][y][0] == 1000 || maps[level][x][y][0] == 10000) { // on est donc sur l'arrivée
      nextLevel()
    } else if (maps[level][x][y][0] == 5) {
      for (var i = 0; i < maps[level].length; i++) {
        for (var j = 0; j < maps[level][i].length; j++) {
          if (maps[level][i][j][0] == 6) {
            tp = [i, j]
            return "tp"
          }
        }
      }
    } else if (maps[level][x][y][0] == 7) {
      for (var i = 0; i < maps[level].length; i++) {
        for (var j = 0; j < maps[level][i].length; j++) {
          if (maps[level][i][j][0] == 8) {
            xyRed = [i, j]
            return "buttonPress"
          }
        }
      }
    } else if (maps[level][x][y][0] == 50) {
      for (var i = 0; i < maps[level].length; i++) {
        for (var j = 0; j < maps[level][i].length; j++) {
          if (maps[level][i][j][0] == 60) {
            tp = [i, j]
            return "tp"
          }
        }
      }
    } else if (maps[level][x][y][0] == 70) {
      for (var i = 0; i < maps[level].length; i++) {
        for (var j = 0; j < maps[level][i].length; j++) {
          if (maps[level][i][j][0] == 80) {
            xyRed = [i, j]
            return "buttonPress"
          }
        }
      }
    }
  }

  drawCharacter(image, x, y, z) { // on actualise le personnage sur le canvass
    this.ctx.clearRect(-this.cWidth / 2, -yCanvasTranslate, this.cWidth, this.cHeight)
    this.ctx.save()
    this.ctx.translate((x - y) * tileWidth / 2, ((x + y) * tileHeight / 2 + 35) - z * tileHeight); // on se déplace a l'endroit de la case d'après. ajustements de 35 pour le faire descendre un peu
    this.ctx.drawImage(image, -this.startImage.width / 2, -this.startImage.height)
    this.ctx.restore()
  }

  eventStart() {
    this.drawCharacter(this.startImage, this.x, this.y, this.z)
  }

  zAdjusting(x, y, level) { // pour une case donnée, va renvoyer sa position sur l'axe z pour quel soit ajusté lors du changement de position du personange
    return maps[level][x][y][1]
  }

  canMove(x, y, level) { // va tester si le déplacement du joueur est autorisé
    if (typeof maps[level][x] === "undefined" || typeof maps[level][x][y] === "undefined") { // il y a pas de map. on gère le cas undefined préemptivement avant que ca spam la console de message d'erreurs de cases undefined
      return false
    } else if (maps[level][x][y][0] == 0) { // c'est un trou
      return false
      // respectivement bambou (attaquer), sol rouge, mob (tirer) et caillou (sauter)
    } else if (maps[level][x][y][0] == 2 || maps[level][x][y][0] == 8 || maps[level][x][y][0] == 3 || maps[level][x][y][0] == 30 || maps[level][x][y][0] == 4 || maps[level][x][y][0] == 80) {
      return false
    } else {
      return true
    }
  }

  // action(x, y, actionType) {
  //   'use strict';
  //   let casesATest = []
  //   // oui c'est barbare. est-ce que j'ai trouvé une autre manière ? Non.
  //   if (typeof this.charModMap[x + 1] != "undefined") {
  //     // casesATest.push(this.charModMap[x + 1][y])
  //     casesATest.push([x+1,y])
  //   }
  //   if (typeof this.charModMap[x][y + 1] != "undefined") {
  //     // casesATest.push(this.charModMap[x][y + 1])
  //     casesATest.push([x,y+1])
  //   }
  //   if (typeof this.charModMap[x][y - 1] != "undefined") {
  //     // casesATest.push(this.charModMap[x][y - 1])
  //     casesATest.push([x,y-1])
  //   }
  //   if (typeof this.charModMap[x - 1] != "undefined") {
  //     // casesATest.push(this.charModMap[x - 1][y])
  //     casesATest.push([x-1,y])
  //   }
  //   console.log(casesATest)
  //   casesATest.forEach(ouaisLaCase => {
  //     switch (this.charModMap[ouaisLaCase[0]][ouaisLaCase[1]][0]) { // switch sur le type de cases dans un rayon de x-1 autour du personnage
  //       case "undefined":
  //         break;
  //       case 2: // " attaquer" un bambou
  //         if (actionType == "attaquer") {
  //           console.log(ouaisLaCase)
  //           console.log(this.charModMap[ouaisLaCase[0]][ouaisLaCase[1]][0])
  //           this.charModMap[ouaisLaCase[0]][ouaisLaCase[1]][0] = 1
  //         }
  //         break;
  //       case 3: // attaquer un mob
  //         if (actionType == "attaquer") {
  //           this.charModMap[ouaisLaCase[0]][ouaisLaCase[1]][0] = 1 // on change la case en case simple
  //         }
  //         break;
  //       case 30:
  //         if (actionType == "attaquer") {
  //           this.charModMap[ouaisLaCase[0]][ouaisLaCase[1]][0] = 1 // on change la case en case simple
  //         }
  //         break;
  //       case 4: // sauter au dessus d'un caillou
  //         if (actionType == "sauter") {
  //           if (typeof this.charModMap[x + 1] != "undefined") {
  //             if (ouaisLaCase == this.charModMap[x + 1][y]) {
  //               this.x += 2
  //             }
  //           }
  //           if (typeof this.charModMap[x - 1] != "undefined") {
  //             if (ouaisLaCase == this.charModMap[x - 1][y]) {
  //               this.x -= 2
  //             }
  //           }
  //           if (typeof this.charModMap[x][y + 1] != "undefined") {
  //             if (ouaisLaCase == this.charModMap[x][y + 1]) {
  //               this.y += 2
  //             }
  //           }
  //           if (typeof this.charModMap[x][y - 1] != "undefined") {
  //             if (ouaisLaCase == this.charModMap[x][y - 1]) {
  //               this.y -= 2
  //             }
  //           }
  //         }
  //         break;
  //       case 0: // si on doit sauter au dessus d'un trou : on teste si la case d'apres le joueur est un trou mais aussi si 2 cases plus loin c'est une case sur laquelle on peut atterir
  //         if (actionType == "sauter") {
  //           if (typeof this.charModMap[x + 2] != "undefined") {
  //             if (ouaisLaCase == this.charModMap[x + 1][y] && (this.charModMap[x + 2][y][0] == 1 || this.charModMap[x + 2][y][0] == 5 || this.charModMap[x + 2][y][0] == 6)) {
  //               this.x += 2
  //             }
  //           }
  //           if (typeof this.charModMap[x - 2] != "undefined") {
  //             if (ouaisLaCase == this.charModMap[x - 1][y] && (this.charModMap[x - 2][y][0] == 1 || this.charModMap[x - 2][y][0] == 5 || this.charModMap[x - 2][y][0] == 6)) {
  //               this.x -= 2
  //             }
  //           }
  //           if (typeof this.charModMap[x][y + 2] != "undefined") {
  //             if (ouaisLaCase == this.charModMap[x][y + 1] && (this.charModMap[x][y + 2][0] == 1 || this.charModMap[x][y + 2][0] == 5 || this.charModMap[x][y + 2][0] == 6)) {
  //               this.y += 2
  //             }
  //           }
  //           if (typeof this.charModMap[x][y - 2] != "undefined") {
  //             if (ouaisLaCase == this.charModMap[x][y - 1] && (this.charModMap[x][y - 2][0] == 1 || this.charModMap[x][y - 2][0] == 5 || this.charModMap[x][y - 2][0] == 6)) {
  //               this.y -= 2
  //             }
  //           }
  //         }
  //         break;
  //     }
  //   })
  //
  //   this.drawCharacter(this.activeImage, this.x, this.y, this.z) // on redessine le personnage au cas ou il a sauté
  //   levels[this.level].drawMap(this.charModMap, false) // on redraw la map au cas ou elle a été modifié
  // }







  action(x, y, actionType) {
    'use strict';
    let casesATest = []
    // oui c'est barbare. est-ce que j'ai trouvé une autre manière ? Non.
    if (typeof this.charModMap[x + 1] != "undefined") {
      casesATest.push(this.charModMap[x + 1][y])
    }
    if (typeof this.charModMap[x][y + 1] != "undefined") {
      casesATest.push(this.charModMap[x][y + 1])
    }
    if (typeof this.charModMap[x][y - 1] != "undefined") {
      casesATest.push(this.charModMap[x][y - 1])
    }
    if (typeof this.charModMap[x - 1] != "undefined") {
      casesATest.push(this.charModMap[x - 1][y])
    }
    casesATest.forEach((ouaisLaCase, index) => {
      switch (ouaisLaCase[0]) { // switch sur le type de cases dans un rayon de x-1 autour du personnage
        case "undefined":
          break;
        case 2: // " attaquer" un bambou
          if (actionType == "attaquer") {
            ouaisLaCase[0] = 1 // on change la case en case simple
          }
          break;
        case 3: // attaquer un mob
          if (actionType == "attaquer") {
            ouaisLaCase[0] = 1 // on change la case en case simple
          }
          break;
        case 30:
          if (actionType == "attaquer") {
            ouaisLaCase[0] = 1 // on change la case en case simple
          }
          break;
        case 4: // sauter au dessus d'un caillou
          if (actionType == "sauter") {
            if (typeof this.charModMap[x + 1] != "undefined") {
              if (ouaisLaCase == this.charModMap[x + 1][y]) {
                this.x += 2
              }
            }
            if (typeof this.charModMap[x - 1] != "undefined") {
              if (ouaisLaCase == this.charModMap[x - 1][y]) {
                this.x -= 2
              }
            }
            if (typeof this.charModMap[x][y + 1] != "undefined") {
              if (ouaisLaCase == this.charModMap[x][y + 1]) {
                this.y += 2
              }
            }
            if (typeof this.charModMap[x][y - 1] != "undefined") {
              if (ouaisLaCase == this.charModMap[x][y - 1]) {
                this.y -= 2
              }
            }
          }
          break;
        case 0: // si on doit sauter au dessus d'un trou : on teste si la case d'apres le joueur est un trou mais aussi si 2 cases plus loin c'est une case sur laquelle on peut atterir
          if (actionType == "sauter") {
            if (typeof this.charModMap[x + 2] != "undefined") {
              if (ouaisLaCase == this.charModMap[x + 1][y] && (this.charModMap[x + 2][y][0] == 1 || this.charModMap[x + 2][y][0] == 5 || this.charModMap[x + 2][y][0] == 6)) {
                this.x += 2
              }
            }
            if (typeof this.charModMap[x - 2] != "undefined") {
              if (ouaisLaCase == this.charModMap[x - 1][y] && (this.charModMap[x - 2][y][0] == 1 || this.charModMap[x - 2][y][0] == 5 || this.charModMap[x - 2][y][0] == 6)) {
                this.x -= 2
              }
            }
            if (typeof this.charModMap[x][y + 2] != "undefined") {
              if (ouaisLaCase == this.charModMap[x][y + 1] && (this.charModMap[x][y + 2][0] == 1 || this.charModMap[x][y + 2][0] == 5 || this.charModMap[x][y + 2][0] == 6)) {
                this.y += 2
              }
            }
            if (typeof this.charModMap[x][y - 2] != "undefined") {
              if (ouaisLaCase == this.charModMap[x][y - 1] && (this.charModMap[x][y - 2][0] == 1 || this.charModMap[x][y - 2][0] == 5 || this.charModMap[x][y - 2][0] == 6)) {
                this.y -= 2
              }
            }
          }
          break;
      }
    })

    this.drawCharacter(this.activeImage, this.x, this.y, this.z) // on redessine le personnage au cas ou il a sauté
    levels[this.level].drawMap(this.charModMap, false) // on redraw la map au cas ou elle a été modifié
  }
}


let levels = [],
  activeMap = 0,
  j = 0,
  levelsCompleted = []

for (var i = 0; i < 11; i++) { // 1O niveaux + un petit niveau a la fin comme ca voila
  levels.push(new GameLevel(i))
}
levels[0].timedDrawMap(levels[0].map, true) // on dessine la première map


function nextLevel() { // fn appelé quand le joueur est sur un temple d'arrivée. va draw la map suivante
  levelsCompleted.push(activeMap) // on rajoute le numéro de la map a la liste des niveaux finis plus tard stockés dans le localStorage
  activeMap++
  if (activeMap <= 10) {
    levels[activeMap].drawMap(levels[activeMap].map, true) // on dessine la map d'après
  } else { // s'il y a plus de niveaux on clear les 2 canvas
    levels[10].clear()
    ninja.clearChar()
  }
  cBoard.clear() // on reclear la board a droite
  cBoard.levelIndicatorUpdate() // on update les niveaux complétés dans le menu niveau a gauche
  cBoard.blockLimitTxtUpdate()
  localStorage.setItem('CompletedLevelsLocal', JSON.stringify(levelsCompleted))
}

document.addEventListener('keyup', (e) => { // quand on appuie sur F12 on entre en mode développeur
  if (e.keyCode == 123) {
    devMode = true
  }
})


document.addEventListener("keyup", (e) => { // binds accessible seulement en dev mode
  if (devMode) {
    if (e.keyCode == 32) { // SPACE, on skip de niveau
      activeMap++
      if (activeMap <= 10) {
        levels[activeMap].drawMap(levels[activeMap].map, true)
      } else {
        levels[10].clear()
        ninja.clearChar()
      }
      cBoard.levelIndicatorUpdate() // on update les niveaux complétés dans le menu niveau a gauche
    } else if (e.keyCode == 76) { // L
      ninja.action(ninja.x, ninja.y, "sauter")
    } else if (e.keyCode == 77) { // M
      ninja.action(ninja.x, ninja.y, "attaquer")
    }
  }
})
