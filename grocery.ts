class Grocery {
    name: string;
    quantity: number;
    pricePerUnit: number;
    productCategory: string;

    //constructor
    constructor(name: string, quantity: number, pricePerUnit: number, productCategory: string) {
        this.name = name;
        this.quantity = quantity;
        this.pricePerUnit = pricePerUnit;
        this.productCategory = productCategory;
    }
}

let Groceries = [new Grocery("Bananas", 1, 3.99, "Produce"), new Grocery("Bread", 1, 2.50, "Bakery"),
 new Grocery("Milk", 1, 3.50, "Dairy"), new Grocery("Rice", 1, 6.99, "Grains")];


 
/*
Was planning on just iterating through the array of objects and then having it return
 each object with its attributes and then have it return that and then have it written 
 to the html page. For some reason the loop wasn't working correctly and only iterated through
 the first object in the array.
*/

function GroceryList(GroceriesArray) {
    for (let item of GroceriesArray) {
        var Description = "List contains: " + item.name + ", " + item.quantity + ", " + item.pricePerUnit + ", " + item.productCategory + ".";
        return Description;
    }
}


document.body.innerHTML = GroceryList(Groceries);
