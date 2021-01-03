var movingRect , fixedRect;
var o1 , o2 , o3 , o4 ; 


function setup() {
  createCanvas(800,400);
  movingRect =   createSprite(700, 200, 100, 50);
  movingRect.shapeColor = 'blue';
  movingRect.debug = true;
  movingRect.velocityX = -5;

  fixedRect = createSprite(400,200,50,100);
  fixedRect.shapeColor = 'yellow';
  fixedRect.debug = true;
  fixedRect.velocityX = 5;

  o1 = createSprite(100,100,50,50);
  o1.shapeColor = 'purple';

  o2 = createSprite(200,100,50,50);
  o2.shapeColor = 'pink';

  o3 = createSprite(300,100,50,50);
  o3.shapeColor = 'purple';

  o4 = createSprite(400,100,50,50);
  o4.shapeColor ='pink';
}

function draw() {
  background(0);  

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  //if(isTouching(movingRect , o3 , o4 )){
    //movingRect.shapeColor = 'red';
    //o3.shapeColor = 'red';
    //o4.shapeColor = 'red';
  //}
  //else{
  //movingRect.shapeColor = 'green';
  //o3.shapeColor = 'green';
  //o4.shapeColor = 'green';
  //}
  bounceOff(movingRect , fixedRect);
  drawSprites();
}


