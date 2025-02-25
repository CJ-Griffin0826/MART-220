class Soup{


    // constructor
    constructor(fileName, x, y, w, h){
        this.fileName = fileName
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.Soup = this.loadSoup()
    }

    loadSoup(){
        return loadImage(this.fileName)
    }

    drawAnimation(){
        image(this.boy, this.x, this.y, this.w, this.h)
    }

}