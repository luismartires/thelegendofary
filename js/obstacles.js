class Obstacles {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.rocks = [
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey01.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey02.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
      "./images/rocks/rockgrey03.png",
    ];
    this.rocksIndex = 0;

    this.image = new Image();
    this.image.src = "./images/rocks/rockgrey.png";
    this.image.addEventListener("load", () => {
      this.draw();
    });
  }

  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  drawRocks() {
    if (this.rocksIndex === this.rocks.length - 1) {
      this.rocksIndex = 0;
    } else {
      this.rocksIndex += 1;
    }
    this.image.src = this.rocks[this.rocksIndex];
    this.draw();
  }
}
