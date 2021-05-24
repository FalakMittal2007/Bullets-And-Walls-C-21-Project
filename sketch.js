var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  

  bullet=createSprite(50,200,50,5);
  bullet.shapeColor=color(255);
 
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color("grey");

 
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
}

function draw() {
  background(0);  
  textSize(35);
  fill("green")
  textFont("georgia")
  text("Green:Less Damage",400,50);
  fill("red")
   text(" Red:High Damage",800,50);
   
   bullet.velocityX=speed;
    
 if(hasCollided(bullet,wall))
 {

var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

 if(damage>10)
{
 wall.shapeColor=color(255,0,0);
 
}
 
 if(damage<10)
{
  wall.shapeColor=color(0,255,0);
  
  }
 }

 


 drawSprites();
}

