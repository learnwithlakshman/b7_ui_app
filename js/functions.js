// Write function to find factorial of given number

const factorial = (num)=>{
    if(num == 0 || num == 1)
        return 1; 
    let res = 1;
    for(let i=2; i <= num; i++){
        res *= i;
    }
    return res; 
}


const isPrime = (num)=>{
      if(num < 2){
          return false;
      }
      for(let i = 2; i <= num / 2; i++){
          if(num % i == 0){
              return false;
          }
      }
      return true;
}

const reverse = (num)=>{
        let rev = 0;
        while(num != 0){
            let r = num % 10;
            rev = rev * 10 + r;
            num = Number.parseInt(num / 10);

        }
        return rev;
}


function addTwoNumber(){
     
        const num1Ele = document.querySelector("#num1");
        const num2Ele = document.querySelector("#num2");
        let num1 = Number.parseFloat(num1Ele.value);
        let num2 = Number.parseFloat(num2Ele.value);
        const res = num1 + num2;
        document.querySelector("#result").value = `${num1} + ${num2} = ${res}`;
      
        setTimeout(()=>{
            num1Ele.value = "";
            num2Ele.value = "";
            document.querySelector("#result").value = ""
        },3000);

}

names = ["Krish","Manoj","Sujith","Ramesh"];

const userul = document.querySelector(".userul");

const display = (users)=>{
    let html = "";
    names.forEach((name)=>{
        html += `<li>${name}</li>`
    })
    userul.innerHTML=html;
}

display(names);
const addnew = document.querySelector("#addnew");
addnew.addEventListener('click',()=>{
        const name = document.querySelector("#user").value;
        console.log(name);
        if(name.trim() != ""){
            names.push(name);
            display(names);
            document.querySelector("#user").value = "";
        }else{
            alert("name can't be empty");
        }

})
const btnreverse = document.querySelector("#btnreverse");
const btnprime = document.querySelector("#btnprime");
const btnfactorial = document.querySelector("#btnfactorial");
const showResult = document.querySelector("#showResult");

btnreverse.addEventListener('click',()=>{
        showResult.innerHTML = "";
        let num = document.querySelector("#inputNum").value;
        let res = reverse(num);
        showResult.innerHTML = `<h3>Reverse of ${num} is ${res}</h3>`;
})
btnprime.addEventListener('click',()=>{
    showResult.innerHTML = "";
    let num = document.querySelector("#inputNum").value;
    let res = isPrime(num);
    if(res){
        showResult.innerHTML = `<h3> ${num} is a prime</h3>`;
    }else{
        showResult.innerHTML = `<h3>${num} is not a prime</h3>`;
    }
})
btnfactorial.addEventListener('click',()=>{
    showResult.innerHTML = "";
    let num = document.querySelector("#inputNum").value;
    let res = factorial(num);
    showResult.innerHTML = `<h3>Factorial of ${num} is ${res}</h3>`;
})