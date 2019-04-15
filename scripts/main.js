class GameLevel {
  constructor(level, groundMap, heightMap) { // charCanvas ? ou autre classe
    this.canvas = document.querySelector("canvas")
    this.context = canvas.getContext("2d")
    this.width = this.canvas.width = window.innerWidth // a modifier pour la taille
    this.height = this.canvas.height = window.innerHeight // pareil
    this.tileWidth = 100
    this.tileHeight = 50
    this.groundMap = groundMap
    this.heightMap = heightMap

  }
  itemMapGen(){
    for (var i = 0; i < groundMap.length; i++) {
      for (var j = 0; j < groundMap[i].length; j++) {
        groundMap[i][j]
      }
    }
  }
  draw3d(x, y, z){

  }
  mapGen(){
    for (var i = 0; i < groundMap.length; i++) {
      for (var j = 0; j < groundMap[i].length; j++) {
        if (groundMap[i][j]!=0) { // 0 = absence de bloc
          drawBlock(i, j, heightMap[i][j])
        }
      }
    }
  }

}



let canvas = document.querySelector("canvas"),
context = canvas.getContext("2d"),
width = canvas.width = window.innerWidth,
height = canvas.height = window.innerHeight,
tileWidth = 100,
tileHeight = 50

let groundMap = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
]

let heightMap = [
  [2, 3, 2, 1, 1, 1, 1, 0, 2, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 4, 4, 4, 4, 4, 4, 4, 4, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 2, 1, 4, 1, 3]
]

let heightMap2 = []

for (var i = 0; i < 7; i++) {
  let array = []
  for (var j = 0; j < 10; j++) {
    let subArray = [10,0]
    array.push(subArray)
  }
  heightMap2.push(array)
}


context.translate(width/ 2, 200)

function draw() {
  for (var i = 0; i < 10; i++) {
    for (var i = 0; i < 5; i++) {
      drawTile()
    }
  }
}

function drawTile(x, y, color) {
  context.save();
  context.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2);

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(tileWidth / 2, tileHeight / 2);
  context.lineTo(0, tileHeight);
  context.lineTo(-tileWidth / 2, tileHeight / 2);
  context.closePath();
  context.fillStyle = color;
  context.fill();

  context.restore();
}

function drawBlock(x, y, z) {
  var top = "#eeeeee",
    right = "#cccccc",
    left = "#999999";

  context.save();
  context.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2); // on se déplace a l'endroit de la case d'après

  // draw top
  context.beginPath();
  context.moveTo(0, -z * tileHeight); // coin du haut (0, 0 | auquel on soustrait en y la hauteur du bloc de la case multiplié par la valeur en z)
  context.lineTo(tileWidth / 2, tileHeight / 2 - z * tileHeight); // coin de droite
  context.lineTo(0, tileHeight - z * tileHeight);
  context.lineTo(-tileWidth / 2, tileHeight / 2 - z * tileHeight);
  context.closePath();
  context.fillStyle = top;
  context.fill();

  // draw left
  context.beginPath();
  context.moveTo(-tileWidth / 2, tileHeight / 2 - z * tileHeight);
  context.lineTo(0, tileHeight - z * tileHeight);
  context.lineTo(0, tileHeight);
  context.lineTo(-tileWidth / 2, tileHeight / 2);
  context.closePath();
  context.fillStyle = left;
  context.fill();

  // // draw right
  context.beginPath();
  context.moveTo(tileWidth / 2, tileHeight / 2 - z * tileHeight);
  context.lineTo(0, tileHeight - z * tileHeight);
  context.lineTo(0, tileHeight);
  context.lineTo(tileWidth / 2, tileHeight / 2);
  context.closePath();
  context.fillStyle = right;
  context.fill();


  context.restore();
}

function drawBlock2(x, y, zStart, zEnd) {
  var top = "#eeeeee",
    right = "#cccccc",
    left = "#999999";

  context.save();
  context.translate((x - y) * tileWidth / 2, (x + y) * tileHeight / 2); // on se déplace a l'endroit de la case d'après

  // draw top
  context.beginPath();
  context.moveTo(0, -zStart * tileHeight); // coin du haut (0, 0 | auquel on soustrait en y la hauteur du bloc de la case multiplié par la valeur en z)
  context.lineTo(tileWidth / 2, tileHeight / 2 - zStart * tileHeight); // coin de droite
  context.lineTo(0, tileHeight - zStart * tileHeight);
  context.lineTo(-tileWidth / 2, tileHeight / 2 - zStart * tileHeight);
  context.closePath();
  context.fillStyle = top;
  context.fill();

  // draw left
  context.beginPath();
  context.moveTo(-tileWidth / 2, tileHeight / 2 - zStart * tileHeight);
  context.lineTo(0, tileHeight - zStart * tileHeight);
  context.lineTo(0, (-zEnd * tileHeight)+tileHeight);
  context.lineTo(-tileWidth / 2, tileHeight / 2 - zEnd * tileHeight);
  context.closePath();
  context.fillStyle = left;
  context.fill();

  // // draw right
  context.beginPath();
  context.moveTo(tileWidth / 2, tileHeight / 2 - zStart * tileHeight);
  context.lineTo(0, tileHeight - zStart * tileHeight);
  context.lineTo(0, (-zEnd * tileHeight)+tileHeight);
  context.lineTo(tileWidth / 2, tileHeight / 2 - zEnd * tileHeight);
  context.closePath();
  context.fillStyle = right;
  context.fill();


  context.restore();
}

// for (var i = 0; i < groundMap.length; i++) {
//   for (var j = 0; j < groundMap[i].length; j++) {
//     if (groundMap[i][j]!=0) {
//       drawBlock(i, j, heightMap[i][j])
//     }
//   }
// }

for (var i = 0; i < groundMap.length; i++) {
  console.log("i "+ i)
  for (var j = 0; j < groundMap[i].length; j++) {
    console.log("j "+ j)
    if (groundMap[i][j]!=0) {
      drawBlock2(i, j, heightMap2[i][j][0], heightMap2[i][j][1])
    }
  }
}
