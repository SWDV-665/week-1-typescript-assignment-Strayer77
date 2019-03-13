var Grocery = /** @class */ (function () {
    //constructor
    function Grocery(name, quantity, pricePerUnit, productCategory) {
        this.name = name;
        this.quantity = quantity;
        this.pricePerUnit = pricePerUnit;
        this.productCategory = productCategory;
        this.groceryDescription = name + ", " + quantity + ", " + pricePerUnit + ", " + productCategory;
    }
    return Grocery;
}());
var Bananas = new Grocery("Bananas", 1, 3.99, "Produce");
var Bread = new Grocery("Bread", 1, 2.50, "Bakery");
var Milk = new Grocery("Milk", 1, 3.50, "Dairy");
var Rice = new Grocery("Rice", 1, 6.99, "Grains");
var Groceries = [Bananas.groceryDescription, Bread.groceryDescription, Milk.groceryDescription, Rice.groceryDescription];
/*
Was planning on just iterating through the array of objects and then having it return
 each object with its attributes and then have it return that and then have it written
 to the html page. For some reason the loop wasn't working correctly and only iterated through
 the first object in the array.
*/
document.body.innerHTML = Groceries.toString();
