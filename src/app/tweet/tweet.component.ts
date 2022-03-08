import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  @Input('isLiked') isLiked!: boolean;
  @Input('totalLikes') totalLikes!: number;
  
  like(){
    this.isLiked=!this.isLiked;
    this.totalLikes += this.isLiked ? 1 : -1;
  }
}
