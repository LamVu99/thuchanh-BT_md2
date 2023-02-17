var circle = /** @class */ (function () {
    function circle(radius) {
        this.radius = radius;
    }
    circle.prototype.resize = function (rate) {
        "old: ".concat(this.radius, " \n        new: ").concat(this.radius * rate / 100);
    };
    return circle;
}());
var rectangle = /** @class */ (function () {
    function rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    rectangle.prototype.resize = function (rate) {
        return "oldwidth: ".concat(this.width, ", oldheight: ").concat(this.height, "\nnewWidth: ").concat(this.width * rate / 100, ", newHeight ").concat(this.height * rate / 100, "\n");
    };
    return rectangle;
}());
var square = /** @class */ (function () {
    function square(side) {
        this.side = side;
    }
    square.prototype.resize = function (rate) {
        return "old: ".concat(this.side, " \n        new: ").concat(this.side * rate / 100);
    };
    return square;
}());
var elements = [];
elements[0] = new circle(20);
elements[1] = new rectangle(22, 33);
elements[2] = new square(44);
console.log("A Circle: " + elements[0].resize(70));
console.log("B Rectangle: " + elements[1].resize(80));
console.log("C Square: " + elements[2].resize(100));
