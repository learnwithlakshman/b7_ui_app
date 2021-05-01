import { Employee } from './../model/emp.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpmsService {

  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  search(searchText:string):Observable<Employee[]>{
    let url = `${this.baseUrl}/search/${searchText}`
      return this.http.get<Employee[]>(url);
  }
}
