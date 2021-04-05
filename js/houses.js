console.log("Houses connected");

class Houses {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    const potionShop = new Image();
    potionShop.src = "./images/houses/potion-shop.png";
    potionShop.addEventListener("load", () => {
      context.drawImage(potionShop, 680, 270, 150, 170);
    });

    const armorShop = new Image();
    armorShop.src = "./images/houses/armor-shop.png";
    armorShop.addEventListener("load", () => {
      context.drawImage(armorShop, 240, 300, 190, 210);
    });

    const weaponShop = new Image();
    weaponShop.src = "./images/houses/weapon-shop.png";
    weaponShop.addEventListener("load", () => {
      context.drawImage(weaponShop, 480, 320, 200, 230);
    });

    const dirRight = new Image();
    dirRight.src = "./images/direction-boards/direction-right.png";
    dirRight.addEventListener("load", () => {
      context.drawImage(dirRight, 950, 450, 100, 120);
    });

    const dirLeft = new Image();
    dirLeft.src = "./images/direction-boards/direction-left.png";
    dirLeft.addEventListener("load", () => {
      context.drawImage(dirLeft, 20, 450, 100, 120);
    });
  }

  click() {
    console.log("clicked");
  }
}
