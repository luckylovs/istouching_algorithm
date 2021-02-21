var fixRect,movingRect;



function setup() {
  createCanvas(800,800);
  fixRect = createSprite(400, 200, 50, 50);
movingRect = createSprite(500,200,50,50)
fixRect.shapeColor = "green"
movingRect.shapeColor = "green"
}

function draw() {
  background(0); 
  
movingRect.x = mouseX;
movingRect.y = mouseY;

if(movingRect.x-fixRect.x <movingRect.width/2+fixRect.width/2
  && fixRect.x-movingRect.x<movingRect.width/2+fixRect.width/2
  && fixRect.y-movingRect.y<movingRect.height/2+fixRect.height/2
  && movingRect.y-fixRect.y<movingRect.height/2+fixRect.height/2 ){
  fixRect.shapeColor = "pink"
  movingRect.shapeColor = "pink" 
}

else{
  fixRect.shapeColor = "white"
movingRect.shapeColor = "white"
}
  drawSprites();
}


