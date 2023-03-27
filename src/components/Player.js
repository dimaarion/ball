import Matter from "matter-js";
import Scena from "./Scena";
import Body from "./Body";
import Animate from "./Animate";
export default class Player {
  player = {};
  body = {};
  scena = {};
  x = 100;
  y = 0;
  width = 50;
  height = 50;
  radius = 50;
  left = 0;
  right = 0;
  mass = 1;
  speed = 0.1;
  friction = 1;
  image =
    "https://uploads.codesandbox.io/uploads/user/f0ec9a1a-dbb6-4f1c-875a-49dd16e23056/lvmz-money2.png";
  frame = 1;
  animate = new Animate();
  b = new Body();
  img(p5) {
    this.animate.setup(p5);
    this.animate.animateD(this.image, this.frame);
  }

  create(props) {
    //  localStorage.setItem("playerY", "20");
    //  localStorage.setItem("playerX", "1200");
    console.log(localStorage);
    this.scena = new Scena(props.scena);
    this.body = this.scena.getObjects("player")[0];
    this.x = this.scena.size(this.body.x + this.body.width / 2);
    this.y = this.scena.size(this.body.y + this.body.width / 2);
    if (localStorage.getItem("playerX")) {
      this.x = Number.parseInt(localStorage.getItem("playerX")) / 4;
      this.y = Number.parseInt(localStorage.getItem("playerY")) / 4;
    } else {
      this.y = this.scena.size(this.body.y + this.body.width / 2);
    }
    this.player = Matter.Bodies.circle(
      this.x,
      this.y,
      this.scena.size(this.body.width / 2)
    );
    Matter.World.add(props.world, this.player);
    this.animate.setupAnimate();
  }
  translates(p5) {
    p5.translate(
      -this.player.position.x + p5.width / 2,
      -this.player.position.y + p5.height / 3
    );
  }

  view(p5) {
    if (this.b.timer(4) > 3) {
      localStorage.setItem("playerX", this.player.position.x);
      localStorage.setItem("playerY", this.player.position.y);
    }

    p5.fill(110);
    p5.ellipseMode(p5.RADIUS);
    p5.ellipse(
      this.player.position.x,
      this.player.position.y,
      this.scena.size(this.body.width / 2)
    );

    if (this.left == 1) {
      Matter.Body.setAngularVelocity(this.player, -this.speed);
    } else if (this.right == 1) {
      Matter.Body.setAngularVelocity(this.player, this.speed);
    } else {
      Matter.Body.setAngularVelocity(this.player, 0);
    }
    // Matter.Body.setDensity(this.player, 1);
    // Matter.Body.setInertia(this.player, 50);
    // Matter.Body.setMass(this.player, 500);
    // Matter.Body.setSpeed(this.player, 3);
    this.animate.params();
    // p5.image(this.animate.sprite(),this.player.position.x - this.scena.size(this.body.width ) / 2, this.player.position.y - this.scena.size(this.body.width ) / 2, this.scena.size(this.body.width ),this.scena.size(this.body.width ));
  }
}
