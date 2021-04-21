let contacts = [
        {"name":"Kirsh","email":"krish@gmail.com","mobile":9876543444},
        {"name":"charan","email":"charan@gmail.com","mobile":9876543445},
]

localStorage.setItem("contacts",JSON.stringify(contacts));

function addContact(contact){

        let l_contacts = JSON.parse(localStorage.getItem("contacts"));
        l_contacts.push(contact);
        localStorage.setItem("contacts",JSON.stringify(l_contacts));

}

addContact({"name":"Sujith","email":"sujith@gmail.com","mobile":9876544443});