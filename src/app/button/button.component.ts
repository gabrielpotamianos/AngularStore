import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers:[TitleCasePipe]
})
export class ButtonComponent implements OnInit {
  text = ""
  constructor(private titlecasepipe:TitleCasePipe) { }

  ngOnInit(): void {
    this.titlecasepipe.transform(this.text);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
