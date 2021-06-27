import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICategoria } from 'src/app/modelo/categoria';
import { IUsuario } from 'src/app/modelo/usuario';
import { IVacante } from 'src/app/modelo/vacante';
import { ApiService } from '../Api/api.service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  //#region 
  private usuarios: IUsuario[];
  private categorias: ICategoria[];
  private post: IVacante[];

  private usuarios$: Subject<IUsuario[]>;
  private categorias$: Subject<ICategoria[]>;
  private post$: Subject<IVacante[]>;
  //#endregion
  constructor(private _api: ApiService) { 
    this.categorias = [];
    this.usuarios = [];
    this.post = []

    this.usuarios$ = new Subject();
    this.categorias$ = new Subject();
    this.post$= new Subject();
  }

  cargar() {
    this.getCategoriasApi();
    this.getVacanteApi();
  }


  //Api
  getUsuariosApi() {
    this._api.getUsuarios().subscribe((respuesta: IUsuario[]) => {
      this.usuarios = respuesta;
      this.usuarios$.next(this.usuarios);
    }, (err: any) => {
      console.error(err);
    });
  }

  getCategoriasApi() {
    this._api.getCategorias().subscribe((respuesta: ICategoria[]) => {
      this.categorias = respuesta;
      this.categorias$.next(this.categorias);
    }, (err: any) => {
      console.error(err);
    });
  }

  getVacanteApi(){
    this._api.getVacantes().subscribe((respuesta: IVacante[]) => {
      this.post = respuesta;
      this.post$.next(this.post);
    }, (err: any) =>{
      console.error(err);
    });
  }

  getUsuario(): Observable<IUsuario[]> {
    return this.usuarios$.asObservable();
  }

  getCategoria(): Observable<ICategoria[]> {
    return this.categorias$.asObservable();
  }

  getVacante(): Observable<IVacante[]>{
    return this.post$.asObservable();
  }

 }
