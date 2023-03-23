import Matter from "matter-js";
export default class Player{
     player = {};
     x = 0;
     y = 0;
     h = 100;
     w = 100;
    create(){
         this.player = Matter.Bodies.circle(this.x,0, 100);
         console.log(this.player)
    }
    
    view(p5) {
        p5.fill(0);
        p5.ellipseMode(p5.RADIUS);
        p5.ellipse(this.player.position.x, this.player.position.y, this.w / 2);
    }
}