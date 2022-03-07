import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  suffix = "-empty";
  clicked: boolean;
  ending: string;
  constructor() {
    this.clicked = false;
    this.ending = this.suffix; 
    }

  ngOnInit(): void {
   
  }

  changeIcon(){
    this.ending= this.clicked ? "" : this.suffix;
    this.clicked = !this.clicked;
    console.log("works");
  }

}
