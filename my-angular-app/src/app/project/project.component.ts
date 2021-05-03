import { IplService } from './../ipl/ipl.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  labels:string[] = [];
  selectedLabel:string = "";
  chartData:any=[];
  constructor(private iplService:IplService) { }
  
  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: this.chartData,
    //firstRowIsData: true,
    options: {'title': 'Tasks'},
  };
  ngOnInit(): void {
      this.iplService.getTeamLabels().subscribe(res=>{
          this.labels = res["labels"];
      })
  }
  onChange(){
      this.iplService.getPlayersByTeamLabel(this.selectedLabel).subscribe(res=>{
          console.log(res);
      })
      this.iplService.getRoleCountByTeamLabel(this.selectedLabel).subscribe(res=>{
            this.chartData = [];
            this.chartData.push(["Role","Count"])
            res.forEach(ele=>{
                this.chartData.push([ele["role"],ele["count"]]);
            })
            console.log("Chart data",this.chartData);
            this.pieChart={
              chartType: 'PieChart',
              dataTable: this.chartData,
              //firstRowIsData: true,
              options: {'title': 'Tasks'},
            };
      })
  }

}
