export default class Scena {
  scena = {};
  x = 0;
  y = 0;
  scenaWidth = 0;
  scenaHeigiht = 0;
  scenaSize = 0;
  constructor(props) {
    this.scena = props;
    this.scenaWidth = props.height * props.tileheight;
    this.scenaHeigiht = props.height * props.tileheight;
    this.scenaSize =
      props.height * props.tileheight + (props.height * props.tileheight) / 8;
    this.x = props.x;
    this.y = props.y;
  }
  getObjects(name) {
    let layers = this.scena.layers;
    let nameObject = name;
    let arrObject = [];
    let layersObjects = layers
      .map((x) => x.objects)
      .filter((f) => f !== undefined);
    layersObjects.map((x, i) =>
      x
        .filter((f2) => f2.name === nameObject)
        .map((x2, j) => (arrObject[j] = x2))
    );
    return arrObject;
  }
  getObject(name) {
    return this.scena.layers
      .filter((f, i) => f.name === name)
      .map((x, i) => x)[0];
  }
  getObjectData(name) {
    return this.scena.layers
      .filter((f, i) => f.name === name)
      .map((x, i) => x)[0].data;
  }

  getProperties(name) {
    if (this.getObject(name).properties) {
      return this.getObject(name).properties.map((pos) => pos);
    } else {
      return [];
    }
  }

  procentIn(n, p) {
    return (n / 100) * p;
  }
  procent(x) {
    let r = window.innerWidth + window.innerHeight;
    return this.procentIn(r, x);
  }
  procentX(x) {
    let r = window.innerWidth;
    return this.procentIn(r, x);
  }
  procentY(x) {
    let r = window.innerHeight;
    return this.procentIn(r, x);
  }
  procentInv(n, p) {
    return (p * 100) / n;
  }

  size(num) {
    return this.procent(this.procentInv(this.scenaSize, num));
  }
}
