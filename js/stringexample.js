let str = "Miani";

console.log(typeof(str));

// Function Vs Method

function hello() {
    console.log("hello");
}

function isPalindrome(str) {
    for (let i = 0, j = str.length; i <= j; i++, j --) {
        if (str.charAt(i) != str.charAt(j)) {
            return false;
        }
    }
    return true;
}

const empnoSelect = document.querySelector("#empnoSelect");
let data = "1001Krish, 1002Manoj Kumar, 1003Charan, 1004Rajesh, 1005Sivanji,1006Nagesh A ,1006Balu,1008Srinu, 1009Venkat";
let arr = data.split(",");

let html = ` <div class="form-group">
<select class="form-control" id="empno">
<option value=''>Select empno</option>`

arr.forEach(ele=>{
    let empno = ele.trim().substr(0,4);
    html += `<option value=${empno}>${empno}</option>`
})
html +=`</select>`;
empnoSelect.innerHTML = html;


let str1 = "Krish";
let str2 = "krish";

console.log(str1.toLowerCase() === str2.toLowerCase());

let users = [
        {username:"krish",password:"admin@123",role:"admin"},
        {username:"manoj",password:"user@123",role:"user"},
        {username:"charan",password:"user@123",role:"user"},
        {username:"jayesh",password:"user@123",role:"user"},
        {username:"rajesh",password:"admin@123",role:"admin"},
]

const loginform = document.querySelector("#loginform");
const loginstatus = document.querySelector("#loginstatus");
function login(username,password){
    // if user is valid return user object otherwise return undefined
    username = username.trim();
    password = password.trim();
    if(username != "" && password != ""){
           for(let i=0;i<users.length;i++){
                let user = users[i];  
                if(user.username === username && user.password === password){
                    return user;
                }
            }
    }
}

loginform.addEventListener('submit',(event)=>{
    event.preventDefault();
    let username = loginform.username.value;
    let password = loginform.password.value;
   
    let loginUser = login(username,password);
  
    if(loginUser){
        loginstatus.innerHTML = JSON.stringify(loginUser);
    }else{
        loginstatus.innerHTML = `<p class='danger'>Bad Credentials</p>`;
    }
    loginform.reset();
})


setTimeout(() => {
   scroll(0,0);
}, 10000);

date = new Date();
i = 1;
timmer = setInterval(()=>{
    
    date = new Date();
    document.querySelector("span").textContent =   `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    i++;
    if(i == 15){
        clearInterval(timmer);
    }
},1000)