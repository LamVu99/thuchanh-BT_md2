import {Rectangle} from "./Thuchanhhecacdoituonghinhhoc3";


let rectangle: Rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());

export class Square extends Rectangle {

    constructor(side: number, color: string, filled: boolean) {
        super(side, side, color, filled);
    }

    public getSide(): number {
        return this.getWidth();
    }

    public setSide(side: number): void {
        this.setWidth(side);
        this.setLength(side);
    }

    //Override method
    public setWidth(width: number): void {
        this.setSide(width);
    }

    //Override method
    public setLength(length: number): void {
        this.setSide(length);
    }

    //Override method
    public toString(): string {
        return "A Square with side="
            + this.getSide()
            + ", which is a subclass of "
            + super.toString();
    }
}