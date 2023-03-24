import Matter from "matter-js";
import Scena from "./Scena";
import Body from "./Body";
export default class Walls {
  body = [];
  name = "";
  static = true;
  constructor(props) {
    this.name = props.name;
    this.world = props.world;
  }
  create(props) {
    let b = new Body(props);
    this.body = b.createRectange({
      scena: props.scena,
      world: props.world,
      name: this.name,
      static: this.static,
    });
    Matter.World.add(props.world, this.body);
  }

  view(p5) {
    p5.rectMode(p5.CENTER);
    //  p5.fill(0);
    // this.body.map((b) =>
    //   p5.rect(b.position.x, b.position.y, b.width, b.height)
    //  );
  }
}
