let num = 19;

for(let i = 1; i <= 10; i++){
    console.log(`${num} * ${i} = ${num * i}`);
}

let i = 1;
while(i <= 10){
    console.log(`${num} * ${i} = ${num * i}`);
    i++;
}

if(num % 2 == 0){
    console.log(`${num} is Even`)
}else{
    console.log(`${num} is Odd`)
}