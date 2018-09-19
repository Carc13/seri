import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import "rxjs";
import { map } from "rxjs/operators";
import {Expense} from './Expense'



@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  
  constructor( private httpClient : HttpClient) { 

    console.log('Service is working!!');
   
  }
  
  getData(){

    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.get<Expense[]>('/api/v1/expenses').pipe(map(res => res));
  }

  addData(gasto : Expense){
    let headers = new HttpHeaders().set('Content-Type','application/json');
      return this.httpClient.post('/api/v1/expense',gasto).pipe(map(res => res));
  }

  updateData(gasto : Expense){
    let headers = new HttpHeaders().set('Content-Type','application/json');
      return this.httpClient.put('/api/v1/expense',gasto).pipe(map(res => res));
  }

deleteData(gasto : Expense){
  let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post("/api/v1/expense/delete",gasto).pipe(map(res => res));
}

}
