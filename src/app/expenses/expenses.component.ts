import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../data.service';
import {Expense} from '../Expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  paysheets = [];
  gastos =[];
  arturoexpenses = [];
  total : number = 0;
  alert : Boolean;
  alertPaysheet: Boolean;
  alertArturoExpense: Boolean;
  constructor(private dataService:DataService ) { 
    this.dataService.getData().subscribe(Data => {
      this.gastos = Data;
      for(let i = 0; i<this.gastos.length;i++){

        this.total = this.total + parseFloat(this.gastos[i].Price);
      }
      
    });
    this.dataService.getPaysheets().subscribe(Data => {
      this.paysheets = Data;
    
    });
    this.dataService.getArturoExpenses().subscribe(Data => {
      this.arturoexpenses = Data;
    
    });
    this.alertPaysheet = false; 
    this.alert = false;
    this.alertArturoExpense = false;
    


  }


  deleteGasto(gasto){

    let response = confirm('¿Estas seguro que quieres eliminar "' + gasto.SubType + " " + gasto.Object+ " precio "+ gasto.Price+'"?' );
    if(response){
    this.dataService.deleteData(gasto).subscribe(Data =>{});

      for(let i=0;i < this.gastos.length;i++){
          if(gasto ==this.gastos[i]){
            this.gastos.splice(i,1);
          }
      }
    }
    this.alert = true;  
    this.total = 0;
    for(let i = 0; i<this.gastos.length;i++){

      this.total = this.total + parseFloat(this.gastos[i].Price);
    }

  }

  
  deletePaysheet(paysheet){

    let response = confirm('¿Estas seguro que quieres eliminar esta nomina: "' + paysheet.Employee + " " + paysheet.Payment+ " "+ paysheet.Date+'"?' );
    if(response){
    this.dataService.deletePaysheet(paysheet).subscribe(Data =>{});

      for(let i=0;i < this.paysheets.length;i++){
          if(paysheet ==this.paysheets[i]){
            this.paysheets.splice(i,1);
          }
      }
    }
    this.alertPaysheet = true;  

  }


  deleteArturoExpense(arturoexpense){

    let response = confirm('¿Estas seguro que quieres eliminar esta nomina: "' + arturoexpense.Expense + " " + arturoexpense.Price+ " "+ arturoexpense.Date+'"?' );
    if(response){
    this.dataService.deleteArturoExpense(arturoexpense).subscribe(Data =>{});

      for(let i=0;i < this.arturoexpenses.length;i++){
          if(arturoexpense ==this.arturoexpenses[i]){
            this.arturoexpenses.splice(i,1);
          }
      }
    }
    this.alertArturoExpense = true;

  }




  ngOnInit() {
  }

  dismiss(){
    this.alert = false;
    this.alertPaysheet = false;  
    this.alertArturoExpense = false;
  }



}
