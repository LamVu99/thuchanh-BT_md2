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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.makeSound = function () {
        return "Tiger: roarrrrr!";
    };
    return Tiger;
}(Animal));
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chicken.prototype.makeSound = function () {
        return "Chicken: cluck-cluck!";
    };
    Chicken.prototype.howToEat = function () {
        return "Could be fried";
    };
    return Chicken;
}(Animal));
var animals = [];
animals[0] = new Tiger();
animals[1] = new Chicken();
animals.forEach(function (item, index) {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.log(item.howToEat());
    }
});
var Fruit = /** @class */ (function () {
    function Fruit() {
    }
    return Fruit;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apple.prototype.howToEat = function () {
        return "Apple could be slided";
    };
    return Apple;
}(Fruit));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Orange.prototype.howToEat = function () {
        return "Orange could be juiced";
    };
    return Orange;
}(Fruit));
console.log('------Fruits---------');
var fruit = [];
fruit[0] = new Apple();
fruit[1] = new Orange();
fruit.map(function (item, index) {
    console.log(item.howToEat());
});
