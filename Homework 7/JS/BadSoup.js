class badSoup{


    // constructor
    constructor(x, y){
        
        this.x = x
        this.y = y
    
    }

    draw(){
        
        fill(255,255,255);
        circle(this.x,this.y,50);
        
        fill(0,200,0);
        circle(this.x,this.y,30);
    
    }

}