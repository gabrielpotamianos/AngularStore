import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  clicked: boolean;
  constructor() {
    this.clicked = true;
    }

  ngOnInit(): void {
   
  }

  changeIcon(){
    this.clicked = !this.clicked;
  }

}
