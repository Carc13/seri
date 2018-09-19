import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../data.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  gastos=[];

  constructor(private dataService:DataService ) { 
    this.dataService.getData().subscribe(Data => {
      this.gastos = Data;

    });

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
  }

  addGasto(newGasto){
    console.log(newGasto.value);
    newGasto.value = "";
    newGasto.focus();

    /**
     * En mi caso seria recivir todos les ipunt tomas sus valores y crear un objeto gasto, entrarlo en mi arreglo y hacer un post y mandarlo en la base de datos. 
     * 
    */

    this.gastos.push(newGasto.value);
    return false;
  }

  ngOnInit() {
  }

}
