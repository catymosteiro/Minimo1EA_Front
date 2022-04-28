import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Libro } from 'src/app/models/libro';
import { libroService } from 'src/app/service/libro.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})

export class CrearlibroComponent implements OnInit {
  libroForm: FormGroup;
  title = "Crear libro";
  author: string | null;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _libroService: libroService,
              private aRouter: ActivatedRoute) { 
    this.libroForm = this.fb.group({
      ISBN: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
    });
    this.author = this.aRouter.snapshot.paramMap.get('author');
  }

  ngOnInit(): void {
    this.editLibro();
  }

  addLibro() {
    const libro: Libro = {
      title: this.libroForm.get('title')?.value,
      ISBN: this.libroForm.get('ISBN')?.value,
      description: this.libroForm.get('description')?.value,
      author: this.libroForm.get('author')?.value,
    }

    if(this.author !== null){
      // Edit libro
      this._libroService.editLibro(this.author, libro).subscribe(data => {
        this.toastr.info('El libro se ha editado con exito!', 'Libro editat');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.libroForm.reset();
      })
    }
    else {
      // Add libro
      console.log(libro);
      this._libroService.addLibro(libro).subscribe(data => {
        this.toastr.success('El libro se ha creado con exito!', 'Libro creado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.libroForm.reset();
      })
    }
  }

  editLibro() {
    if(this.author !== null) {
      this.title = 'Editar libro';
      this._libroService.getLibroByAuthor(this.author).subscribe(data => {
        this.libroForm.setValue({
          ISBN: data.ISBN,
          title: data.title,
          description: data.description,
          author: data.author,
        })
      })
    }
  }

}
