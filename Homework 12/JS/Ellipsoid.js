class Ellipsoid extends DDD{

    constructor(x, y, spinX, spinY, spinZ, xradius, yradius, zradius, detail, looks){
        
        super(x, y, spinX, spinY, spinZ)
        this.xradius = xradius
        this.yradius = yradius
        this.zradius = zradius
        this.detail = detail
        this.looks = looks

    }

    draw(){
        push()

        texture(this.looks)

        super.moveShape()

        ellipsoid(this.xradius, this.yradius, this.zradius, this.detail, this.detail)

        pop()
    }
}