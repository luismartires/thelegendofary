console.log("Levels Connected");

class Levels {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    const battleZone = new Image();
    battleZone.src = "./images/backgrounds/battle-background.png";
    battleZone.addEventListener("load", () => {
      context.drawImage(battleZone, 0, 0, 1072, 602);
    });
  }
}

const newBattleZone = new Levels(680, 270, 200, 200);

document.addEventListener("click", (e) => {
  newBattleZone.draw();
});
