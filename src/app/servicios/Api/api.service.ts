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

  private _host: string = 'https://api-job.azurewebsites.net/';

  
  //GET ALL
  getCategorias(): Observable<ICategoria[]>{
    return this._http.get<ICategoria[]>(this._host +'api/Categoria');
  }

  getVacantesPorCategorias(idCategoria: number): Observable<IVacante[]>{
    return this._http.get<IVacante[]>(this._host +'api/Vacante/FiltroPorCategoria/'+idCategoria);
  }

  getVacantes(): Observable<IVacante[]>{
    return this._http.get<IVacante[]>(this._host+'api/Vacante');
  }

  getUsuarios(): Observable<IUsuario[]>{
    return this._http.get<IUsuario[]>(this._host +'api/Usuario');
  }

  //Post

  postCategoria(categoria: ICategoria): Observable<ICategoria>{
    return this._http.post<ICategoria>(this._host+ 'api/Categoria', categoria)
  }

  postVacante(vacante: IVacante): Observable<IVacante>{
    return this._http.post<IVacante>(this._host+"api/Vacante", vacante);
  }

  postUsuario(usuario: IUsuario): Observable<IUsuario>{
    return this._http.post<IUsuario>(this._host+'api/Usuario', usuario);
  }
  //Delete
  deleteCategoria(id: number): Observable<any>{
    return this._http.delete(this._host + "api/Categoria?CategoriaId=" + id);
  }

  deletePost(id: number): Observable<any>{
    return this._http.delete(this._host+'api/Vacante?VacanteId=' + id)
  }

  deleteUsuario(id: number): Observable<any>{
    return this._http.delete(this._host+'api/Usuario?UsuarioId=' + id)
  }

  //Put
  putCategoria(categoria: ICategoria): Observable<any>{
    return this._http.put(this._host+'api/Categoria', categoria);
  }

  putUsuario(usuario: IUsuario) {
    return this._http.put(this._host+ 'api/Usuario', usuario)
  }
}
