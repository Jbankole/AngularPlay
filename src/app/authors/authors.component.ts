import { AuthorServiceService } from './../author-service.service';
import { Component, OnInit } from '@angular/core';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  private title: String = 'Angular';
  private subTitle: String = '3 Authors';
  authors ;
  constructor(authrS: AuthorServiceService) { 
    this.authors =  authrS.getAuthors();
  }

  //returns page title
  getTitle (){
    return this.title;
  }
  //returns page sub title
  getSubTitle (){
    return this.subTitle;
  }
   
  ngOnInit() {
  }
}
