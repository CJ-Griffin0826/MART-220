var rBread = (245)
var gBread = (224)
var bBread = (193)

//Burnt Bread rgb(30, 20, 10)

var rCheese = (255)
var gCheese = (166)
var bCheese = (0)

//Burnt Cheese rgb(120, 60, 0)

var yBowl = 300
var xBowl = 300

var Soup = 100

//Setting Up The Image

let img;
let img2;
let img3;

//Setting up moving image

var Ix = 280
var Is = 300

var Es = 265
var Ex = 200
var Ey = 100

//Setting up Font

let myFont;

//Setting Up a Timer

var timerValue = 20
var startButton;

// Boy

var myImage
var myAnimation
var animations = []
var i = 0

//Loading Everything

function preload(){
  img = loadImage('Images/Grilled_Cheese.jpg')
  img2 = loadImage('Images/PG_Eating_GC.webp')
  img3 = loadImage('Images/GC.jpg')
  myFont = loadFont('Fonts/NewRocker-Regular.ttf')
  setInterval(timeIt, 1000)
}

function setup() {
  createCanvas(600, 400);
  
  xBowl+=random(40)
  yBowl+=random(40)

  myAnimation = new animationImages("./images/Idle (1).png", 230, 140, 150, 120)
  animations[0] = myAnimation 
  myAnimation = new animationImages("./images/Idle (2).png", 230, 140, 150, 120)
  animations[1] = myAnimation 
  myAnimation = new animationImages("./images/Idle (3).png", 230, 140, 150, 120)
  animations[2] = myAnimation 
  myAnimation = new animationImages("./images/Idle (4).png", 230, 140, 150, 120)
  animations[3] = myAnimation 
  myAnimation = new animationImages("./images/Idle (5).png", 230, 140, 150, 120)
  animations[4] = myAnimation
  myAnimation = new animationImages("./images/Idle (6).png", 230, 140, 150, 120)
  animations[5] = myAnimation 
  myAnimation = new animationImages("./images/Idle (7).png", 230, 140, 150, 120)
  animations[6] = myAnimation 
  myAnimation = new animationImages("./images/Idle (8).png", 230, 140, 150, 120)
  animations[7] = myAnimation
  myAnimation = new animationImages("./images/Idle (9).png", 230, 140, 150, 120)
  animations[8] = myAnimation 
  myAnimation = new animationImages("./images/Idle (10).png", 230, 140, 150, 120)
  animations[9] = myAnimation  

  //Animation Timer
  setInterval(incrementIdleIndex, 70)
}

function draw() {
  background(220);

  //Timer
  if (timerValue >= 10) {
    text("0:" + timerValue, 10, 30);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, 10, 30);
  }
  if (timerValue == 0){
    Es -= 2
    Ex += 2
    Ey += 2
  }

  //Image
  tint(255, 153, 204)
  image(img, 10, Es, Ex, Ey);
  noTint();
  image(img2, Is, 40, Ix, 100);
  image(img3, 400, 150, 180, 200);

  if (Is <= 300 ){
    Is -= .2
    Ix += .4
  }

  
  //Text
  textSize(20);
  textAlign(RIGHT, TOP)
  textFont(myFont)
  text("Grill The Cheese! (Press c)", width - 10, 10)

  textAlign(LEFT, BOTTOM)
  textFont(myFont)
  text("CJ Griffin", 10, height - 10)

  //Cheese
  
  fill(rCheese, gCheese, bCheese);
  rect(30,55,220,190);
  rect(45,40,190,220);
  
  //Bread
  
  fill(rBread, gBread, bBread);
  square(40,50,200,);

  if (keyIsDown(67) && rBread >  30 && gBread > 20 && bBread > 10) { 
  rBread -= 2;
  gBread -= 2.1;
  bBread -= 2;
  }

  if (keyIsDown(67) && rCheese >  120 && gCheese > 60) { 
    rCheese -= 1.3;
    gCheese -= 1;
  }

  //Animation
//for(var i = 0; i < animations.length; i++){
  animations[i].drawAnimation()
//}

  //Bowl
  
  fill(255,255,255);
  circle(yBowl,xBowl,140);
  
  //Soup

  fill(200,0,0);
  circle(yBowl,xBowl,Soup);
  
  //Cook Lines

  fill(0,0,0)
  line(50,240,230,60)
  line(50,140,140,60)
  line(150,240,230,160)
}

function mouseClicked() {
  if (Soup > 0) {
    Soup -= 1
  }  
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

function incrementIdleIndex(){
  i++;
  if(i >= animations.length){
  i = 0
  }
}