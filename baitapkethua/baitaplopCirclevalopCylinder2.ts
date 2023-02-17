import {Circle} from './baitaplopCirclevalopCylinder'
let p1 = new Circle(3, 'vang');
let p2 = new Circle(5,'do');
console.log(p2.tinhdientich())
export class Cylinder extends Circle {
    private _height: number;

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }
    public tinhthetich() {
        return 'V Cylinder la: ' + this.height * 2 * this.radius * 3.14
    }
}
let p3 = new Cylinder(3, 'vang', 20);
console.log(p3)
console.log(p3.tinhthetich())