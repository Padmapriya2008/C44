var PLAY = 1;
var END = 0;
var gameState = PLAY;

var girl, girlWalking;
var obstacle1, obstacle2, obstacle3, obstacle4;
var obstacle1Img, obstacle2Img, obstacle3Img, obstacle4Img;
var foodImg, campfireImg;
var wolf, wolfImg;
var bgMorning,bgNight;

function preload() {
  obstacle1Img=loadImage("../images/obstacle1.png");
  //obstacle2Img=loadImage("../images/obstacle2.");
  //obstacle3Img=loadImage("../images/obstacle3.");
  //obstacle4Img=loadImage("../images/obstacle4.");

  bgMorning=loadImage("../images/bg 1 forest.jpg");

  girlWalking=loadAnimation("../images/1 girl.png","../images/2 girl.png");
}

function setup() {
   bg = createSprite(0,height/2,width,height);
  bg.addImage("morning",bgMorning);

  girl = createSprite(width/6, height/2+250, 50, 50);
  girl.addAnimation("girlWalking",girlWalking);
  
  tent = createSprite(width-200,height/2+250,50,50);
  tent.addImage("tent",tentImg);
  tent.visible= false;

  campfire = createSprite(600,200,50,50);
  campfire.addImage("camfire",campfireImg);
  campfire.visible= false;
  
  score = 0;

}