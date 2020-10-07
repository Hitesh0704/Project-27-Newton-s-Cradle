
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Roof(360,200,400,40);

  bob1=new Bob(200,600);
  rope1=new Rope(bob1.body,{x:200,y:200});

  bob2=new Bob(280,600);
  rope2=new Rope(bob2.body,{x:280,y:200});

  bob3=new Bob(360,600);
  rope3=new Rope(bob3.body,{x:360,y:200});

  bob4=new Bob(440,600);
  rope4=new Rope(bob4.body,{x:440,y:200});

  bob5=new Bob(520,600);
  rope5=new Rope(bob5.body,{x:520,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode===UP_ARROW){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:50});
    }
}



