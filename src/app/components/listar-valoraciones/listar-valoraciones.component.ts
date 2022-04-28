import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Valoracion } from 'src/app/models/valoracion';
import { valoracionService } from 'src/app/service/valoracion.service';

@Component({
  selector: 'app-listar-valoraciones',
  templateUrl: './listar-valoraciones.component.html',
  styleUrls: ['./listar-valoraciones.component.css']
})
export class ListarvaloracionComponent implements OnInit {
  listvaloraciones: Valoracion[] = [];

  constructor(private _valoracionservice: valoracionService,
        private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getValoraciones();
  }

  getValoraciones() {
    this._valoracionservice.getValoraciones().subscribe(data => {
      console.log(data);
      this.listvaloraciones = data;
    }, error => {
      console.log(error);
    })
  }

  deleteValoracion(author: string) {
    this._valoracionservice.deleteValoracion(author).subscribe(data => {
      this.toastr.error('La valoracion se ha eliminado con exito!', 'Valoracion eliminada');
      this.getValoraciones();
    }, error => {
      console.log(error);
    })
  }
}
