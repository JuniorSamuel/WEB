import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ICategoria } from 'src/app/modelo/categoria';
import { ApiService } from 'src/app/servicios/Api/api.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit, AfterViewInit {

  //#region Variables    
    datoCargada = false;
    categorias: ICategoria[] = [{nombre: 'Sin registros', idCategoria: 0}];
    dataSource= new MatTableDataSource<ICategoria>(this.categorias)

    //Table
    displayedColumns: string[] = ['Nombre', 'Opciones'];
    
    
    //Filtro
    filtro: string = ''

    // MatPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];
  //#endregion

  constructor(private _api: ApiService) { }


  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }

  ngOnInit(): void {
    this.getCategoria();
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

  //Api
  getCategoria(){
    this.categorias = [];
    this._api.getCategorias().subscribe((respuesta: ICategoria[]) => {
      this.dataSource = new MatTableDataSource<ICategoria>(respuesta);
      this.dataSource.paginator = this.paginator
      this.datoCargada = true;
    }, (err: any) => {
      this.datoCargada = false;
      console.error(err);
    });
  }
}


