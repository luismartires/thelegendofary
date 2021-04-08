console.log("Instructions Menu Connected");

let newInstructionsMenu;

const canvasMenu = document.getElementById("town");

class Instructions {
  constructor(x, y, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = 400;
    this.height = 620;
    this.image = new Image();
    this.image.src = "./images/backgrounds/town-instructionsv3.png";
    this.image.addEventListener("load", () => {
      this.draw();
    });
  }

  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

canvasMenu.addEventListener("click", (e) => {
  if (e.layerX > 945 && e.layerX < 991 && e.layerY > 89 && e.layerY < 126) {
    newInstructionsMenu = new Instructions();
  }
});
