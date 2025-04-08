class DDD{
    
    //Retrieves variables from SHAPE.js
    constructor(x, y, spinX, spinY, spinZ){
        this.x = x
        this.y = y
        this.spinX = spinX
        this.spinY = spinY
        this.spinZ = spinZ
    }

    //Inputs retrieved variables to make shape move and determine its placement on the canvas
    moveShape(){
        translate(this.x, this.y)
        rotateX(frameCount * this.spinX)
        rotateY(frameCount * this.spinY)
        rotateZ(frameCount * this.spinZ)
    }
}