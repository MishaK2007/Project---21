var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,35,80);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
 
  if(wall.x-car.x < (bullet.width+wall.width)/2) { 
    bullet.velocityX=0; 
    var damage =0.5 * weight * speed* speed/thickness*thickness*thickness;

  if(damage < 10) { 
    bullet.shapeColor = color(255,0,0);
    } 
  
  if(deformation > 10) {
     bullet.shapeColor= color(0,255,0);
     }
  }
 
 drawSprites();
}
function hasCollided(Lwall,Lbullet){
   BulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;

   if(bulletRightEdge >= wallLeftEdge){
      return true
   }
   return false;
}