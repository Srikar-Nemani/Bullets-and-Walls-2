var bullet, speed, weight;
var fixedRect, thickness;


function setup() {
  createCanvas(1600,400);
  

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));

  fixedRect = createSprite(1200, 200, thickness, height/2);
  fixedRect.shapeColor = color(80,80,80);

  bullet = createSprite(0,200,50,5);
  bullet.shapeColor = color(255,255,255);

  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);
  
  if(isTouching(bullet,fixedRect)){
    
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    
    if(damage > 10){
      fixedRect.shapeColor = color(255,0,0);
    }
    
    if(damage < 10){
      fixedRect.shapeColor = color(0,255,0);
    }
  }


  drawSprites();
}