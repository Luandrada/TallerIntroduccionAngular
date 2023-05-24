import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Personaje } from '../shared/interfaces/Personajes';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllCharacters():Observable<Personaje[]> {
    return this.http.get('https://rickandmortyapi.com/api/character').pipe(map((resp:any) => {
      return resp.results as Personaje[]
    }));
  }
}
