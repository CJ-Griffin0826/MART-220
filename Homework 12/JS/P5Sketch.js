var shape1, shape2, shape3, shape4, shape5
var img1, img2, img3, img4, img5
var font

function preload(){
    
    img1 = loadImage("Images/Michael.webp")
    img2 = loadImage("Images/GangsterBob.png")
    img3 = loadImage("Images/Guy.webp")
    img4 = loadImage("Images/Bingus.webp")
    img5 = loadImage("Images/Loaf_Cat.png")

    font = loadFont('Fonts/NewRocker-Regular.ttf')

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

    push()

    rotateX(frameCount * -.1)
    rotateY(frameCount * .1)
    rotateZ(frameCount * .2)
    fill('#ED225D')
    textFont(font)
    textSize(36)
    text("Cool Pictures I Found", -350, -350)

    pop()

    push()

    rotateX(frameCount * -.2)
    rotateY(frameCount * -.2)
    rotateZ(frameCount * -.1)
    fill('#ED225D')
    textFont(font)
    textSize(36)
    text("CJ Griffin", -350, 350)

    pop()

}