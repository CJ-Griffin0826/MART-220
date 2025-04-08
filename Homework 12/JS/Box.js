class Box extends DDD{ //Connects this to the Shape Creator
    
    //Retrieves variables from P5Sketch.js
    constructor(x, y, spinX, spinY, spinZ, width, height, depth, looks){
        
        super(x, y, spinX, spinY, spinZ) //Gives DDD the variables
        this.width = width
        this.height = height
        this.depth = depth
        this.looks = looks
    
    }
    
    draw(){
        push()

        texture(this.looks)
        
        super.moveShape() //Use super to call on DDD


        box(this.width, this.height, this.depth)
        
        pop()
    }
}