import Animate from "./Animate";
import Scena from "./Scena";
export default class Map {
  img = [
    "./asset/scena.png",
    "./scena/scena.png",
    "./scena/scena.png",
    "./scena/scena.png",
    "./scena/scena.png",
    "./scena/scena.png",
    "./scena/scena.png",
    "./scena/scena.png",
    "./scena/scena.png",
  ];
  position = [{}];
  scena = {};
  animate = new Animate();
  preload(p5) {
    this.animate.setup(p5);
    this.animate.animateE(this.img[0]);
  }
  create(props) {
    this.scena = new Scena(props);
    this.animate.setupAnimate();
    this.position = [this.scena.getObject("bg")];
  }

  view(p5) {
    this.animate.params();

    p5.image(
      this.animate.sprite(),
      this.position[0].x,
      this.position[0].y,
      this.scena.size(this.scena.scenaWidth),
      this.scena.size(this.scena.scenaHeigiht)
    );
    p5.image(
      this.animate.sprite(),
      this.position[0].x - this.scena.size(this.scena.scenaWidth),
      this.position[0].y,
      this.scena.size(this.scena.scenaWidth),
      this.scena.size(this.scena.scenaHeigiht)
    );
    p5.image(
      this.animate.sprite(),
      this.position[0].x + this.scena.size(this.scena.scenaWidth),
      this.position[0].y,
      this.scena.size(this.scena.scenaWidth),
      this.scena.size(this.scena.scenaHeigiht)
    );
    p5.image(
      this.animate.sprite(),
      this.position[0].x,
      this.position[0].y + this.scena.size(this.scena.scenaHeigiht),
      this.scena.size(this.scena.scenaWidth),
      this.scena.size(this.scena.scenaHeigiht)
    );
     p5.image(
      this.animate.sprite(),
      this.position[0].x,
      this.position[0].y + this.scena.size(this.scena.scenaHeigiht),
      this.scena.size(this.scena.scenaWidth),
      this.scena.size(this.scena.scenaHeigiht)
    );
  }
}
