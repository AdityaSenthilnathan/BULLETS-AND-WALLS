var bullet, wall, speed, weight, calc, thickness;
function setup() {
  speed = random(223,321);
  thickness = random(22,83);
  weight = random(30,52);
  calc = (.5 * weight * speed * speed)/(thickness * thickness * thickness)
  bullet = createSprite(50, 200, 50, 25);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet.velocityX = speed;
  createCanvas(1600,400);
  bullet.shapeColor = "white"
}

function draw() {

  if (bullet.isTouching(wall)) {
    bullet.velocityX = 0;
  }
  bullet.collide(wall, collidebullet);
  background(255,0,255);  
  
  drawSprites();
}
function collidebullet(){
  if ( calc < 10){
    wall.shapeColor = color(100,255,0);
}

if ( calc > 10){
  wall.shapeColor = color(225,0,0);
}


  

}