class Attack {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 0;
    this.height = 0;

    this.attack = new Image();
    this.attack.src = "./images/attack/attack.png";
    this.attack.addEventListener("load", () => {
      this.draw();
    });
  }

  draw() {
    this.width = this.attack.width / 10;
    this.height = this.attack.height / 10;
    context.drawImage(this.attack, this.x, this.y, this.width, this.height);
  }

  clicked(cursorX, cursorY, index) {
    if (
      cursorX > this.x &&
      cursorX < this.x + this.width &&
      cursorY > this.y &&
      cursorY < this.y + this.height
    ) {
      currentGame.attacks.splice(index, 1);
      currentGame.trolls.lives--;
      currentGame.trolls.drawDamageReceived();

      if (currentGame.trolls.lives == 0) {
        currentGame.gameOver = true;
        cancelAnimationFrame(animationId);
        document.getElementById("game-victory").style.display = "block";
        document.getElementById("game-box").style.display = "none";
      }
    }
  }
}
/*
function setup() {
for (let i = 0; i < 1; i++) {
    circles[i] = new attackCircle(random(width), random(height));

}
}

function attackCircle(x, y) {
    this.x = x;
    this.y = y;

    this.display = function() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }

    this.move = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
}


function draw() {
    background(0);
    for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
    }

    if (circles.length > 2) {
        circles.splice (0, 1);
    }
}

function mousePressed () {
    circles.push(new attackCircle(mouseX, mouseY));
}

setup()
*/
