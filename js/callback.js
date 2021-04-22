
function bookDetails(title,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({"title":title,"author":"RNR","price":450});
        },2000);
    });

}

function borrowedBooks(username){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["Let us C","Let us Java","Let us PHP"]);
        },2000);
    });
   
}

function login(username,password){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({"name":username,"email":"krish@gmail.com","role":"ROLE_USER"});
        }, 3000);
    })
   
}

// console.log("Start");
// login("krish","123!",(user)=>{
//      borrowedBooks(user.username,(books)=>{
//          bookDetails(books[0],(bookData)=>{
//                 console.log(bookData);
//         })
//     })
// });
// console.log("End");

// login('krish','1234').then(user=>borrowedBooks(user))
//                     .then(books=>bookDetails(books[0]))
//                     .then(bookdata=>{
//                             console.log(bookdata);  
//                     });

async function displayBorrowedBookData(username,password){
    const user      =    await login(username,password);
    const books     =    await borrowedBooks(user.username);
    const bookdata  =    await bookDetails(books[0]);
    console.log(bookdata);
}

displayBorrowedBookData("krish","876543");