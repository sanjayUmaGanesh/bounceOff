var mr,fr;

function setup() {
  createCanvas(800,800);
  fr = createSprite(400, 100, 50, 80);
  fr.shapeColor = "green";
  fr.debug = true;
  mr = createSprite(400, 600, 80, 30);
  mr.shapeColor = "green";
  mr.debug = true;
  mr.velocityY = -5;
  fr.velocityY = 5; 
  
}

function draw() {
  background("blue");  
  bounceOff(mr,fr);
  
  drawSprites();
}
function bounceOff(obj1,obj2){
  if(obj1.y - obj2.y < obj1 .height/2 + obj2 .height/2 
    && obj2.y - obj1 .y < obj2.height/2 + obj1 .height/2 ){
      obj1 .velocityY = obj1 .velocityY * (-1);
      obj2.velocityY = obj2.velocityY * (-1);
  }

}