import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServLocationService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get('https://rickandmortyapi.com/api/location');
  }

  getLocationById(id:any):  Observable<any>{ 
    return this.http.get('https://rickandmortyapi.com/api/location/' + id);
  }

}
