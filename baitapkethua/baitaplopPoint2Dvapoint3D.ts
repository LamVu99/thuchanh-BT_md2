class Point2D {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    getxy(): object {
        return {x: this.x, y: this.y}
    }

    setxy(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
}

let p1 = new Point2D(1, 2)

p1.setxy(3,4)
console.log(p1.getxy())

class Point3D extends Point2D{
    private _z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }
    getxyz(): object {
        return {x: this.x,y: this.y,z: this.z}
    }
    setxyz(x:number,y:number,z:number): void {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
let p2 = new Point3D(1,2,3)
p2.setxyz(4,4,4)
console.log(p2.getxyz())