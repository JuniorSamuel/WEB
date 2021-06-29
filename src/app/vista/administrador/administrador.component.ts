import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICategoria } from 'src/app/modelo/categoria';
import { IUsuario } from 'src/app/modelo/usuario';
import { IVacante } from 'src/app/modelo/vacante';
import { ApiService } from 'src/app/servicios/Api/api.service';
import { DatosService } from 'src/app/servicios/cargar/datos.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  usuarios:IUsuario[] = [];
  poster: IUsuario[] = [];
  admit:IUsuario[] = [];

  constructor(private _datos: DatosService) {

  }

  ngOnInit(): void {
        this._datos.getUsuariosApi();
        this._datos.getUsuario().subscribe((respuesta: IUsuario[]) => {
          this.usuarios = respuesta.filter(x => { x.idRol = 3});
          this.poster = respuesta.filter(x => { x.idRol = 2});
          this.admit = respuesta.filter(x => { x.idRol = 1});
        })
  }


}
