var rBread = (245)
var gBread = (224)
var bBread = (193)

//Burnt Bread rgb(30, 20, 10)

var rCheese = (255)
var gCheese = (166)
var bCheese = (0)

//Burnt Cheese rgb(120, 60, 0)

var i = 300

var yBowl = i
var xBowl = i

var Soup = 100

function setup() {
  createCanvas(400, 400);
  xBowl+=random(40)
  yBowl+=random(40)
}

function draw() {
  background(220);
  
  //Text
  textSize(20);
  textAlign(RIGHT, TOP)
  text("Grill The Cheese! (Press c)", width - 10, 10)

  textAlign(LEFT, BOTTOM)
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