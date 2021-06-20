var iss,issImg;
var bg;
var spacecraft,craftImg;
var c2,c3,c4;
var jP1,jp2;
function preload(){
issImg = loadImage("iss.png")
bg = loadImage("spacebg.jpg")
craftImg = loadImage("spacecraft1.png")
c2 = loadImage("spacecraft2.png")
c3 = loadImage("spacecraft3.png")
c4 = loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(1000,650);
  
  spacecraft = createSprite(300,400,50,50)
 spacecraft.addImage(craftImg);
 spacecraft.scale= 0.4
 iss = createSprite(500, 300, 50, 50);
 iss.addImage(issImg)
 jp1=createSprite(435,330,20,20) 
 jp2 = createSprite(300,200,20,20)
 jp2.shapeColor = "red"
 
}

function draw() {
  background(bg);
  jp1.visible = false
  jp2.visible = false
  jp2.x=spacecraft.x
 jp2.y=spacecraft.y-72
  if(keyIsDown(UP_ARROW)){
    spacecraft.y = spacecraft.y-4
    spacecraft.addImage(c2)
    c2.scale=0.10
    jp2.x=spacecraft.x
    jp2.y=spacecraft.y-122
  }
  if(keyWentUp(UP_ARROW)) {
    spacecraft.addImage(craftImg)
  } 
  if(keyIsDown(DOWN_ARROW)){
    spacecraft.y = spacecraft.y+4
    spacecraft.addImage(c2)
    c2.scale=0.10
    jp2.x=spacecraft.x
    jp2.y=spacecraft.y-122
  }
  if(keyWentUp(DOWN_ARROW)) {
    spacecraft.addImage(craftImg)
  } 
  if(keyIsDown(RIGHT_ARROW)){
    spacecraft.x = spacecraft.x+4
    spacecraft.addImage(c3)
    c3.scale = 0.10
    jp2.x=spacecraft.x
    jp2.y=spacecraft.y-122
  }
  if(keyWentUp(RIGHT_ARROW)) {
    spacecraft.addImage(craftImg)
  } 
  if(keyIsDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x-4
    spacecraft.addImage(c4)
    c4.scale = 0.10
    jp2.x=spacecraft.x
    jp2.y=spacecraft.y-122
  }
  if(keyWentUp(LEFT_ARROW)) {
    spacecraft.addImage(craftImg)
  } 
  if(isColliding(jp1,jp2)){
    textSize(100)
    textFont("algerian")
    fill ("red")
    text("mission accomplished",20,400)
    textSize(50)
    textFont("algerian")
    text("*refresh the window to replay*",100,500)
    spacecraft.visible = false
    iss.visible = false
    spacecraft.x = 435;
    spacecraft.y = 330+72;
    spacecraft = isStatic;
    
}
  
  drawSprites();
}
function isColliding(object1,object2){
  // collision Algorithm of 2 boxes and everytime colour changes randomnly on collision
  if(object1.x-object2.x<=object1.width/2+object2.width/2&&
    object2.x-object1.x<=object1.width/2+object2.width/2&&
    object1.y-object2.y<=object1.height/2+object2.height/2&&
    object2.y-object1.y<=object1.height/2+object2.height/2 ){
      return true
    }
    else{
      return false
    }
   
  }

