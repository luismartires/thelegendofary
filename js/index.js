let currentGame;

const townCanvas = document.getElementById("town");
const context = townCanvas.getContext("2d");

function startGame() {
  currentGame = new Game();
  currentHouses = new Houses();
  currentLevels = new Levels();
  currentTrolls = new Trolls();
  currentGame.houses = currentHouses;
  currentGame.houses.draw();
  currentGame.levels = currentLevels;
  currentGame.trolls = currentTrolls;
  currentGame.trolls = draw();
}

startGame();
