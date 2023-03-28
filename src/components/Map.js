import Animate from "./Animate";
import Scena from "./Scena";
export default class Map {
  scena = {};
  imageArr = ["../asset/scena.png","../asset/scena.png"]
  //animate = [];
  //animate2 = new Animate();
  preload(p5) {
    //this.animate = this.imageArr.map((anim)=>{[{name:anim,obj:new Animate()}]});
    
   // this.animate.setup(p5);
  //  this.animate.animateE("../asset/scena.png");
   // this.animate2.setup(p5);
   // this.animate2.animateE("../asset/scena.png");
   // this.animate.animateArray(this.img);
  }
  create(props) {
    this.scena = new Scena(props);
/*
    this.position = [
      this.scena.getProperties("bg"),
      this.scena.getProperties("bg2"),
      this.scena.getProperties("bg3"),
      this.scena.getProperties("bg4"),
      this.scena.getProperties("bg5"),
      this.scena.getProperties("bg6"),
      this.scena.getProperties("bg7"),
      this.scena.getProperties("bg8"),
      this.scena.getProperties("bg8"),
    ];*/
  }

  img(p5 ,scena, animate, name){
    return p5.image(animate.sprite(),scena.size(scena.getProperties(name)[0].value),scena.size(scena.getProperties(name)[1].value),scena.size(scena.scenaWidth),
    scena.size(scena.scenaHeigiht))
  }

  view(p5) {
  //  this.img(p5, this.scena,this.animate,"bg");
   // this.img(p5, this.scena,this.animate2,"bg2");
    /*this.position.map((bg, i) =>
      this.animate.getImage(
        this.scena.size(bg[0].value),
        this.scena.size(bg[1].value),
        this.scena.size(this.scena.scenaWidth),
        this.scena.size(this.scena.scenaHeigiht),
        i
      )
    );*/
  }
}
