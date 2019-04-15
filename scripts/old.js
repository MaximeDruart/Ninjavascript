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
} // DRAW 2D tout simple


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
} // drawblock avec la hauteur des cases qui va de 0 à z

for (var i = 0; i < groundMap.length; i++) {
  for (var j = 0; j < groundMap[i].length; j++) {
    if (groundMap[i][j]!=0) {
      drawBlock(i, j, heightMap[i][j])
    }
  }
}
