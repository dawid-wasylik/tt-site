import { Component, OnInit } from '@angular/core';
import  structureData  from '../../data/structure.json';
@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {

  structureData = structureData;

  constructor() { }

  ngOnInit(): void {
  }

}
