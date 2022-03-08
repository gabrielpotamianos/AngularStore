import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';
  tweet={
    body: "this is some text",
    isLiked: false,
    totalLikes: 0
  }
}
