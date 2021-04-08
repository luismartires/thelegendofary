console.log("Levels Connected");
let newBattleZone;
let newPlayer;

const canvasLevels = document.getElementById("town");

class Levels {
  constructor(width, height) {
    this.x = 150;
    this.y = 470;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "./images/backgrounds/battle-background.png";
    this.image.addEventListener("load", () => {
      this.draw();
    });
  }

  draw() {
    context.drawImage(this.image, 0, 0, 1072, 602);
  }
}

canvasLevels.addEventListener("click", (e) => {
  if (e.layerX > 957 && e.layerX < 1020 && e.layerY > 472 && e.layerY < 518) {
    newBattleZone = new Levels();
    newPlayer = new Player();
    newTroll = new Trolls();
    currentGame.battleZone = newBattleZone;
    currentGame.player = newPlayer;
    currentGame.trolls = newTroll;
    updateCanvas();
  }
});

// Canto superior esq
//layerX: 957
//layerY: 476

//Sup direito
//layerX: 1028
//layerY: 472

//inf esq
//layerX: 958
//layerY: 518

//inf dto
//
//layerX: 1020
//layerY: 516

//townCanvas.addEventListener("mousemove", (e) => {
// console.log(e)
//  newBattleZone.draw();
