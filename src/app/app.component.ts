import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'seriservi-app';

  Expenses = [];


  constructor(private dataService:DataService ) { 
    this.dataService.getData().subscribe(Data => {
      this.Expenses = Data;

    });

  }



}
