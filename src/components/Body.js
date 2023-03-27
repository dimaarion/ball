import Matter from "matter-js";
import Scena from "./Scena";
export default class Body {
  count = 0;
  createRectange(props) {
    let scena = new Scena(props.scena);
    return scena.getObjects(props.name).map((b) =>
      Matter.Bodies.rectangle(
        scena.size(b.x + b.width / 2),
        scena.size(b.y + b.height / 2),
        scena.size(b.width),
        scena.size(b.height),
        {
          width: scena.size(b.width),
          height: scena.size(b.height),
          isStatic: props.static,
        }
      )
    );
  }

  timer(n) {
    n = n * 1000;
    if (this.count > n) {
      this.count = 0;
    }
    this.count++;
    return Math.round(this.count / 1000);
  }
}
