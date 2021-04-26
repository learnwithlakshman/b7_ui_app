enum ItemType{
    BOOK,CD
}
interface Format{
      showInfo():void;
}
interface Category{
        name:string;
        description:string;
       
}

let cat:Category;
cat = {"name":"STAFF","description":"Staff users"};

class ItemDetails implements Format{
     
    constructor(readonly isbn:string,private _author:string,private _type:ItemType,private _price:number){
    }
    showInfo(){
        console.log(`Iteam Details: ISBN :${this.isbn} Author: ${this.author} Type: ${this.type} Price : ${this.price}`)
    }
    get author(){
        return this._author;
    }
    get price(){
        return this._price;
    }
    get type(){
        return this._type;
    }
}


console.log("Welcome to TS world");

let username:string = "Krish";
let age:number = 37;
let isworking:boolean = false;
let email:string []= ['krish.t@gmail.com','krish.t@nodomain.com'];
let address:{"city":string,"state":string} = {"city":"GNT","state":"AP"};
let u_status:any;

u_status = 100;
u_status = true;
u_status = "Some Text";

console.log(`User Profile: ${username} ${age} ${isworking} ${email} ${address}`);

// function factorial(num:number):number{
//     let res = 1;
//     for(let i=1;i<=num;i++){
//         res *= i;
//     }
//     return res;  
// }

const factorial = (num:number)=>{
    let res = 1;
    for(let i=1;i<=num;i++){
        res *= i;
    }
    return res;
}

console.log(factorial(6));

function perform(a:number, b:number,ope:string="add"):number{
    let res:number=1;
    if(ope === "add"){
        res = a + b;
    }else if(ope == "mul"){
        res = a * b;
    }
    return res;
}

console.log(perform(10,20,"mul"))


let obj1 = new ItemDetails('IND0001235','Krish',ItemType.BOOK,340);
let obj2 = new ItemDetails('IND9876543','Manoj',ItemType.CD,450);
let obj3 = new ItemDetails('IND0001235','Krish',ItemType.CD,240);
let obj4 = new ItemDetails('IND9876548','Charan',ItemType.BOOK,350);

let arr:ItemDetails[] = [obj1,obj2,obj3,obj4];
arr.push(new ItemDetails("IDN98765","Charan",ItemType.CD,450));

// Print author Name and Item type

arr.forEach(item=>{
        console.log(`${item.author} ${item.type}`);
})


let userDetails:[string,number]=['krish',21];

function toHexa(num:number|string):string{
    return "123";
}

let ele = document.querySelector("#username") as HTMLInputElement;
ele.value = 'default user'
