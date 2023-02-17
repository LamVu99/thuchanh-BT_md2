interface Edible
{
    howToEat(): string;
}
abstract class Animal {
    abstract makeSound();
}

class Tiger extends Animal {
    makeSound(): string {
        return "Tiger: roarrrrr!";
    }
}

class Chicken extends Animal {
    makeSound(): string {
        return "Chicken: cluck-cluck!";
    }
    howToEat(): string {
        return "Could be fried";
    }
}

let animals = []
animals[0] = new Tiger();
animals[1] = new Chicken();
animals.forEach((item, index) => {
    console.log(item.makeSound())
    if (item instanceof Chicken) {
        console.log(item.howToEat())
    }
})
abstract class Fruit implements Edible
{
    abstract howToEat(): string;
}
class Apple extends Fruit {
    howToEat(): string {
        return "Apple could be slided";
    }
}
class Orange extends Fruit {
    howToEat(): string {
        return "Orange could be juiced";
    }
}
console.log('------Fruits---------')
let fruit: Fruit[] = []
fruit[0] = new Apple()
fruit[1] = new Orange()
fruit.map((item, index) => {
    console.log(item.howToEat())
})