import "./styles.css";
import Sketch from "react-p5";
import Matter from "matter-js";
import Player from "./components/Player";
export default function App() {
 let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies;
	
let engine;
let world;
let box;
let player = new Player();

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
		engine = Engine.create();
    	world = engine.world;
    	Engine.run(engine);
		 player.create()
		 Composite.add(world, [player.player]);
		
	};

	const draw = (p5) => {
		p5.background(255);
		p5.ellipse(0,0,100,100)
		player.view(p5)
	};

	return <Sketch setup={setup} draw={draw} />;
}
