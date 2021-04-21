let books =[
            {
                title:"An Integratecd approach",
                author: "R. Nageswara Rao",
                price : 550

            },
            {
                title: "Core Java: Let us Java",
                author: "Yaswanth",
                price: 380
            },
            {
                title: "Core Java: Let us C",
                author: "Yaswanth",
                price: 480
            },
            {
                title: "Core Java: Let us PHP",
                author: "Yaswanth",
                price: 280
            }
];

const bookcontent = document.querySelector("#bookcontent");

function showBooks(inputBooks){
    bookcontent.innerHTML = "";
    let html = "";
    inputBooks.forEach(book => {
        html += `
        <div class='col col-md-4 mt-2'>
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Author: <strong>${book.author}</strong><br> Price:  <i class='fa fa-inr'></i><strong>${book.price}</strong></p>
            <span style='float:right'>
                <i class='fa fa-edit' data-toggle="modal" data-target="#updateModel" onclick="editBook('${book.title}')"></i>&nbsp; <i class='fa fa-trash' onclick="deleteBook('${book.title}')"></i>
            </span>
        </div>
        </div>
        </div>
        `
    });
    bookcontent.innerHTML = html;
}

const addbookbtn = document.querySelector("#addbookbtn")
const addbook = document.querySelector("#addbook");
const updatebook = document.querySelector("#updatebook");
showBooks(books);

addbookbtn.addEventListener('click',(event)=>{
        event.preventDefault();
        let book = {title:addbook.title.value,author:addbook.author.value,price:addbook.price.value};
        addbook.reset();
        books.push(book);
        document.querySelector(".close").click();
        showBooks(books);
})

function deleteBook(title){
        let res = confirm("Are you sure do u want to title :"+title+" ? ");
        if(res){
            books = books.filter(book=>book.title !== title);
            showBooks(books);
        }
}

function indexOf(title){
    for(let i=0;i<books.length;i++){
        let book = books[i];
        if(book.title === title){
            return i;
        }
    }
    return -1;
}

function editBook(title){
       
        let index = indexOf(title);
        let book = books[index];
        console.log(book);
        updatebook.title.value = book.title;
        updatebook.author.value = book.author;
        updatebook.price.value = book.price;
       
}

document.querySelector("#search").addEventListener('keyup',(event)=>{
        let searchRes =  books.filter(book=>book.title.includes(event.target.value));
        showBooks(searchRes);
})

let books =[
    {
        title:"An Integratecd approach",
        author: "R. Nageswara Rao",
        price : 550

    },
    {
        title: "Core Java: Let us Java",
        author: "Yaswanth",
        price: 380
    },
    {
        title: "Core Java: Let us C",
        author: "Yaswanth",
        price: 480
    },
    {
        title: "Core Java: Let us PHP",
        author: "Yaswanth",
        price: 280,
       
    }
];

