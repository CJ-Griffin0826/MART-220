class character{


    // constructor
    constructor(fileName, x, y, w, h){
        this.fileName = fileName
        this.x = x
        this.y = y
        this.w = 150
        this.h = 200
        this.boy = this.loadAnimation()
    }

    loadAnimation(){
        return loadImage(this.fileName)
    }

    drawBoy(){
        image(this.boy, this.x, this.y, this.w, this.h)
    }

    hasCollided(x2, y2, w2, h2){
        return(
            this.x < x2 + w2 &&
            this.x + this.imageWidth > x2 &&
            this.y < y2 + h2 &&
            this.y + this.imageHeight > y2
        )
    }

}