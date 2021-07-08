import { Component, OnInit } from '@angular/core';
import  contactData  from '../../data/contact.json'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  contactData = contactData;

  selectedValue = 0;

  constructor() { }

  ngOnInit(): void {
  }
  // who is select
  getSelectedValue(value: any) {
   this.selectedValue =  value.target.value;
   console.log(this.selectedValue)
  }
}
