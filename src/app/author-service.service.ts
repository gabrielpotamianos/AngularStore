import { Injectable } from '@angular/core';

@Injectable()
export class AuthorServiceService {
  getAuthors(){
    return ["Authro1", "Author2", "Authro3"];
  }
}