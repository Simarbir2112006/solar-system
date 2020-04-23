const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var sun;
var planet1;
var planet2;
var planet3;
var planet4;

function setup() {
  CreateCanvas (1600,900);

  engine = Engine.create();
  world = engine.world;

  var sun_options ={
    isStatic: true
 }
 var planet1_options ={
  isStatic: true
 }
 var planet2_options ={
  isStatic: true
 }
 var planet3_options ={
    isStatic: true
 }
 var planet4_options ={
    isStatic: true
 }

  sun =  Bodies.circle(800,450,90,sun_options);
  World.add(world, ball);

  planet1 =  Bodies.circle(550,100,50,planet1_options);
  World.add(world, planet1);

  planet2 =  Bodies.circle(100,100,20,planet2_options);
  World.add(world, planet2);

  planet3 =  Bodies.circle(950,300,40,planet3_options);
  World.add(world, planet3);

  planet4 =  Bodies.circle(850,200,70,planet4_options);
  World.add(world, planet4);

  
}

function draw(){
  background("black");

  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(sun.position.x,sun.position.y,90,90);

  ellipseMode(RADIUS);
  ellipse(planet1.position.x,planet1.position.y,50,50);

  ellipseMode(RADIUS);
  ellipse(planet2.position.x,planet2.position.y,20,20);

  ellipseMode(RADIUS);
  ellipse(planet3.position.x,planet3.position.y,40,40);

  ellipseMode(RADIUS);
  ellipse(planet4.position.x,planet4.position.y,70,70);
}