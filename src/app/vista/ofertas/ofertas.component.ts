import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { IVacante } from 'src/app/modelo/vacante';
import { ApiService } from 'src/app/servicios/Api/api.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  //#region Variables
    id!: number;
    categoria:string = '';

    vacantes: IVacante[] = [];
  

   //Table
    displayedColumns: string[] = ['Compañia', 'Posición', 'Ubicación', 'Opciones'];
    dataSource= new MatTableDataSource<IVacante>(this.vacantes)

    //Filtro
    filtro: string = ''
    
    // MatPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];
  //#endregion

  constructor(private _api: ApiService, private _rutaPametros: ActivatedRoute) { }


  ngOnInit(): void {
    this._rutaPametros.params.subscribe((parametro: Params) =>{
      this.id = parametro.id;
      this.categoria = parametro.categoria;
    });

    this.getVacante();
  }

  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }

  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  setFiltro(){
    this.dataSource.filter = this.filtro.trim().toLowerCase();
  }

  getVacante(){
    this._api.getVacantesPorCategorias(this.id).subscribe((respuesta: IVacante[]) =>{
      this.dataSource = new MatTableDataSource(respuesta);
      this.dataSource.paginator = this.paginator
    });
  }
}
