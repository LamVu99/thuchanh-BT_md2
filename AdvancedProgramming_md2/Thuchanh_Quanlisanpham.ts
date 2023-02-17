class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    get getName(): string {
        return this.name
    }

    set setName(name: string) {
        this.name = name;
    }

    get getPrice(): number {
        return this.price
    }

    set setPrice(price: number) {
        this.price = price
    }
}

class productManager {
    private _products: Product[] = []

    constructor() {
    }

    get getList() {
        return this._products;
    }


    set products(value: Product[]) {
        this._products = value;
    }

    set add(product: Product) {
        this._products.push(product)
    }
}

let p1 = new Product('laptop', 2000);
let p2 = new Product('iphone', 3500);
let productmanager = new productManager()
productmanager.add = p1
productmanager.add = p2
console.log(productmanager.getList)
