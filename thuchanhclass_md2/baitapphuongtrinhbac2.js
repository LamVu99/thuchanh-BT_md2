class QuadraticEquation{
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminant(){
        let delta = this.b*this.b - 4 * this.a * this.c;
        return delta;
    }
    calculation() {
        if (this.getDiscriminant() < 0) {
            return `pt vo nghiem`;
        } else if (this.getDiscriminant() === 0) {
            return `pt co nghiem kep x1 = x2 =  ${-this.b / 2 * this.a}`;
        } else if (this.getDiscriminant() > 0) {
            return `pt co 2 nghiem la: x1 = ${this.getRoot1()} va x2 = ${this.getRoot2()}`
        }
    }
    getRoot1(){
       let x1 = (-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
       return x1;
    }
    getRoot2(){
       let x2 = (-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
       return x2;
    }
}
let p1 = new QuadraticEquation(3,-5,3);
let p2 = new QuadraticEquation(1,-11,30);
console.log(p1.calculation());
console.log(p2.calculation());