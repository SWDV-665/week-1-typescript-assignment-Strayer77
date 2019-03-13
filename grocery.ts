class Grocery {
    groceryDescription: string;

    //constructor
    constructor(public name: string, public quantity: number, public pricePerUnit: number, public productCategory: string) {
        this.groceryDescription = name + ", " + quantity + ", " + pricePerUnit + ", " + productCategory;
    }
}

let Bananas = new Grocery("Bananas", 1, 3.99, "Produce");
let Bread = new Grocery("Bread", 1, 2.50, "Bakery");
let Milk = new Grocery("Milk", 1, 3.50, "Dairy");
let Rice = new Grocery("Rice", 1, 6.99, "Grains");

let Groceries = [Bananas.groceryDescription, Bread.groceryDescription, Milk.groceryDescription, Rice.groceryDescription];


document.body.innerHTML = Groceries.toString();
