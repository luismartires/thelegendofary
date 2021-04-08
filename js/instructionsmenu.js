console.log("Instructions Menu Connected");

let newInstructionsMenu;

const canvasMenu = document.getElementById("town");

class Instructions {
  constructor(width, height) {
    this.x = 150;
    this.y = 470;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "./images/backgrounds/town-instructions.png";
    this.image.addEventListener("load", () => {
      this.draw();
    });
  }

  draw() {
    context.drawImage(this.image, 0, 0, 1072, 602);
  }
}

canvasMenu.addEventListener("click", (e) => {
  if (e.layerX > 945 && e.layerX < 991 && e.layerY > 89 && e.layerY < 126) {
    newInstructionsMenu = new Instructions();
  }
});
