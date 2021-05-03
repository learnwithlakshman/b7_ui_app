import { RoleCount } from './../model/rolecount.model';
import { Player } from './../model/player.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamLabels } from '../model/label.model';

@Injectable({
  providedIn: 'root'
})
export class IplService {

  baseUrl = environment.iplbaseUrl;
  constructor(private http:HttpClient) { }

  getTeamLabels():Observable<TeamLabels>{
      let url = `${this.baseUrl}labels`
      return this.http.get<TeamLabels>(url);
  }
  getPlayersByTeamLabel(label:string):Observable<Player[]>{
    let url = `${this.baseUrl}players/${label}`;
    return this.http.get<Player[]>(url);
  }
  getRoleCountByTeamLabel(label:string):Observable<RoleCount[]>{
    let url = `${this.baseUrl}rolecount/${label}`;
    return this.http.get<RoleCount[]>(url);
  }
}
