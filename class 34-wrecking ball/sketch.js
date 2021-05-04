
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ball;
var roof;
var rope;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

function preload()
{
	
}

function setup() {
	createCanvas(3000, 800);


	engine = Engine.create();
	world = engine.world;



ball=new Ball(200,550,40);
	

	rope= new Rope(ball.body,{x:500, y:50},-80,0);
    
  ground=new Ground(600,600,1200,20);

  box1=new Building(900,100,70,70);
  box2=new Building(900,100,70,70);
  box3=new Building(900,100,70,70);
  box4=new Building(900,100,70,70);
  box5=new Building(900,100,70,70);
  box6=new Building(900,100,70,70);
  box7=new Building(800,100,70,70);
  box8=new Building(800,100,70,70);
  box9=new Building(800,100,70,70);
  box10=new Building(800,100,70,70);
  box11=new Building(800,100,70,70);
  box12=new Building(800,100,70,70);
  box13=new Building(700,100,70,70);
  box14=new Building(700,100,70,70);
  box15=new Building(700,100,70,70);
  box16=new Building(700,100,70,70);
  box17=new Building(700,100,70,70);
  box18=new Building(700,100,70,70);
  box19=new Building(700,100,70,70);
  box20=new Building(700,100,70,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ball.display();
 
  rope.display();
 
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  drawSprites();
 
}



