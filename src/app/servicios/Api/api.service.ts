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

  postCategoria(categoria: ICategoria){
    this._http.post(this._host+"api/Categoria", categoria).subscribe( x =>{
      console.log(x);
    }, (err: any) => {
      console.error(err);
    });
  }
}
