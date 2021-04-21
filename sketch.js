

function preload(){

 cloudObj=loadImage("images/cloud.png");
 nightbg=loadImage("images/night.jpg");
 daybg=loadImage("images/sky.jpg");
 redObj=loadImage("images/red.png")
 pinkObj=loadImage("images/pink.png")
 blueObj=loadImage("images/blue.png")
}

function setup(){
  canvas = createCanvas(1100,500);
  red = createSprite(550,470);
  red.addImage(redObj);
  red.scale=0.5;
  CloudsGroup = new Group();
  invisibleGround = createSprite(550,490,1100,10);
  invisibleGround.visible = false;

}

function draw(){
 background(daybg);
 if(keyDown("up") && red.y >= 160){
  red.velocityY = -8 ;
  }
  if(keyDown("right") ){
    red.velocityX = +5 ;
    }
  if(keyDown("left") ){
      red.velocityX = -5 ;
      }
//add gravity
red.velocityY = red.velocityY + 0.3;
red.collide(invisibleGround);
//red.debug=true;
edges=createEdgeSprites();
  /* Allow the red sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  red.bounceOff(edges[0]);
  red.bounceOff(edges[1]);
  
  if(CloudsGroup.collide(red)){
    red.velocityX=0
    red.velocityY=0
    CloudsGroup.setVelocityEach(0, 0);
  };

  //CloudsGroup.setColliderEach("circle",0,0,50);
 spawnClouds();
 
 drawSprites();
}
 
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(1200,120,40,10);
    cloud.y = Math.round(random(50,300));
    cloud.addImage(cloudObj);
    cloud.scale = 0.3;
    cloud.velocityX= -3;
    //cloud.debug=true;
    
     //assign lifetime to the variable
    //cloud.lifetime = 400;
    
    //adjust the depth
    cloud.depth = red.depth;
    red.depth = red.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
}