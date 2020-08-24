const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engien,world;
var ground,ground2;
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var hitter;
var binder;

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

  box = new Box(900,height/2+170,100,50);
  box2  =new Box(1020,height/2+170,100,50);
  box3 = new Box(1140,height/2+170,100,50);
  box4 = new Box(1260,height/2+170,100,50);
  box5 = new Box(960,height/2+150,100,50);
  box6 = new Box(1080,height/2+150,100,50);
  box7 = new Box(1200,height/2+150,100,50);
  box8 = new Box(1020,height/2+130,100,50);
  box9 = new Box(1140,height/2+130,100,50);
  box10 = new Box(1080,height/2+110,100,50);
  
  ground = new Ground(width/2+200,height/2+200,500,20);

  hitter = new Ball(400,height/2+150,30);
  binder = new String(hitter.body,{x:300,y:height/2+150});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow")
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display()
  box9.display();
  box10.display();
  ground.display();
 hitter.display();
 binder.display();
  drawSprites();
 
 
}

 function mouseDragged(){
  Matter.Body.setPosition(hitter.body,{x:mouseX,y:mouseY})
 }

 function mouseReleased(){
  binder.fly();
}
