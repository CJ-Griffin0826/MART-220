class Torus extends DDD{

    constructor(x, y, spinX, spinY, spinZ, radiusI, radiusO, detail, looks){
        
        super(x, y, spinX, spinY, spinZ)
        this.radiusI = radiusI
        this.radiusO = radiusO
        this.detail = detail
        this.looks = looks

    }

    draw(){
        push()

        texture(this.looks)

        super.moveShape()

        torus(this.radiusI, this.radiusO, this.detail, this.detail)

        pop()
    }
}