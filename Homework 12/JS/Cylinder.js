class Cylinder extends DDD{

    constructor(x, y, spinX, spinY, spinZ, radius, height, detail, ifOpen, looks){
        
        super(x, y, spinX, spinY, spinZ)
        this.radius = radius
        this.height = height
        this.detail = detail
        this.ifOpen = ifOpen
        this.looks = looks

    }

    draw(){
        push()

        texture(this.looks)

        super.moveShape()

        cylinder(this.radius, this.height, this.detail, this.detail, this.ifOpen, this.ifOpen)

        pop()
    }
}