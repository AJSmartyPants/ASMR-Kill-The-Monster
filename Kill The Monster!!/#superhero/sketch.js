const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  /*box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);*/
  block1 = new Box(600,100,50,50);  
  block2 = new Box(600,100,50,50);
  block3 = new Box(600,100,50,50);
  block4 = new Box(600,100,50,50);
  block5 = new Box(600,100,50,50);
  block6 = new Box(600,100,50,50);
  block7 = new Box(600,100,50,50);
  block8 = new Box(600,100,50,50);
  block9 = new Box(600,50,50,50);
  block10 = new Box(700,50,50,50);
  block11 = new Box(700,50,50,50);
  block12 = new Box(700,50,50,50);
  block13 = new Box(700,50,50,50);
  block14 = new Box(700,50,50,50);
  block15 = new Box(700,50,50,50);
  block16 = new Box(700,50,50,50);
  block17 = new Box(700,50,50,50);
  block18 = new Box(700,50,50,50);
  block19 = new Box(700,50,50,50);
  block20 = new Box(800,50,50,50);
  block21 = new Box(800,50,50,50);
  block22 = new Box(800,50,50,50);
  block23 = new Box(800,50,50,50);
  block24 = new Box(800,50,50,50);
  block25 = new Box(800,50,50,50);
  block26 = new Box(800,50,50,50);
  block27 = new Box(800,50,50,50);
  block28 = new Box(800,50,50,50);
  block29 = new Box(800,50,50,50);
  block30 = new Box(900,50,50,50);
  block31 = new Box(900,50,50,50);
  block32 = new Box(900,50,50,50);
  block33 = new Box(900,50,50,50);
  block34 = new Box(900,50,50,50);
  block35 = new Box(900,50,50,50);
  block36 = new Box(900,50,50,50);
  block37 = new Box(900,50,50,50);
  block38 = new Box(900,50,50,50);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  


  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}