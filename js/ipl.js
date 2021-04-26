let baseUrl = "https://ipl2020-stat.herokuapp.com/ipl2020/team/";

const teamLabelsEle = document.querySelector("#teamLabels");

function showPlayers(){
    console.log("Show player");
    const label = document.querySelector("#teamlabel").value;
    if(label !== ""){
        let url = `${baseUrl}${label}`;
        
        fetch(url).then(res=>res.json()).then(respdata=>{
            let html = `<ul class="list-group">`
            respdata.forEach(player => {
               html += `<li class="list-group-item">${player.name}   - ${player.price}</li>`
            });
            html +="</ul>";
            document.querySelector("#players").innerHTML = html;
        })

        url = `${baseUrl}role/${label}`;
        fetch(url).then(res=>res.json()).then(data=>{
                let chartData = [];
                chartData.push(["Role","Count"]);
                data.forEach(ele=>{
                    chartData.push([ele['roleName'],ele['count']]);
                })
                showPieChart(chartData);
        })
    }
}
function showTeamLabels(){
    let url = `${baseUrl}labels`;
    fetch(url).then(res=>res.json()).then(res=>{
        let labels = res.labels;
        let html = '<select id="teamlabel" class="form-control" onchange="showPlayers()"><option value="" >Select team label</option>';
        labels.forEach(ele => {
            html += `<option value=${ele}>${ele}</option>`
        });
        html += "</select>";
        teamLabelsEle.innerHTML = html;
    })
}

function showPieChart(chartData){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(chartData);
      var options = {
        title: 'Player Count Details ( By Role )'
      };
      var chart = new google.visualization.PieChart(document.getElementById('playerscount'));
      chart.draw(data, options);
    }

}

showTeamLabels();


const maxpaidplayers = document.querySelector("#maxpaidplayers");

function maxPaidPlayerDetails(){
    let url = `${baseUrl}maxamountbyrole`;

    fetch(url).then(data=>data.json()).then(res=>{
        console.log(res);
        let html = '';
        res.forEach(ele=>{
            html += `<h4>Max paid ${ele.role} and Amount :(INR) ${Number.parseFloat(ele.amount)}</h4>`;
            html += `<table class='table'><thead class='thead-dark'><tr><th>Name</th><th>Role</th><th>Amount</th></head><tbody>`;

            ele.players.forEach(player=>{
                html += `<tr><td>${player.name}</td><td>${player.role}</td><td>${player.price}</td></tr>`;
            })
            html += '</tbody></table>';

        })
        maxpaidplayers.innerHTML = html;
    })
}

maxPaidPlayerDetails();