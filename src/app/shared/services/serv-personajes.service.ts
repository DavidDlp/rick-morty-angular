import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServPersonajesService {

  constructor(private http:HttpClient) { }

  getCharacter() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
  
  getCharacterById(id:any) {
    return this.http.get('https://rickandmortyapi.com/api/character/' +id);
  }
    
}
