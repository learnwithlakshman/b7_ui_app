"use strict";
var ItemType;
(function (ItemType) {
    ItemType[ItemType["BOOK"] = 0] = "BOOK";
    ItemType[ItemType["CD"] = 1] = "CD";
})(ItemType || (ItemType = {}));
var cat;
cat = { "name": "STAFF", "description": "Staff users" };
var ItemDetails = /** @class */ (function () {
    function ItemDetails(isbn, _author, _type, _price) {
        this.isbn = isbn;
        this._author = _author;
        this._type = _type;
        this._price = _price;
    }
    ItemDetails.prototype.showInfo = function () {
        console.log("Iteam Details: ISBN :" + this.isbn + " Author: " + this.author + " Type: " + this.type + " Price : " + this.price);
    };
    Object.defineProperty(ItemDetails.prototype, "author", {
        get: function () {
            return this._author;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemDetails.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemDetails.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return ItemDetails;
}());
console.log("Welcome to TS world");
var username = "Krish";
var age = 37;
var isworking = false;
var email = ['krish.t@gmail.com', 'krish.t@nodomain.com'];
var address = { "city": "GNT", "state": "AP" };
var u_status;
u_status = 100;
u_status = true;
u_status = "Some Text";
console.log("User Profile: " + username + " " + age + " " + isworking + " " + email + " " + address);
// function factorial(num:number):number{
//     let res = 1;
//     for(let i=1;i<=num;i++){
//         res *= i;
//     }
//     return res;  
// }
var factorial = function (num) {
    var res = 1;
    for (var i = 1; i <= num; i++) {
        res *= i;
    }
    return res;
};
console.log(factorial(6));
function perform(a, b, ope) {
    if (ope === void 0) { ope = "add"; }
    var res = 1;
    if (ope === "add") {
        res = a + b;
    }
    else if (ope == "mul") {
        res = a * b;
    }
    return res;
}
console.log(perform(10, 20, "mul"));
var obj1 = new ItemDetails('IND0001235', 'Krish', ItemType.BOOK, 340);
var obj2 = new ItemDetails('IND9876543', 'Manoj', ItemType.CD, 450);
var obj3 = new ItemDetails('IND0001235', 'Krish', ItemType.CD, 240);
var obj4 = new ItemDetails('IND9876548', 'Charan', ItemType.BOOK, 350);
var arr = [obj1, obj2, obj3, obj4];
arr.push(new ItemDetails("IDN98765", "Charan", ItemType.CD, 450));
// Print author Name and Item type
arr.forEach(function (item) {
    console.log(item.author + " " + item.type);
});
var userDetails = ['krish', 21];
function toHexa(num) {
    return "123";
}
var ele = document.querySelector("#username");
ele.value = 'default user';
