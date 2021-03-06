import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HttpClientModule }    from '@angular/common/http';
import { DataService } from './data.service';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { PaysheetComponent } from './paysheet/paysheet.component';
import { ArturoExpensesComponent } from './arturo-expenses/arturo-expenses.component';


const routes: Route[]= [
  {
    path:'',
    component: AppComponent
  },
  {
    path:'AddExpense',
    component: AddExpenseComponent

  },
  {
    path:'expenses',
    component: ExpensesComponent

  },
  {
    path:'paySheet',
    component: PaysheetComponent

  },
  {
    path:'arturoExpenses',
    component: ArturoExpensesComponent

  }


];


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    AddExpenseComponent,
    PaysheetComponent,
    ArturoExpensesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
