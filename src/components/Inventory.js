import Collide from "./Collide";

export default class Inventory {
  x = 10;
  y = 10;
  width = 80;
  height = 80;
  clX = 87;
  clY = 16;
  clR = 5;
  s = {};
  hit = 0;
  mouses = {};
  collide = new Collide();
  create(scena, action) {
    this.s = scena;
    console.log(action.creatArray(10));
    this.x = scena.procentX(this.x);
    this.y = scena.procentY(this.y);
    this.width = scena.procentX(this.width);
    this.height = scena.procentY(this.height);
    this.clX = scena.procentX(this.clX);
    this.clY = scena.procentY(this.clY);
    this.clR = scena.procentX(this.clR);
  }

  close(p5) {
    p5.fill(250);
    p5.ellipse(this.clX, this.clY, this.clR, this.clR);
  }

  pressM(e) {
    /* this.hit = this.collide.collidePointRect(
      e.mouseX,
      e.mouseY,
      this.clX - this.clR / 2,
      this.clY - this.clR / 2,
      this.clR,
      this.clR
    );*/
    //  console.log(e);
  }

  view(p5) {
    if (this.hit === 0) {
      p5.fill(200);
      p5.rect(this.x, this.y, this.width, this.height);
      this.close(p5);
    }
  }
}
