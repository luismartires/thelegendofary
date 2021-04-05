console.log("Enemies Connected");

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

const newTrolls = new Trolls(680, 270, 200, 200);

document.addEventListener("click", (e) => {
  newTrolls.draw();
});
