import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Valoracion } from '../models/valoracion';

@Injectable({
  providedIn: 'root'
})
export class valoracionService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getValoraciones(): Observable<any> {
    return this.http.get(this.url + '/valoraciones');
  }

  deleteValoracion(identificador: string): Observable<any> {
    return this.http.delete(this.url + '/valoraciones/' + identificador, {responseType: 'text'})
  }

  addValoracion(valoracion: Valoracion): Observable<any> {
    return this.http.post(this.url + '/valoraciones', valoracion, {responseType: 'text'}) ;
  }

  getValoracionByIdentificador(identificador: string): Observable<any> {
    return this.http.get(this.url + '/valoraciones/' + identificador);
  }

  editValoracion(identificador: string, valoracion: Valoracion): Observable<any> {
    return this.http.put(this.url + '/valoraciones/' + identificador, valoracion, {responseType: 'text'});
  }
}