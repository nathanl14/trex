
var trex ,trex_running;
var ground,groundimage;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
groundimage=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(45,160,20,20);
 trex.addAnimation("trex",trex_running)
 trex.scale=0.5

 ground=createSprite(1,190,1200,10)
 ground.addImage("ground",groundimage)
ground2=createSprite(1,195,1200,10)
ground2.visible=false
}

function draw(){
  background(180)
  ground.velocityX=-6
console.log(trex.y)

if (keyDown(UP_ARROW)){
  trex.velocityY=-5
}
if (ground.x<0){
  ground.x=ground.width/2
}

trex.velocityY+=0.5
trex.collide(ground2)
drawSprites()
}
