let currentGame;
let obstaclesFrequency = 0;
let animationId;

const backgroundBattleMusic = new Audio("./audio/GranBatalla.mp3");

const townCanvas = document.getElementById("town");
const context = townCanvas.getContext("2d");

function startGame() {
  currentGame = new Game();
  currentHouses = new Houses();
  currentGame.houses = currentHouses;
  cancelAnimationFrame(animationId);
  //updateCanvas();
}

function detectCollision(obstacle) {
  return !(
    currentGame.player.x > obstacle.x + obstacle.width ||
    currentGame.player.x + currentGame.player.width < obstacle.x ||
    currentGame.player.y > obstacle.y + obstacle.height
  );
}

function updateCanvas() {
  context.clearRect(0, 0, townCanvas.width, townCanvas.height);
  currentGame.battleZone.draw();
  backgroundBattleMusic.play();
  currentGame.player.drawPlayer();
  currentGame.trolls.drawTroll();
  currentGame.player.drawPlayerIcon();

  switch (currentGame.player.lives) {
    case 3:
      currentGame.player.drawMainHeart();
      currentGame.player.drawHeart1();
      currentGame.player.drawHeart2();
      //currentGame.player.drawHeart3();
      break;
    case 2:
      currentGame.player.drawMainHeart();
      currentGame.player.drawHeart1();
      // currentGame.player.drawHeart2();
      break;
    case 1:
      currentGame.player.drawMainHeart();
      //currentGame.player.drawHeart1();
      break;
  }

  switch (currentGame.trolls.lives) {
    case 7:
      currentGame.trolls.drawTrollMainHeart();
      currentGame.trolls.drawTrollHeart1();
      currentGame.trolls.drawTrollHeart2();
      currentGame.trolls.drawTrollHeart3();
      currentGame.trolls.drawTrollHeart4();
      currentGame.trolls.drawTrollHeart5();
      currentGame.trolls.drawTrollHeart6();
      break;

    case 6:
      currentGame.trolls.drawTrollMainHeart();
      currentGame.trolls.drawTrollHeart1();
      currentGame.trolls.drawTrollHeart2();
      currentGame.trolls.drawTrollHeart3();
      currentGame.trolls.drawTrollHeart4();
      currentGame.trolls.drawTrollHeart5();
      break;

    case 5:
      currentGame.trolls.drawTrollMainHeart();
      currentGame.trolls.drawTrollHeart1();
      currentGame.trolls.drawTrollHeart2();
      currentGame.trolls.drawTrollHeart3();
      currentGame.trolls.drawTrollHeart4();
      break;

    case 4:
      currentGame.trolls.drawTrollMainHeart();
      currentGame.trolls.drawTrollHeart1();
      currentGame.trolls.drawTrollHeart2();
      currentGame.trolls.drawTrollHeart3();
      break;

    case 3:
      currentGame.trolls.drawTrollMainHeart();
      currentGame.trolls.drawTrollHeart1();
      currentGame.trolls.drawTrollHeart2();
      break;

    case 2:
      currentGame.trolls.drawTrollMainHeart();
      currentGame.trolls.drawTrollHeart1();
      break;

    case 1:
      currentGame.trolls.drawTrollMainHeart();
      break;
  }

  obstaclesFrequency++;
  if (obstaclesFrequency % 100 === 1) {
    const randomObstacleX = Math.floor(Math.random() * 450);
    const randomObstacleY = 0;
    const randomObstacleWidth = Math.floor(Math.random() * 50) + 50;
    const randomObstacleHeight = Math.floor(Math.random() * 50) + 50;
    const newObstacle = new Obstacles(
      randomObstacleX,
      randomObstacleY,
      randomObstacleWidth,
      randomObstacleHeight
    );
    currentGame.obstacles.push(newObstacle);
  }

  if (obstaclesFrequency % 200 === 1 && currentGame.attacks.length < 1) {
    const randomX = Math.floor(Math.random() * (canvasLevels.width - 51.2));
    const randomY = Math.floor(Math.random() * (canvasLevels.height - 51.2));
    const newAttack = new Attack(randomX, randomY);
    currentGame.attacks.push(newAttack);
  }

  currentGame.attacks.forEach((attack, index) => {
    attack.draw();
  });

  currentGame.obstacles.forEach((obstacle, index) => {
    obstacle.y += 1;
    obstacle.drawRocks();

    if (detectCollision(obstacle)) {
      currentGame.player.lives--;
      currentGame.trolls.lives++;

      obstaclesFrequency = 0;
      currentGame.obstacles = [];

      if (currentGame.player.lives == 0) {
        currentGame.gameOver = true;
        cancelAnimationFrame(animationId);
        document.getElementById("game-over").style.display = "block";
        document.getElementById("game-box").style.display = "none";
      }
    }
  });

  if (!currentGame.gameOver) {
    animationId = requestAnimationFrame(updateCanvas);
    //Calling update canvas every 60fps
  }
}

document.addEventListener("click", (e) => {
  currentGame.attacks.forEach((attack, index) => {
    let cursorX = e.layerX;
    let cursorY = e.layerY;
    attack.clicked(cursorX, cursorY, index);
  });
});

startGame();

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  currentGame.player.movePlayer(e.keyCode);
});

townCanvas.addEventListener("click", (e) => {
  console.log(e);
});

// Canto superior esq
//screenX: 948
//screenY: 644

//Sup direito
//screenX: 1017.6000366210938
//screenY: 648

//inf esq
//screenX: 944
//screenY: 687.2000122070312

//inf dto
//screenX: 1005.6000366210938
//screenY: 689.6000366210938

/*
cantsupes;
layerX: 945;
layerY: 89;

cantsupdto;
layerX: 991;
layerY: 95;

cantinfes;
layerX: 948
layerY: 126

cantinfdto
layerX: 987
layerY: 122
*/
