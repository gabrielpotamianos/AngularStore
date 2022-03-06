import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorServiceService } from './author-service.service';
import { AuthorsComponentComponent } from './authors-component/authors-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
