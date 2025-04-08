var shape1, shape2, shape3, shape4, shape5
var img1, img2, img3, img4, img5

function preload(){
    
    img1 = loadImage("Images/Michael.webp")
    img2 = loadImage("Images/GangsterBob.png")
    img3 = loadImage("Images/Guy.webp")
    img4 = loadImage("Images/Bingus.webp")
    img5 = loadImage("Images/Loaf_Cat.png")

}

function setup(){

    createCanvas(800, 800, WEBGL)

    shape1 = new Box(random(-350,350), random(-350,350), random(0,2), random(0,2), random(0,2), random(10,150), random(10,150), random(10,150), img1)
    shape2 = new Cone(random(-350,350), random(-350,350), random(0,2), random(0,2), random(0,2), random(10,300), random(10,150), 24, false, img2)
    shape3 = new Cylinder(random(-350,350), random(-350,350), random(0,2), random(0,2), random(0,2), random(10,300), random(10,150), 24, false, img3)
    shape4 = new Ellipsoid(random(-350,350), random(-350,350), random(0,2), random(0,2), random(0,2), random(10,50), random(50,300), random(25,75), 100, img4)
    shape5 = new Torus(random(-350,350), random(-350,350), random(0,2), random(0,2), random(0,2), random(50,300), random(10,100), 24, img5)

}

function draw(){
    background(200)

    shape1.draw()
    shape2.draw()
    shape3.draw()
    shape4.draw()
    shape5.draw()

    textSize(100);
    textAlign(LEFT, TOP)
    text("Cool Shapes", width/2, height/2)

}