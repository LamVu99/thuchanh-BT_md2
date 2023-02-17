interface Resezeable {
    resize(rate: number): any
}

class circle implements Resezeable {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    resize(rate: number) {
        return `old: ${this.radius} new: ${this.radius * rate / 100}`
    }
}

class rectangle implements Resezeable {
    width: number;
    height: number;

    constructor(width: number,
                height: number,) {
        this.width = width;
        this.height = height;
    }

    resize(rate: number) {
return `oldwidth: ${this.width}, oldheight: ${this.height}
newWidth: ${this.width * rate / 100}, newHeight ${this.height * rate / 100}
`
    }
}
class square implements Resezeable {
    side: number

    constructor(side: number) {
        this.side = side;
    }

    resize(rate: number) {
        return `old: ${this.side} 
        new: ${this.side * rate/100}`
    }

}

let elements = [];
elements[0] = new circle(20);
elements[1] = new rectangle(22, 33);
elements[2] = new square(44)

console.log("A Circle: " + elements[0].resize(70))
console.log("B Rectangle: " + elements[1].resize(80))
console.log("C Square: " + elements[2].resize(100))
