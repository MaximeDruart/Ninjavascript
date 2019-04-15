let canvas = document.querySelector("canvas"),
context = canvas.getContext("2d"),
width = canvas.width = window.innerWidth,
height = canvas.height = window.innerHeight,
tileWidth = 100,
tileHeight = 50

let groundMap = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
]

let heightMap2 = []
function tempHeightMapGen(){
  for (var i = 0; i < 7; i++) {
    let array = []
    for (var j = 0; j < 10; j++) {
      let subArray = [4,3]
      array.push(subArray)
    }
    heightMap2.push(array)
  }
}


context.translate(width / 2, 200) // on recentre un peu le canvas

function drawBlock(x, y, zStart, zEnd) {
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

function draw() {
  for (var i = 0; i < groundMap.length; i++) {
    for (var j = 0; j < groundMap[i].length; j++) {
      if (groundMap[i][j]!=0) {
        drawBlock(i, j, heightMap2[i][j][0], heightMap2[i][j][1])
      }
    }
  }
}

tempHeightMapGen()
draw()
