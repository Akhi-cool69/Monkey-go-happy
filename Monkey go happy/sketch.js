//creating variables
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var survivaltime = 0

function preload(){
  
  //laoding monkey images
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  //loading banana and obstacle images
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
//creating play area
  createCanvas(600, 600);
  
//creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  
//creating ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
//creating new groups
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  var survivaltime = 0;

  
}


function draw() {
//creating background
  background(225);
  
//repeating ground
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
//giving monkey jump ability
  if(keyDown("space")){
  monkey.velocityY = -12;
  }
  //giving monkey gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  //colliding monkey with ground
  monkey.collide(ground);
  
  //spawing bananas and obstacles
  bananas();
  obstacles();
  
  //displaying score
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 530,50);
  
  //displaying survival time
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivaltime, 0,50);
  
//creating sprites
  drawSprites();
}

//creating fuction for bananas
function bananas(){
  if(World.frameCount%80===0){
    banana = createSprite(600,200,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(100,200));
    banana.velocityX = -7;
    bananas.lifetime = 600;
    FoodGroup.add(banana);
    monkey.depth = banana.depth + 1;
  }
}

function obstacles(){
  if(World.frameCount%300===0){
    obstacle = createSprite(600,328,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -7;
    obstacle.lifetime = 600;
    obstacleGroup.add(obstacle);
  }
}







