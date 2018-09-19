import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paysheet',
  templateUrl: './paysheet.component.html',
  styleUrls: ['./paysheet.component.css']
})
export class PaysheetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

      isNumberKey(evt)
			{
				var charCode = (evt.which) ? evt.which : evt.keyCode;
				if (charCode != 46 && charCode > 31 
				&& (charCode < 48 || charCode > 57))
				return false;
				return true;
			}  



}
