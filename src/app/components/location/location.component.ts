import { Component, OnInit } from '@angular/core';
import { Location } from '../../model/location';
import  locationData  from '../../data/location.json'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})


export class LocationComponent implements OnInit {

  selectedValue = -1;
  selectedValueOther = -1;
  locations = locationData;

  constructor() { }



  ngOnInit(): void {
  }


    
    getSelectedValue(value: any) {
      console.log(value)
      if(value >=14) {
        this.selectedValueOther = value;
        console.log(value);
      }else{
        
      this.selectedValue =  value;
      
      }
      
     }

}
