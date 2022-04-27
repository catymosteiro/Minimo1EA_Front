import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class libroService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getLibros(): Observable<any> {
    return this.http.get(this.url + '/libros');
  }

  deleteLibro(author: string): Observable<any> {
    return this.http.delete(this.url + '/libros/' + author, {responseType: 'text'})
  }

  addLibro(libro: Libro): Observable<any> {
    return this.http.post(this.url + '/libros', libro, {responseType: 'text'}) ;
  }

  getLibroByAuthor(author: string): Observable<any> {
    return this.http.get(this.url + '/libros/' + author);
  }

  editLibro(author: string, libro: Libro): Observable<any> {
    return this.http.put(this.url + '/libros/' + author, libro, {responseType: 'text'});
  }
}
