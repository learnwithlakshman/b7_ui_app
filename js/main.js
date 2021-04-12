function showDateAndTime(){
    let ele = document.querySelector('#id_date_time');
    ele.innerHTML = new Date();
}

let i = 0;
changeStatus = function(){

        if(i == 0){
            document.querySelector('#id_bulb').src='img/js/pic_bulbon.gif';
            i = 1;
        }else{
            document.querySelector('#id_bulb').src='img/js/pic_bulboff.gif'
            i = 0;
        }
}

function showTable(){
        let num = document.querySelector("#id_input_num").value;
        let str = "";
        for(let i=1;i<=10;i++){
            str += `<br/> ${num} * ${i} = ${num * i}`
        }
        document.querySelector("#id_show_table").innerHTML = str;
}


