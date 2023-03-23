import Matter from "matter-js";
import Scena from "./Scena";
export default class Walls{
     body = [];
     x = 0;
     y = 300;
    w = 1000;
    h = 100;
    name = "";
    constructor(props){
        this.name = props.name;
        this.world = props.world;
    }
    create(props){
        let scena = new Scena(props.scena);
        
         this.body = scena.getObjects(this.name).map((b)=>Matter.Bodies.rectangle(
             scena.size(b.x + b.width / 2),
             scena.size(b.y + b.height / 2), 
             scena.size(b.width), 
             scena.size(b.height),
             {width:scena.size(b.width),
             height:scena.size(b.height),
             isStatic:true}));
         Matter.World.add(props.world,this.body);
        }
    
    view(p5) {
        p5.rectMode(p5.CENTER);
        p5.fill(0);
        this.body.map((b)=>p5.rect(b.position.x, b.position.y, b.width, b.height));
    }
}