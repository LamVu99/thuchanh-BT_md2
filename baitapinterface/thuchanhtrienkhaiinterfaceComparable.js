var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.toString = function () {
        return "A Circle with radius="
            + this.getRadius();
    };
    return Circle;
}());
var ComparableCircle = /** @class */ (function (_super) {
    __extends(ComparableCircle, _super);
    function ComparableCircle(radius) {
        return _super.call(this, radius) || this;
    }
    ComparableCircle.prototype.compareTo = function (o) {
        if (this.getRadius() > o.getRadius())
            return 1;
        else if (this.getRadius() < o.getRadius())
            return -1;
        else
            return 1;
    };
    return ComparableCircle;
}(Circle));
var circles = [];
circles[0] = new ComparableCircle(10);
circles[1] = new ComparableCircle(20);
circles[2] = new ComparableCircle(30);
var result = circles[1].compareTo(circles[2]);
if (result == 1) {
    console.log("The current circle is larger.");
}
else {
    console.log("The current circle is smaller.");
}
