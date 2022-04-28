import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Valoracion } from 'src/app/models/valoracion';
import { valoracionService } from 'src/app/service/valoracion.service';

@Component({
  selector: 'app-crear-valoracion',
  templateUrl: './crear-valoracion.component.html',
  styleUrls: ['./crear-valoracion.component.css']
})

export class CrearvaloracionComponent implements OnInit {
  valoracionForm: FormGroup;
  title = "Crear valoracion";
  identificador: string | null;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _valoracionService: valoracionService,
              private aRouter: ActivatedRoute) { 
    this.valoracionForm = this.fb.group({
      puntuacion: ['', Validators.required],
      description: ['', Validators.required],
      identificador: ['', Validators.required],
      user: ['', Validators.required],
    });
    this.identificador = this.aRouter.snapshot.paramMap.get('identificador');
  }

  ngOnInit(): void {
    this.editValoracion();
  }

  addValoracion() {
    const valoracion: Valoracion = {
      puntuacion: this.valoracionForm.get('puntuacion')?.value,
      description: this.valoracionForm.get('description')?.value,
      identificador: this.valoracionForm.get('identificador')?.value,
      user: this.valoracionForm.get('user')?.value,
    }

    if(this.identificador !== null){
      // Edit valoracion
      this._valoracionService.editValoracion(this.identificador, valoracion).subscribe(data => {
        this.toastr.info('El valoracion se ha editado con exito!', 'Valoracion Editada');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.valoracionForm.reset();
      })
    }
    else {
      // Add valoracion
      console.log(valoracion);
      this._valoracionService.addValoracion(valoracion).subscribe(data => {
        this.toastr.success('El valoracion se ha creado con exito!', 'Valoracion Creada');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.valoracionForm.reset();
      })
    }
  }

  editValoracion() {
    if(this.identificador !== null) {
      this.title = 'Editar valoracion';
      this._valoracionService.getValoracionByIdentificador(this.identificador).subscribe(data => {
        this.valoracionForm.setValue({
          puntuacion: data.puntuacion,
          description: data.description,
          identificador: data.identificador,
          user: data.user,
        })
      })
    }
  }

}