var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var obstacle1_png, obstacle2_png, obstacle3_png, obstacle4_png, obstacle5_png, obstacle6_png;

var score = 0


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  obstacle1_png = loadImage("obstacle1.png");
  obstacle2_png = loadImage("obstacle2.png");
  obstacle3_png = loadImage("obstacle3.png");
  obstacle4_png = loadImage("obstacle4.png");
  obstacle5_png = loadImage("obstacle5.png");
  obstacle6_png = loadImage("obstacle6.png");

  
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  text("score: "+ score,480,30)
  score = score + Math.round(frameCount/600)

  if(keyDown("space")&& trex.y >= 160) {
    trex.velocityY = -14;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  
  spawnCactus();

  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    cloud.lifetime=200;
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
function spawnCactus() {
  if(frameCount % 60 === 0) {
    cactus = createSprite(600,165,10,40);
    cactus.velocityX= -4
    var num = Math.round(random(1,6));
    switch(num){
      case 1: cactus.addImage("cactus1", obstacle1_png)
      break;

      case 2: cactus.addImage("cactus2", obstacle2_png)
      break;

      case 3: cactus.addImage("cactus3", obstacle3_png)
      break;

      case 4: cactus.addImage("cactus4", obstacle4_png)
      break;

      case 5: cactus.addImage("cactus5", obstacle5_png)
      break;

      case 6: cactus.addImage("cactus6", obstacle6_png)
      break;

      default: break;
    }
    cactus.scale = 0.6;
    cactus.lifetime=150;
  }
}

