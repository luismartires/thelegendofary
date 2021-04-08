console.log("Trolls Connected");

class Trolls {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = this.y;
    this.lives = 7;

    this.damageReceived = [
      "./images/enemies/HURT_000.png",
      "./images/enemies/HURT_001.png",
      "./images/enemies/HURT_002.png",
      "./images/enemies/HURT_003.png",
      "./images/enemies/HURT_004.png",
      "./images/enemies/HURT_005.png",
      "./images/enemies/HURT_006.png",
    ];
    this.currentDamageReceivedIndex = 0;

    this.image = new Image();
    this.image.src = "./images/enemies/HURT_000.png";
    this.image.addEventListener("load", () => {
      this.drawTroll();
    });

    this.trollMainHeart = new Image();
    this.trollMainHeart.src = "./images/hearts/heartshield.gif";
    this.trollMainHeart.addEventListener("load", () => {
      this.drawTrollMainHeart();
    });

    this.trollHeart1 = new Image();
    this.trollHeart1.src = "./images/hearts/heartshield.gif";
    this.trollHeart1.addEventListener("load", () => {
      this.drawTrollHeart1();
    });

    this.trollHeart2 = new Image();
    this.trollHeart2.src = "./images/hearts/heartshield.gif";
    this.trollHeart2.addEventListener("load", () => {
      this.drawTrollHeart2();
    });

    this.trollHeart3 = new Image();
    this.trollHeart3.src = "./images/hearts/heartshield.gif";
    this.trollHeart3.addEventListener("load", () => {
      this.drawTrollHeart3();
    });

    this.trollHeart4 = new Image();
    this.trollHeart4.src = "./images/hearts/heartshield.gif";
    this.trollHeart4.addEventListener("load", () => {
      this.drawTrollHeart4();
    });

    this.trollHeart5 = new Image();
    this.trollHeart5.src = "./images/hearts/heartshield.gif";
    this.trollHeart5.addEventListener("load", () => {
      this.drawTrollHeart5();
    });

    this.trollHeart6 = new Image();
    this.trollHeart6.src = "./images/hearts/heartshield.gif";
    this.trollHeart6.addEventListener("load", () => {
      this.drawTrollHeart6();
    });
  }

  drawTroll() {
    context.drawImage(this.image, 650, 250, 400, 350);
  }

  drawTrollMainHeart() {
    context.drawImage(this.trollMainHeart, 810, 100, 110, 110);
  }

  drawTrollHeart1() {
    context.drawImage(this.trollHeart1, 775, 100, 35, 35);
  }

  drawTrollHeart2() {
    context.drawImage(this.trollHeart2, 770, 140, 35, 35);
  }

  drawTrollHeart3() {
    context.drawImage(this.trollHeart3, 785, 180, 35, 35);
  }
  drawTrollHeart4() {
    context.drawImage(this.trollHeart4, 915, 100, 35, 35);
  }

  drawTrollHeart5() {
    context.drawImage(this.trollHeart5, 920, 140, 35, 35);
  }

  drawTrollHeart6() {
    context.drawImage(this.trollHeart6, 900, 180, 35, 35);
  }

  drawDamageReceived() {
    if (this.currentDamageReceivedIndex === 6) {
      this.currentDamageReceivedIndex = 0;
    } else {
      this.currentDamageReceivedIndex += 1;
    }
    this.image.src = this.damageReceived[this.currentDamageReceivedIndex];
    this.drawTroll();
  }
}
