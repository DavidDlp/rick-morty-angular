import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServChaptersService {

  constructor(private http: HttpClient) { }

  getChapters() {
    return this.http.get('https://rickandmortyapi.com/api/episode');
  }

}
