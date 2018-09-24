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
    ArturoExpenseID: String,
	  Expense: String,
	  Price: String,
	  Date: String
   };

   show : Boolean = true;
                  
  constructor(private dataService:DataService) { 
    this.alert = false;

  }

  ngOnInit() {
  }



  createArturoExpense(type,othertype,price){
   
    this.dataService.getArturoExpenses().subscribe(Data => {
      this.expenses = Data;
    
      let date = new Date();
      let mayor: number;
    
      for(let i =0;i< this.expenses.length;i++){
        this.num.push(parseInt( this.expenses[i].ArturoExpenseID));
       
      }

      if(this.num.length == 0){
        mayor = 0;
      }else{
      mayor = this.getMaxOfArray(this.num);
      } 
      

      if(othertype.value != ""){
        this.arturoExpense = {
          ArturoExpenseID:(mayor + 1).toString(),
          Expense: othertype.value,
          Price : price.value,
          Date : date.toString()
        };
       
      this.dataService.addArturoExpense(this.arturoExpense).subscribe(Data =>{
        type.value = "---SELECT---";
        price.value="";
        othertype.value="";
         this.alert = true;
      });


      }

      else{
        this.arturoExpense = {
          ArturoExpenseID:(mayor + 1).toString(),
          Expense: type.value,
          Price : price.value,
          Date : date.toString()
        };
       
      this.dataService.addArturoExpense(this.arturoExpense).subscribe(Data =>{
        type.value = "---SELECT---";
        price.value="";
        othertype.value="";
         this.alert = true;
      });
    }

    });

  }

  getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  dismiss(){

    this.alert = false;

  }



}
