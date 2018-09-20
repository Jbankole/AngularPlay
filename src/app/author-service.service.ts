import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  constructor() { }
    //returns list of Authors
    getAuthors (){
      return ["Joseph B","Joseph B 2","Joseph B 3","Joseph B 4"];
    }  
}
