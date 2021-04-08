/*
console.log("Enemies Connected");

const canvasEnemies = document.getElementById("town");

class Trolls {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    const newTrolls = new Image();
    newTrolls.src = "./images/enemies/redtroll.png";
    newTrolls.addEventListener("load", () => {
      context.drawImage(newTrolls, 680, 270, 150, 170);
    });
  }
}

const newTrolls = new Trolls();
canvasEnemies.addEventListener("click", (e) => {
  if (e.layerX > 957 && e.layerX < 1020 && e.layerY > 472 && e.layerY < 518) {
    newTrolls.draw();
  }
});
*/
