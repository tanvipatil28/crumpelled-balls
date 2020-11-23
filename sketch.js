var ground,paper,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
ground=new Ground(400,680,800,10);
	
	dustbin1=new Dustbin (500,620,10,100)

	dustbin2=new Dustbin(300,620,10,100);

	dustbin3=new Dustbin(400,670,201,10);

	
	//Create the Bodies Here.
	paper=new Paper(200,200,50)
	Engine.run(engine);
  
}


function draw() {
  background(0);
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
    paper.display();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.postion,{x:85,y:-85})
	}
}


