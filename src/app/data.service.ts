import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs";
import { map } from "rxjs/operators";
import {Expense} from './Expense';
import {Paysheet} from './Paysheet';
import {ArturoExpense} from './ArturoExpense'



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


getPaysheets(){
  let headers = new HttpHeaders().set('Content-Type','application/json');
  return this.httpClient.get<Expense[]>('/api/v1/paysheets').pipe(map(res => res));
}

addPaysheet(paysheet : Paysheet){
  let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post('/api/v1/paysheet',paysheet).pipe(map(res => res));
}

updatePaysheet(paysheet : Paysheet){
  let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.put('/api/v1/paysheet',paysheet).pipe(map(res => res));
}

deletePaysheet(paysheet : Paysheet){
let headers = new HttpHeaders().set('Content-Type','application/json');
  return this.httpClient.post("/api/v1/paysheet/delete",paysheet).pipe(map(res => res));
}



getArturoExpenses(){
  let headers = new HttpHeaders().set('Content-Type','application/json');
  return this.httpClient.get<ArturoExpense[]>('/api/v1/arturoexpenses').pipe(map(res => res));
}

addArturoExpense(arturoexpense : ArturoExpense){
  let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post('/api/v1/arturoexpense',arturoexpense).pipe(map(res => res));
}

updateArturoExpense(arturoexpense : ArturoExpense){
  let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.put('/api/v1/arturoexpense',arturoexpense).pipe(map(res => res));
}

deleteArturoExpense(arturoexpense : ArturoExpense){
let headers = new HttpHeaders().set('Content-Type','application/json');
  return this.httpClient.post("/api/v1/arturoexpense/delete",arturoexpense).pipe(map(res => res));


}





}
