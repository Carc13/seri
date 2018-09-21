import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../data.service';
@Component({
  selector: 'app-arturo-expenses',
  templateUrl: './arturo-expenses.component.html',
  styleUrls: ['./arturo-expenses.component.css']
})
export class ArturoExpensesComponent implements OnInit {


  expenses=[];
  alert : Boolean;
  num=[];

   arturoExpense:{
     PaysheetID:string,
     Employee: string,
     Payment : string,
     Date : string
   };

   show : Boolean = true;
                                              /*******ME QUE DE AQUI, CONVIRTIENDO ESTA PARA QUE ENCAJE CON ARTURO CLASE******* */

  constructor(private dataService:DataService) { 
    this.alert = false;
  }

  ngOnInit() {
  }



  createPaysheet(employeeSalary,employee){
   
    this.dataService.getPaysheets().subscribe(Data => {
      this.employees = Data;
    
      let date = new Date();
      let mayor: number;
    
      for(let i =0;i< this.employees.length;i++){
        this.num.push(parseInt( this.employees[i].PaysheetID));
       
      }

      if(this.num.length == 0){
        mayor = 0;
      }else{
      mayor = this.getMaxOfArray(this.num);
      } 
      
        this.paysheet = {
          PaysheetID:(mayor + 1).toString(),
          Employee: employee.value,
          Payment : employeeSalary.value,
          Date : date.toString()
        };
       
      this.dataService.addPaysheet(this.paysheet).subscribe(Data =>{
         employee.value = "---SELECT---";
         employeeSalary.value="";
         this.alert = true;
      });

    });

  }

  getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  dismiss(){

    this.alert = false;

  }



}
