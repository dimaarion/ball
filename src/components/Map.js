import Animate from "./Animate";
import Scena from "./Scena";
export default class Map {
  img = [
    "./asset/scena.png",
    "./asset/scena2.png",
    "./asset/scena.png",
    "./asset/scena.png",
    "./asset/scena.png",
    "./asset/scena.png",
    "./asset/scena.png",
    "./asset/scena.png",
    "./asset/scena.png",
  ];
  scena = {};
  animate = new Animate();
  preload(p5) {
    this.animate.setup(p5);
    //  this.animate.animateE(this.img[0]);
    this.animate.animateArray(this.img);
  }
  create(props) {
    this.scena = new Scena(props);

    this.position = [
      this.scena.getProperties("bg"),
      this.scena.getProperties("bg2"),
      this.scena.getProperties("bg3"),
      this.scena.getProperties("bg4"),
      this.scena.getProperties("bg5"),
      this.scena.getProperties("bg6"),
      this.scena.getProperties("bg7"),
      this.scena.getProperties("bg8"),
    ];
  }

  view(p5) {
    this.position.map((bg, i) =>
      this.animate.getImage(
        this.scena.size(bg[0].value),
        this.scena.size(bg[1].value),
        this.scena.size(this.scena.scenaWidth),
        this.scena.size(this.scena.scenaHeigiht),
        i
      )
    );
  }
}
