import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoria } from 'src/app/modelo/categoria';
import { IUsuario } from 'src/app/modelo/usuario';
import { IVacante } from 'src/app/modelo/vacante';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  host: string = 'https://localhost:44319/';

  public getCategorias(): Observable<ICategoria[]>{
    return this._http.get<ICategoria[]>('api/Categoria');
  }

  public getVacantesPorCategorias(idCategoria: number): Observable<IVacante[]>{
    return this._http.get<IVacante[]>('api/Vacante/FiltroPorCategoria/'+idCategoria);
  }

  public getVacantes(): Observable<IVacante[]>{
    return this._http.get<IVacante[]>('api/Vacante');
  }

  getUsuarios(): Observable<IUsuario[]>{
    return this._http.get<IUsuario[]>('/api/Usuario');
  }
}
