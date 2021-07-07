import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IRol } from 'src/app/modelo/rol';
import { IUsuario } from 'src/app/modelo/usuario';
import { DatosService } from 'src/app/servicios/cargar/datos.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  usuarios: IUsuario[] = [];
  private observador$: Subject<IUsuario[]> = new Subject();
  rol: IRol[] = [];

  constructor(
    private _datos: DatosService
  ) {
    this.usuarios = _datos.usuarios;
    this.rol = _datos.rol;
    this.observador$ = new Subject()
  }

  ngOnInit(): void {
    this._datos.getUsuariosApi()
    if (this.usuarios.length == 0) {
      this._datos.getUsuariosApi();
      this._datos.getUsuario().subscribe((respuesta: IUsuario[]) => {
        this.usuarios = respuesta;
      });
    }
    this.observador$.next(this.usuarios);
  }

  getUsuario(): Observable<IUsuario[]> {
    return this.observador$.asObservable();
  }
}
