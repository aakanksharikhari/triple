const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var box;
var bird;
var pig;
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(600,height,1200,20);
  box= new Box(700,320,70,70);
  bird=new Bird(100,100,50,50);
  pig=new Pig(810,350);
}

function draw() {
  background(255,255,255);
   Engine.update(engine);
    ground.display();
    box.display();
    bird.display();
    pig.display();
    
}