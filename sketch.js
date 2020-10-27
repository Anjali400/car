var wall,car;
var speed,weight;
var score;
function setup() {
  createCanvas(1400,400);
  wall=createSprite(1300, 200, 40,height/2);
 car=createSprite(50, 200, 50, 50);
speed=random(55,90);
weight=random(400,1500);
score=0;
}

function draw() {
  background(255,255,255);
  car .velocityX=speed;  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
  car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}
  }
   text("Score: "+ score, 500,50);
   score = score + Math.round(getFrameRate()/60);
  drawSprites();
}