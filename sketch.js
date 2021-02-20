var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(400, 100, 80, 30);
  movingRect.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  console.log(movingRect.x-fixedRect.x)
  console.log(movingRect.width/2+fixedRect.width/2)

  if(movingRect.x -fixedRect.x < movingRect.width/2 +fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 +fixedRect.width/2 &&
    movingRect.y -fixedRect.y < movingRect.height/2 +fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 +fixedRect.height/2 ){
    
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "purple";
  }
  else{
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  drawSprites();
}