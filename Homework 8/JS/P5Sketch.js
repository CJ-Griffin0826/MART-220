//Character
var idlePaths = []
var myAnimation
var myRunAnimation
var runPaths = []

//Obsticals / Collectables
var grilledCheese
var brickWall
var goodCheese = []
var bussle
var badFood = []

//Score
var score = 0
var i = 0

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

    GC()

    BadFood()

    Borders()

}

function draw(){
    background(120)

    textAlign(LEFT, TOP)
    textSize(20)
    text("Score:" + score, 15, 15)

    boyMovementCollision()

    grilledCheese.debug = mouseIsPressed
    
}

function boyMovementCollision(){
    if(kb.pressing('d')){
        myAnimation.updatePosition('forward')
        myAnimation.drawAnimation('run')

        myAnimation.isColliding(grilledCheese, collect)

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

    for(let i = 0; i <= 5; i++){
        grilledCheese = new Group()
        grilledCheese.img = "Images/GrilledCheese.png"
        grilledCheese.scale = .2
        grilledCheese.width = 270
        grilledCheese.height = 210
        grilledCheese.x = random(15, canvas.w - 15)
        grilledCheese.y = random(15, canvas.h - 15)
        grilledCheese.amount = 1
    }
}

function BadFood(){
    for(let i = 0; i < 3 ; i++){
        bussle = createSprite(random(40,760), random(40,560), 100, 100, 'static')
        bussle.img = "Images/EVIL_Brussle_Sprout.png"
        bussle.scale = .1
        bussle.width = 50
        bussle.height = 50
        badFood.push(bussle)
        
    }
}

function collect(myAnimation, grilledCheese){
    grilledCheese.remove()
    score++
}
