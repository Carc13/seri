import { Component, OnInit } from '@angular/core';
import {Expense} from '../Expense';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../data.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
  
})


export class AddExpenseComponent implements OnInit {
 gastos=[];
 Price: string;
 num=[];
  expense:{
    ExpenseID:string,
    Type: string,
    SubType : string,
    Object : string,
    Price : string,
    Date : string
  };
  Materials: String[];
  show : Boolean = true;
  alert : Boolean;
//https://stackoverflow.com/questions/43710137/angular-2-how-to-populate-a-dropdown-based-on-another-dropdown-selection
//https://stackoverflow.com/questions/36150107/angular-2-change-event-model-changes



  constructor(private dataService:DataService ) {

    this.addListMaterial("---SELECT---");
    this.alert = false;
   };

  ngOnInit() {
  };
  
  isNumber(event){

    console.log(event);

  }


  addListMaterial(algo){
    
    if(algo.value == "Limpiar Tinta"){
      this.Materials = ["--SELECT--","Aguarras","Thinner","Screen openner","Trapos","Atomizador"];
      this.show = true;
    }
    else if (algo.value == "---SELECT---"){
      this.Materials = ["---SELECT---"];
      this.show = true;
    }
    else if (algo.value == "Papeleria"){
      this.Materials = ["--SELECT--","Cinta pegante transparente gruesa", "Cinta pegante transparente fina","Cinta gris","Marcadores para la pizzarra","Papel 8.5x11","Papel 11x17","Rollo de positivo","Fundas para empaque de camistas","Fundas para entrega","Isopo","Facturas","Recibos de pago","Cotizacion", "Tijeras","Lapiceros","Marcadores","Reglas","Cuchillas"];
      this.show = true;
    }
    else if (algo.value == "Vinyl"){
      this.Materials = ["--SELECT--","Mascara","Blanco","Negro","Rojo","Azul","Amarillo"];
      this.show = true;
    }
    else if (algo.value == "Herramientas de Impresion"){
      this.Materials = ["--SELECT--","Pantallas","Squeequees","Espatulas","Martillo de Goma"];
      this.show = true;
    }
    else if (algo.value == "Herramientas de Proteccion"){
      this.Materials = ["--SELECT--","Mascarilla","Guantes"];
      this.show = true;
    }
    else if (algo.value == "Prendas"){
      this.Materials = ["--SELECT--","Camisetas","Poloshirts","Camisas","Gorras"];
      this.show = true;
    }
    else if (algo.value == "Combustibles"){
      this.Materials = ["--SELECT--","Gas propano","Gasolina","Fosforos","Encendedor"];
      this.show = true;
    }
    else if (algo.value == "Mantenimiento"){
      this.Materials = ["--SELECT--","Aceite penetrante  WD40","Grasa pesada","Aceite para planta electrica", "Aceite para hidrolavadora", "Aceite para el motor","Aceite para la pasola"];
      this.show = true;
    }
    else if (algo.value == "Electricos"){
      this.Materials = ["--SELECT--","Bombillos","Tubos fluorescentes luz negra","Extension elecrica", "alambres"];
      this.show = true;
    }
    else if (algo.value == "Hidratacion"){
      this.Materials = ["--SELECT--","Agua de botellon", "Vasos plasticos"];
      this.show = true;
    }

    else if (algo.value == "Emulsion"){
      this.Materials = ["--SELECT--","Removedor de emulsion","Emulsion","Emulsionador"];
      this.show = true;
    }
    else if (algo.value == "Paleta"){
      this.Materials = ["--SELECT--","Ega para paleta","Esonja para la ega de paleta","Papel paleta"];
      this.show = true;
    }
    else if (algo.value == "Tintas"){
      this.Materials = ["--SELECT--","Blanca","Negra","Azul royal","Rojo","Amarillo (pollito)","Amarillo (quemado)","Rosado fluorescente","Naranja fluorescente", "Verde fluorescente","Amarillo fluorescente","Morado","Dorado","Plateado","Adhesivo foil","Fashion (adelgasador)","Additivo puff","Impresora negro", "Impresora azul", "Impresora rojo","Impresora amarillo"];
      this.show = true;
    }
    else if (algo.value == "Horno"){
      this.Materials = ["--SELECT--","Ceramicas para horno","Cinta de fibra de vidrio para horno","Maya para el horno"];
      this.show = true;
    }
    else if (algo.value == "Ambientador"){
      this.Materials = ["--SELECT--","Ambientador olorizante","Baygon"];
      this.show = true;
    }
    else if (algo.value == "Otro"){
      this.show = false;
    }
   else{
    this.Materials = ["--SELECT--",];
    this.show = true;
   }
  }
 
  



  createExpense(SubType,Materiales,otherMaterial){
   

    this.dataService.getData().subscribe(Data => {
      this.gastos = Data;

      let date = new Date();
      let mayor: number;
    
     

      for(let i =0;i< this.gastos.length;i++){
        this.num.push(parseInt( this.gastos[i].ExpenseID));
       
      }

      if(this.num.length == 0){
        mayor = 0;
      }else{
      mayor = this.getMaxOfArray(this.num);}
      
       if(otherMaterial.value == ""){
        this.expense = {
          ExpenseID:(mayor + 1).toString(),
          Type: "Materiales Gastables",
          SubType : SubType.value,
          Object : Materiales.value,
          Price : this.Price,
          Date : date.toString()
        };
       }
       else{
      this.expense = {
        ExpenseID:(mayor + 1).toString(),
        Type: "Materiales Gastables",
        SubType : SubType.value,
        Object : otherMaterial.value,
        Price : this.Price,
        Date : date.toString()
      };
      }
  
      this.dataService.addData(this.expense).subscribe(Data =>{
         SubType.value = "---SELECT---";
         this.addListMaterial(SubType.value);
         otherMaterial.value="";
        this.Price = "";

      });
      
     
    
      this.alert = true;
    });

 
  
    /**
     * 
     * En angular cuando viajo entre rutas se actualizan.
     * 
     * 
     * */ 


  }


  getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  dismiss(){

    this.alert = false;

  }

}



