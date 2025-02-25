class Soup{


    // constructor
    constructor(x, y){
        
        this.x = x
        this.y = y
    
    }


    draw(){
        
        fill(255,255,255);
        circle(this.x,this.y,140);
        
        fill(200,0,0);
        circle(this.x,this.y,100);
    
    }

}