const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19 ,box20, box21, box22, box23;
var roof;
var hero;
var rope;
var bg;
var monster;
var invisible;

function preload(){
  bg = loadImage("images/GamingBackground.png");

}


function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, height-200, 1200, 30);

  box1 = new Box(400, 100, 50, 50);
  box2 = new Box(400, 100, 50, 50);
  box3 = new Box(400, 100, 50, 50);
  box4 = new Box(400, 100, 50, 50);
  box5 = new Box(400, 100, 50, 50);
  box6 = new Box(400, 100, 50, 50);
  box19 = new Box(400, 100, 50, 50)
  box20 = new Box(400, 100, 50, 50)
  box21 = new Box(400, 100, 50, 50)

  box7 = new Box(470, 100, 50, 50);
  box8 = new Box(470, 100, 50, 50);
  box9 = new Box(470, 100, 50, 50);
  box10 = new Box(470, 100, 50, 50);
  box11 = new Box(470, 100, 50, 50);
  box12 = new Box(470, 100, 50, 50);

  box13 = new Box(540, 100, 50, 50);
  box14 = new Box(540, 100, 50, 50);
  box15 = new Box(540, 100, 50, 50);
  box16 = new Box(540, 100, 50, 50);
  box17 = new Box(540, 100, 50, 50);
  box18 = new Box(540, 100, 50, 50);

  box22 = new Box(540, 100, 50, 50);
  box23 = new Box(540, 100, 50, 50);

  hero = new Ball(200, 200, 200, 200);

  rope = new Rope(hero.body,{x: 200, y: 200});

  monster = new Monster(700, 350, 200, 200);



}

function draw() {
  background(bg); 

  Engine.update(engine);
  
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
  box21.display();

  box22.display();
  box23.display();

  hero.display();

  rope.display();

  monster.display();



}

function mouseDragged(){
  Body.setPosition(hero.body,{x: mouseX, y: mouseY});
}

