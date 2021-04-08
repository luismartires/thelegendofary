console.log("Player Connected");

class Player {
  constructor() {
    this.x = 150;
    this.y = 470;
    this.width = 110;
    this.height = 115;
    this.lives = 3;
    this.runningRight = [
      "./images/player/_RUN_000.png",
      "./images/player/_RUN_001.png",
      "./images/player/_RUN_002.png",
      "./images/player/_RUN_003.png",
      "./images/player/_RUN_004.png",
      "./images/player/_RUN_005.png",
      "./images/player/_RUN_006.png",
    ];
    this.currentRunningRightIndex = 0;

    this.runningLeft = [
      "./images/player/_RUN_000L.png",
      "./images/player/_RUN_001L.png",
      "./images/player/_RUN_002L.png",
      "./images/player/_RUN_003L.png",
      "./images/player/_RUN_004L.png",
      "./images/player/_RUN_005L.png",
      "./images/player/_RUN_006L.png",
    ];
    this.currentRunningLeftIndex = 0;

    this.image = new Image();
    this.image.src = "./images/player/_IDLE_000.png";
    this.image.addEventListener("load", () => {
      this.drawPlayer();
    });

    this.playerIcon = new Image();
    this.playerIcon.src = "./images/player/playericon.png";
    this.playerIcon.addEventListener("load", () => {
      this.drawPlayerIcon();
    });

    this.mainHeart = new Image();
    this.mainHeart.src = "./images/hearts/mainheart.png";
    this.mainHeart.addEventListener("load", () => {
      this.drawMainHeart();
    });

    this.heart1 = new Image();
    this.heart1.src = "./images/hearts/heart.png";
    this.heart1.addEventListener("load", () => {
      this.drawHeart1();
    });

    this.heart2 = new Image();
    this.heart2.src = "./images/hearts/heart.png";
    this.heart2.addEventListener("load", () => {
      this.drawHeart2();
    });
  }

  drawPlayer() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  drawPlayerIcon() {
    context.drawImage(this.playerIcon, 0, 0, 250, 250);
  }

  drawMainHeart() {
    context.drawImage(this.mainHeart, 40, 190, 30, 30);
  }

  drawHeart1() {
    context.drawImage(this.heart1, 75, 190, 30, 30);
  }

  drawHeart2() {
    context.drawImage(this.heart2, 110, 190, 30, 30);
  }

  drawRunningRight() {
    if (this.currentRunningRightIndex === 6) {
      this.currentRunningRightIndex = 0;
    } else {
      this.currentRunningRightIndex += 1;
    }
    this.image.src = this.runningRight[this.currentRunningRightIndex];
    this.drawPlayer();
  }

  drawRunningLeft() {
    if (this.currentRunningLeftIndex === 6) {
      this.currentRunningLeftIndex = 0;
    } else {
      this.currentRunningLeftIndex += 1;
    }
    this.image.src = this.runningLeft[this.currentRunningLeftIndex];
    this.drawPlayer();
  }

  movePlayer(keyCode) {
    context.clearRect(this.x, this.y, this.width, this.height);
    switch (keyCode) {
      case 37:
        if (this.x > 20) {
          this.x -= 10;
          this.drawRunningLeft();
        }
        break;
      case 39:
        if (this.x < 430) {
          this.x += 10;
          this.drawRunningRight();
        }
        break;
    }
    this.drawPlayer()
  }
}
