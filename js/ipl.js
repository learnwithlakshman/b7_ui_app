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

