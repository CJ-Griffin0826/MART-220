var idlePaths = []
var myAnimation
var myRunAnimation
var runPaths = []
var grilledCheese
var brickWall
var goodCheese = []
var badFood = []
const particles = []

function preload(){
    //loading images
    idlePaths = loadStrings("data/idle.txt")
    runPaths = loadStrings("data/run.txt")
    
}

function setup(){
    createCanvas(800,600)
    //showing images
    myAnimation = new animationImage(200, 200, 150, 150)
    myAnimation.rotation = 0
    myAnimation.loadAnimation('idle', idlePaths)
    myAnimation.loadAnimation('run', runPaths)

    for (let i = 0; i < 5; i++) {
        let p = new Particle();
        particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
          // remove this particle
          particles.splice(i, 1);
        }
    }

    GC()

    BadFood()

    Borders()

}

function draw(){
    background(120)

    boyMovementCollision()

    grilledCheese.debug = mouseIsPressed
    
}

function boyMovementCollision(){
    if(kb.pressing('d')){
        myAnimation.updatePosition('forward')
        myAnimation.drawAnimation('run')
        
        //colliding with GrilledCheese

        //colliding with Brick Wall
        if(myAnimation.isColliding(brickWall)){
            myAnimation.drawAnimation('idle')
            myAnimation.updatePosition('idle')
        }
    }
    else if(kb.pressing('a')){
        myAnimation.updatePosition('reverse')
        myAnimation.drawAnimation('run')
    }
    else if(kb.pressing('s')){
        myAnimation.updatePosition('down')
        myAnimation.drawAnimation('run')
    }
    else if(kb.pressing('w')){
        myAnimation.updatePosition('up')
        myAnimation.drawAnimation('run')
    }
    else{
        myAnimation.drawAnimation('idle')
    }
}

function Borders(){
    //Brick Wall Left
    brickWall = createSprite(0, 0, 100, 100, 'static')
    brickWall.img = "Images/BrickWall.jpg"
    brickWall.scale.x = .02
    brickWall.scale.y = .8
    brickWall.width = 30
    brickWall.height = 2000
    
    //Brick Wall Top
    brickWall = createSprite(15, 5, 100, 100, 'static')
    brickWall.img = "Images/BrickWall.jpg"
    brickWall.scale.x = 1.1
    brickWall.scale.y = .01
    brickWall.width = 2000
    brickWall.height = 1500
    
    //Brick Wall Bottom
    brickWall = createSprite(600, 594, 100, 100, 'static')
    brickWall.img = "Images/BrickWall.jpg"
    brickWall.scale.x = 1.1
    brickWall.scale.y = .01
    brickWall.width = 2000
    brickWall.height = 1500
    
    //Brick wall Right
    brickWall = createSprite(795, 10, 100, 100, 'static')
    brickWall.img = "Images/BrickWall.jpg"
    brickWall.scale.x = .02
    brickWall.scale.y = .8
    brickWall.width = 30
    brickWall.height = 2000
}

function GC(){
    for(let i = 0; i < 5 ; i++){
        grilledCheese = createSprite(random(40,760), random(40,560), 100, 100, 'static')
        grilledCheese.img = "Images/GrilledCheese.png"
        grilledCheese.scale = .2
        grilledCheese.width = 60
        grilledCheese.height = 40
        goodCheese.push(grilledCheese)
    }
}

function BadFood(){
    for(let i = 0; i < 5 ; i++){
        grilledCheese = createSprite(random(40,760), random(40,560), 100, 100, 'static')
        grilledCheese.img = "Images/EVIL_Brussle_Sprout.png"
        grilledCheese.scale = .1
        grilledCheese.width = 50
        grilledCheese.height = 50
        badFood.push(grilledCheese)
        
    }
}