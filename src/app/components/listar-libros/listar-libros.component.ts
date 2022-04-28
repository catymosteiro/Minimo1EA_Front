import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Libro } from 'src/app/models/libro';
import { libroService } from 'src/app/service/libro.service';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarlibrosComponent implements OnInit {
  listlibros: Libro[] = [];

  constructor(private _libroservice: libroService,
        private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getLibros();
  }

  getLibros() {
    this._libroservice.getLibros().subscribe(data => {
      console.log(data);
      this.listlibros = data;
    }, error => {
      console.log(error);
    })
  }

  deletelibro(author: string) {
    this._libroservice.deleteLibro(author).subscribe(data => {
      this.toastr.error('El libro se ha eliminado con exito!', 'Libro eliminado');
      this.getLibros();
    }, error => {
      console.log(error);
    })
  }
}

