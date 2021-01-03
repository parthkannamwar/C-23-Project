var helicopterIMG, helicopterSprite, packageSprite,packageIMG,wall1,wall2,wall3;
var packageBody,groundy,boxBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2,83, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="gray"


	engine = Engine.create();
	world = engine.world;


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxBody = Bodies.rectangle(width/2, 630, 200, 20 , {isStatic:true} );
 	World.add(world, boxBody);

	 wall1=new Box(310,610,20,100)
	 wall2=new Box(489,610,20,100)
	wall3=new Box(width/2,650,200,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed()

  	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	wall1.display();
	wall2.display();
	wall3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.


	Matter.Body.setStatic(packageBody,false);

  }
}



