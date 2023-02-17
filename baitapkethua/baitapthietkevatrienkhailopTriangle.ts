class Shape {
    private _name: string;
    private _color: string;

    constructor(name: string, color: string) {
        this._name = name;
        this._color = color;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
class Triangle extends Shape {
    private _side1: number;
    private _side2: number;
    private _side3: number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }


    get side1(): number {
        return this._side1;
    }

    set side1(value: number) {
        this._side1 = value;
    }

    get side2(): number {
        return this._side2;
    }

    set side2(value: number) {
        this._side2 = value;
    }

    get side3(): number {
        return this._side3;
    }

    set side3(value: number) {
        this._side3 = value;
    }
    checkingTriangle():boolean {
        return (this.side1 + this.side2) > this.side3 &&
            (this.side1 + this.side3) > this.side2 &&
            (this.side3 + this.side2) > this.side1;
    }
   getPerimetter() {
        if (this.checkingTriangle()) {
            return this.side1 + this.side2 + this.side3
        } else {
            return -1;
        }
    }
    getArea() {
        if (this.checkingTriangle()) {
            let p1 = this.getPerimetter() / 2
            return Math.sqrt((p1 * (p1 - this.side1) * (p1 - this.side2) * (p1 - this.side3)))
        } else {
            return `error!`
        }
    }
}
let p1 = new Triangle('hinhtron','vang',5,5,5)
console.log(p1.getPerimetter())
console.log(p1.getArea())