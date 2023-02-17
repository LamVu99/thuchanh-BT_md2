interface colorable {
    howtocolor(): string
}

class square implements colorable {
    side: number;
    constructor(side: number) {
        this.side = side;
    }
    howtocolor(): string {
        return 'color all four sides'
    }
    dientich(): number {
        return this.side * this.side
    }
}
class rectangle {
    width: number;
    height: number;

    constructor(width: number,
                height: number,) {
        this.width = width;
        this.height = height;
    }
    dientich(): number {
        return this.width * this.height;
    }
}
class circle {
    radius:number;

    constructor(radius: number) {
        this.radius = radius;
    }
    dientich(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let Geometry = []
Geometry[0] = new circle(5);
Geometry[1] = new rectangle(5,7);
Geometry[2] = new square(5);
Geometry.map((item) => {
    console.log(`Dien tich: ${item.dientich()}`)
    if (item instanceof square) {
        console.log(item.howtocolor())
    }
})
