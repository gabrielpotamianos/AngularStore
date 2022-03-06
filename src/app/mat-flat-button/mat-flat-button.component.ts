import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-flat-button',
  templateUrl: './mat-flat-button.component.html',
  styleUrls: ['./mat-flat-button.component.css']
})
export class MatFlatButtonComponent implements OnInit {

  likes!:number;

  constructor() {
    this.likes = 0;
   }

  ngOnInit(): void {
  }

  like() { 
    console.log(this.likes++);
  }
}

const button: MatFlatButtonComponent = new MatFlatButtonComponent();

