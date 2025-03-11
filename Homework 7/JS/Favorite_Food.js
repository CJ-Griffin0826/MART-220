var rBread = (245)
var gBread = (224)
var bBread = (193)

//Burnt Bread rgb(30, 20, 10)

var rCheese = (255)
var gCheese = (166)
var bCheese = (0)

//Burnt Cheese rgb(120, 60, 0)

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

//Score
var Score = 0

// Boy
var myBoy
var myBoy1
var animation = []
var runAnimation = []
var i = 0
var animS = []

//Setting up Soup

var mySoup
var foodArray = []
var foodFound = false
var myBadSoup
var foodArray2 = []
var badFoodFound = false

//Setting up Sounds

var goodSoupSound
var badSoupSound
var backgroundMusic

//Setting up Strings

var idleStrings = []
var runStrings = []

// Setting up movement

var x = 230
var y = 140
var flipX = false

// Food Moving Randomly

var countDown = 60
var countDownInterval

//Loading Everything

function preload(){
  img = loadImage('Images/Grilled_Cheese.jpg')
  img2 = loadImage('Images/PG_Eating_GC.webp')
  img3 = loadImage('Images/GC.jpg')
  myFont = loadFont('Fonts/NewRocker-Regular.ttf')
  setInterval(timeIt, 1000)

  idleStrings = loadStrings("data/idle.txt")
  runStrings = loadStrings("data/run.txt")

  backgroundMusic = loadSound("Sounds/Sunrise&OnettTheme.mp3")
  goodSoupSound = loadSound("Sounds/yippee.mp3")
  badSoupSound = loadSound("Sounds/boowomp.mp3")

}

function setup() {
  createCanvas(600, 400);

  backgroundMusic.play()

  setupBoy()

  setupAnimationTimer()

  setupSoup()

  setupBadSoup()

}

function draw() {
  background(220);

  makeTimer()

  makeImages()

  makeText()

  makeSandwich()

  makeGoodSoup()

  makeBadSoup()

  makeBoyMoveAndCollision()

}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

function updateIndex() {
  i++;
  if (i > idleStrings.length-3) {
      i = 0;
  }

}

function updateCountDown(){
  countDown--
  if(countDown == 0){
    clearInterval(countDownInterval)
  }
}

function replayAnimation(){
  animS.reset()
}

function makeSandwich(){
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

  fill(0,0,0)
  line(50,240,230,60)
  line(50,140,140,60)
  line(150,240,230,160)
}

function makeGoodSoup(){
  for (let i = 0; i < foodArray.length; i++) {
    foodArray[i].draw();
  }
}

function makeBadSoup(){
  for(let i = 0; i < foodArray2.length; i++){
    foodArray2[i].draw()
  }
}

function makeBoyMoveAndCollision(){
  if (keyIsPressed){
    runAnimation[i].draw()
    if (key == "a"){
      x--;
      flipX = true
    }
    if (key == "d"){
      x++;
      flipX = false
    }
    if (key == "w"){
      y--;
    }
    if (key == "s"){
      y++;
    }
  
    for (let i = 0; i < idleStrings.length; i++){
      animation[i].flipX = flipX
      animation[i].x = x
      animation[i].y = y
      runAnimation[i].flipX = flipX
      runAnimation[i].x = x
      runAnimation[i].y = y
    }

    for (let k = 0; k < foodArray.length; k++){
      if(animation[i].hasCollided(foodArray[k].x, foodArray[k].y, 10, 10)){
        foodArray.splice(k, 1)
        Score ++
        goodSoupSound.play()
      }
      else if(timerValue <= 0){
        foodArray.splice(k, 5)
      }
    }
    
    for (let k = 0; k < foodArray2.length; k++){
      if(animation[i].hasCollided(foodArray2[k].x, foodArray2[k].y, 10, 10)){
        foodArray2.splice(k, 1)
        Score --
        badSoupSound.play()
      }
      else if(timerValue <= 0){
        foodArray2.splice(k, 5)
      }
    }
  
  }
  else{
    animation[i].draw()
  }
}

function makeText(){
  textSize(20);
  fill(0, 0, 0)
  textAlign(RIGHT, TOP)
  textFont(myFont)
  text("Grill The Cheese! (Press c)", width - 10, 10)

  textAlign(LEFT, BOTTOM)
  textFont(myFont)
  text("CJ Griffin", 10, height - 10)

  textAlign(RIGHT, BOTTOM)
  textFont(myFont)
  text("Score:" + Score, width - 10, height - 10)
}

function makeImages(){
  tint(255, 153, 204)
  image(img, 10, Es, Ex, Ey);
  noTint();
  image(img2, Is, 40, Ix, 100);
  image(img3, 400, 150, 180, 200);

  if (Is <= 300 ){
    Is -= .2
    Ix += .4
  }
}

function makeTimer(){
  fill(0, 0, 0)
  textAlign(LEFT, TOP)
  if (timerValue >= 10) {
    text("0:" + timerValue, 10, 10);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, 10, 10);
  }
  if (timerValue == 0){
    Es -= 2
    Ex += 2
    Ey += 2
  }
}

function setupAnimationTimer(){
  setInterval(updateIndex, 70)
  countDownInterval = setInterval(updateCountDown, 1000)
  setInterval(replayAnimation, 2000)
}

function setupSoup(){
  for(let i = 0; i < 5; i++){
    mySoup = new Soup(random(100, 600), random(100, 400), 10);
    foodArray.push(mySoup);
  }
}

function setupBadSoup(){
  for(let i = 0; i < 5 ; i++){
    myBadSoup = new badSoup(random(100,600), random(100,400), 10)
    foodArray2.push(myBadSoup)
  }
}

function setupBoy(){
  for(let i = 0; i < idleStrings.length; i++){
    myBoy = new character(idleStrings[i], x, y)
    animation.push(myBoy)

    myBoy = new character(runStrings[i], x, y)
    runAnimation.push(myBoy)
  }
}