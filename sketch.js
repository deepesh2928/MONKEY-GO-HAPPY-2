var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey,monkeyA,monkey8;
var banana,banana1,banana2,banana3,bananaImg,bananaGroup;
var obstacle,stone,obstacleGroup;
var back,backImg;
var ground,groundImg;
var re,over,reImg,overImg;
var score,count;

function preload () {
  monkeyA=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  monkey8=loadImage("Monkey_08.png");

  bananaImg=loadImage("banana.png");
  obstacle=loadImage("stone.png");

  backImg=loadImage("jungle.png");
  groundImg=loadImage("ground.png");

  reImg=loadImage("re.png");
  overImg=loadImage("over.png");
}

function setup () {
  createCanvas(400,400);
  back=createSprite(200,200,400,400);
  back.addImage("jungle",backImg);
  back.scale=1.8;
  
  ground=createSprite(200,320,400,10);
  ground.addImage("jungle",groundImg);
  ground.debug=true;

  monkey=createSprite(80,280,20,20);
  monkey.addAnimation("Monkey",monkeyA);
  monkey.scale=0.1;

  over=createSprite(200,200);
  over.addImage(overImg);
  over.scale=0.3;
  over.visible=false;

  re=createSprite(200,250);
  re.addImage(reImg);
  re.scale=0.1;
  re.visible=false;

  bananaGroup=new Group();

  banana=createSprite(400,200,20,20);
  banana.addImage("banana",bananaImg);
  banana.scale=0.05;
  
  banana1=createSprite(700,200,20,20);
  banana1.addImage("banana",bananaImg);
  banana1.scale=0.05;
  
  banana2=createSprite(1000,200,20,20);
  banana2.addImage("banana",bananaImg);
  banana2.scale=0.05;
  
  banana3=createSprite(1300,200,20,20);
  banana3.addImage("banana",bananaImg);
  banana3.scale=0.05;

  stone=createSprite(1500,300,20,20);
  stone.addImage("stone",obstacle);
  stone.scale=0.1;

  score=0;
  count=0;
}
function draw (){
  monkey.collide(ground);
  
  score = score + Math.round(getFrameRate()/60);

  bananaGroup.add(banana);
  bananaGroup.add(banana1);
  bananaGroup.add(banana2);
  bananaGroup.add(banana3);

    if(gameState===PLAY){

      banana.velocityX=-3;
      banana1.velocityX=-3;
      banana2.velocityX=-3;
      banana3.velocityX=-3;
      
      stone.velocityX=-3

      if(keyDown("Space")&&monkey.y>200){
        monkey.velocityY=-12
      }
      monkey.velocityY=monkey.velocityY+0.8;

      if(monkey.isTouching(banana)){
        banana.x=1300;
        count=count+1;
      }
      if(monkey.isTouching(banana1)){
        banana1.x=1300;
        count=count+1;
      }
      if(monkey.isTouching(banana2)){
        banana2.x=1300;
        count=count+1;
      }
      if(monkey.isTouching(banana3)){
        banana3.x=1300;
        count=count+1;
      }

      if(banana.y<0){
        banana.x=1300;
      }
      if(banana1.y<0){
        banana1.x=1300;
      }
      if(banana2.y<0){
        banana2.x=1300;
      }
      if(banana3.y<0){
        banana3.x=1300;
      }

      if(stone.x<0){
        stone.x=1500;
      }

      if(monkey.isTouching(stone)){
      gameState=END;
      over.visible=true;
      re.visible=true;
      
      monkey.changeImage(monkey8);
      
      stone.destroy();
      stone.velocityX=0;
     
      monkey.velocityY = 0;
      banana.destroy();
      banana1.destroy();
      banana2.destroy();
      banana3.destroy();
     }
   }
    if(mousePressedOver(re)){
      reset();
      monkey.collide(ground);
    }
  drawSprites();
  
  textSize(20);
  text("Survival Time:"+score,210,300);
  text("Bananas:"+count,100,300);
}

function reset(){
  gameState=PLAY;
  score=0;
  count=0;
  
  monkey.changeAnimation("Monkey",monkeyA);
  over.visible=false;
  re.visible=false;

  banana=createSprite(400,200,20,20);
  banana.addImage("banana",bananaImg);
  banana.scale=0.05;

  banana1=createSprite(700,200,20,20);
  banana1.addImage("banana",bananaImg);
  banana1.scale=0.05;

  banana2=createSprite(1000,200,20,20);
  banana2.addImage("banana",bananaImg);
  banana2.scale=0.05;
  
  banana3=createSprite(1300,200,20,20);
  banana3.addImage("banana",bananaImg);
  banana3.scale=0.05;
  
  banana.velocityX=-3;
  banana1.velocityX=-3;
  banana2.velocityX=-3;
  banana3.velocityX=-3;

  stone=createSprite(1500,300,20,20);
  stone.addImage("stone",obstacle);
  stone.scale=0.1;
  
  stone.velocityX=-3
}