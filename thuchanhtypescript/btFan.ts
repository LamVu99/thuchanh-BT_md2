enum Level {
    SLOW = 1,
    MEDIUM = 2,
    FAST = 3
}

class Fan {
    private on: boolean = false;
    private radius: number = 5;
    private color: string = 'blue';
    private speed: Level = Level.SLOW;

    constructor(speed: Level, on: boolean, radius: number, color: string) {
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
    }
    getSpeed(speed: Level) {
        return this.speed;
    }
    setSpeed(speed: Level): void {
        this.speed = speed;
    }
    getOn(on: boolean) {
        return this.on;
    }
    setOn(on: boolean): void {
        this.on = on;
    }
    getRadius(radius: number) {
        return this.radius;
    }
    setRadius(radius:number): void {
        this.radius = radius;
    }
    getColor(color: string) {
        return this.color
    }
    setColor(color: string): void {
        this.color = color;
    }
    toString() {
        if (this.on === true) {
            return `speed: ${this.speed} color: ${this.color} radius: ${this.radius} fan is on`
        } else {
            return `color: ${this.color} radius: ${this.radius} fan is off`
        }
    }
}
let p1 = new Fan(Level.FAST, true, 10, 'yellow')
let p2 = new Fan(Level.SLOW, false, 10, 'blue')
console.log(p1.toString())
console.log(p2.toString())
p1.setColor('green')
p2.setRadius(20)
let a1 = p1
let a2 = p2
console.log(p1.toString(),p2.toString())
let f1: Fan[] = [];
f1.push(p1,p2,a1,a2)
f1.map((fan) => {
    console.log(fan.toString())
})