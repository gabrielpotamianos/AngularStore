import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';

@Component({
  selector: 'app-authors-component',
  templateUrl: './authors-component.component.html',
  styleUrls: ['./authors-component.component.css']
})
export class AuthorsComponentComponent implements OnInit {

  authors;

  constructor(service:AuthorServiceService) {
    this.authors = service.getAuthors();
   }

  ngOnInit(): void {
  }

}
