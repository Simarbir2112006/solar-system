
var sun,sun_img;
var mercury,earth,neptune,mars,venus,jupiter,saturn,uranus;

function preload(){
  sun_img=loadImage("sun.png")
}

function setup() {
  createCanvas (650,650);

 
  sun =  createSprite (325,325,90,90);
  sun.addImage(sun_img);
  sun.scale=0.1;
  sun.setCollider("circle",0,0,150)
  sun.debug=true;
  
  mercury =  createSprite (265,270,15,15);
  mercury.shapeColor="#a9a9a9";
  

  earth =  createSprite (160,250,30,30);
  earth.shapeColor="#8cbed6";
  

  neptune =  createSprite (40,40,40,40);
  neptune.shapeColor="#00008b";
  

  mars  =  createSprite (120,320,20,20);
  mars.shapeColor="#c98932";
  

  venus =  createSprite (415,390,25,25);
  venus.shapeColor=" #FFFFF6";
  

  jupiter =  createSprite (500,150,65,65);
  jupiter.shapeColor="#a13d2d";
  

  saturn  =  createSprite (150,550,55,55);
  saturn.shapeColor="#CC9966";
  

  uranus =  createSprite (570,300,45,45);
  uranus.shapeColor="#0d98ba";
  
}

function draw(){

  background("black");

  
  if( frameCount % 30 === 0)
  {
    sun.scale = sun.scale + 0.05; 
  }

  if(sun.isTouching(mercury)){
    mercury.destroy();
  }
  
  if(sun.isTouching(earth)){
    earth.destroy();
  }

  if(sun.isTouching(neptune)){
    neptune.destroy();
  }

  if(sun.isTouching(mars)){
    mars.destroy();
  }

  if(sun.isTouching(venus)){
    venus.destroy();
  }

  if(sun.isTouching(jupiter)){
    jupiter.destroy();
  }

  if(sun.isTouching(saturn)){
    saturn.destroy();
  }

  if(sun.isTouching(uranus)){
    uranus.destroy();
  }


  drawSprites(); 

}