import Matter from "matter-js";
import Scena from "./Scena";
export default class Player{
     player = {};
     body = {};
     scena = {};
     x = 200;
     y = 0;
     h = 50;
     w = 50;
     left = 0;
     right = 0;
     mass = 1;
     speed = 0.1;
     friction = 1;
     image = ""
    
    img(p5){
        
    }
    
    create(props){
        this.scena = new Scena(props.scena);
         this.body = this.scena.getObjects("player")[0];
         this.player = Matter.Bodies.circle(
             this.scena.size(this.body.x + this.body.width / 2),
             this.scena.size(this.body.y + this.body.width / 2), 
             this.scena.size(this.body.width / 2));
         Matter.World.add(props.world,this.player);
    }
     translates(p5) {
      p5.translate(
        -this.player.position.x + p5.width / 2,
        -this.player.position.y + p5.height / 3
      ); 
  }
  
    view(p5) {
        p5.fill(110);
        p5.ellipseMode(p5.RADIUS);
        p5.ellipse(this.player.position.x, this.player.position.y, this.scena.size(this.body.width / 2));
        
        if(this.left == 1){
            Matter.Body.setAngularVelocity(this.player, -this.speed)
        }else if(this.right == 1){
             Matter.Body.setAngularVelocity(this.player, this.speed)
        }else{
            Matter.Body.setAngularVelocity(this.player, 0)
        }
             
        
        
    }
}