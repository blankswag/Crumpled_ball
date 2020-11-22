
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2,dustbin3,paperObject, groundObject

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	background("skyblue");
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundObject=new Ground(width/2,620,width,20);


	dustbin1=createSprite(width/1.3, height-40,width, 30,40);
	dustbin1.scale=0.3
	dustbin1.shapeColor=color("red");
	
	dustbin2=createSprite(width/1.1, 610,-40,300, 30,40);
    dustbin2.scale=0.3
	dustbin2.shapeColor=color("red");

	dustbin3=createSprite(width/1.6, 610,-30,300, 30,40);
	dustbin3.scale=0.3
	dustbin3.shapeColor=color("red");
	paperObject = new Ball(100,500,10);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  groundObject.display();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:8,y:-4.3});
  
	}
}


