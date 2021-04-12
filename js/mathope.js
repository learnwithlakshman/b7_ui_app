

sayHello("Krish",printGreetings);

function sayHello(name, callback){
    callback(name);
}
function  printGreetings(name){
    console.log(`Hello ${name}, Welcome to JS world!`)
}


const perform = (arr,callback)=>{
      let res = arr[0];
      for(let i=1;i<arr.length;i++){
          res = callback(res,arr[i]);
      }
      return res;
}

const add = (num1, num2)=> num1 + num2;
const mul=  (num1, num2) => num1 * num2;


res = perform([1,2,3,4,5,6],add);
console.log(res);


