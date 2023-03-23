import "./styles.css";
import React, { Component } from "react";
import Sketch from "react-p5";
import Matter from "matter-js";
import Player from "./components/Player";
import Walls from "./components/Walls";
import scena1 from "./scena/scena.json"
import Scena from "./components/Scena";
export default class App extends Component {
    Engine = Matter.Engine;
    Render = Matter.Render;
    Runner = Matter.Runner;
    Composite = Matter.Composite;
    Composites = Matter.Composites;
    Common = Matter.Common;
    MouseConstraint = Matter.MouseConstraint;
    Mouse = Matter.Mouse;
    Bodies = Matter.Bodies;
	
engine;
world;
box;
scena = new Scena(scena1)
player = new Player();
walls = new Walls({name:"platform",world:this.world});

preload = (p5) => {
   this.player.img(p5);
  };

	 setup = (p5, canvasParentRef) => {
		p5.createCanvas(window.innerWidth , window.innerHeight).parent(canvasParentRef);
		
		p5.frameRate(this.fr);
		this.engine = this.Engine.create();
		this.engine.gravity.y = 0.5;
    	this.world = this.engine.world;
    	this.Engine.run(this.engine);
		this.player.create({scena:scena1,world:this.world})
		this.walls.create({scena:scena1,world:this.world});
		Matter.World.add(this.world, [this.player.player]);

	};

	 draw = (p5) => {
		p5.background(255);
		this.player.translates(p5)
		this.player.view(p5)
		this.walls.view(p5)
		
	}; 
	
	keyPressed = (e)=>{
		if(e.key === "ArrowLeft"){
			this.player.left = 1;
			this.player.right = 0;
		}else if(e.key === "ArrowRight"){
			this.player.right = 1;
			this.player.left = 0;
		}
	}
	
	keyReleased = ()=>{
		this.player.right = 0;
			this.player.left = 0;
	}

	render() {
    return (
     <div style = {{overflow:"hidden",width:100 + "%",height: window.innerHeight - 25 + "px"}}> 
	 <Sketch setup={this.setup} draw={this.draw} preload={this.preload}  keyPressed = {this.keyPressed} keyReleased ={this.keyReleased} />
	 </div>
    );
  }
}
