var bgImg, bg, ground
var spidermanimg, spiderman, spidermanJumpimg


function preload(){
 bgImg = loadAnimation("bg2.gif")
 spidermanimg = loadAnimation("spiderman.gif")
  spidermanJumpimg = loadAnimation("jump.gif")
}

function setup(){
  createCanvas(700,300)
  bg = createSprite(350,150)
  bg.addAnimation("moving", bgImg)
  bg.scale = 1.4

  spiderman = createSprite(45,220, 10,10)
  spiderman.addAnimation("running", spidermanimg)
  spiderman.scale = .4

  ground = createSprite(350,290, 700, 20)
  ground.visible = false
}

function draw(){
  background("blue")

  if(keyDown("space")){
    spiderman.velocityY = -10
  }
  spiderman.velocityY = spiderman.velocityY +.8
  spiderman.collide(ground)
  drawSprites()
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}