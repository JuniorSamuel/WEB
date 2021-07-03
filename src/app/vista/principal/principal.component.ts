import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ICategoriaVacante } from 'src/app/modelo/categoriaVacante';
import { IVacante } from 'src/app/modelo/vacante';
import { ApiService } from 'src/app/servicios/Api/api.service';
import { DatosService } from 'src/app/servicios/cargar/datos.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TrabajoDetallesComponent } from '../trabajo-detalles/trabajo-detalles.component';
import { ICategoria } from 'src/app/modelo/categoria';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit, AfterViewInit {

  //#region Variables    
  datoCargada = false;
  categorias: ICategoria[];
  vacantes: IVacante[];
  fila: number;

  displayedColumns: string[] = ['Compañia', 'Posición', 'Ubicación', 'Opciones'];
  dataSource = new MatTableDataSource<IVacante>()

  //Filtro
  filtro: string = ''

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  //#endregion

  constructor(
    private _datos: DatosService,
    private _route: Router,
    private _dialog: MatDialog, private cookie: CookieService
  ) {
    this.categorias = _datos.categorias;
    this.vacantes = _datos.vacante;
    this.fila = parseInt(cookie.get('fila'))
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }

  ngOnInit(): void {
    if(this.categorias.length == 0 || this.vacantes.length == 0){
      this._route.navigate(['Cargando']);
    }
  }

  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  setFiltro() {
    //this.dataSource.filter = this.filtro.trim().toLowerCase();
  }

  
  filtroVacante(num: number) {
    console.log('OK');
    return this.vacantes.filter(x => { x.idCategoria == num });
  }

  onWacht(vacante: IVacante, categoria: string) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "96%";
    dialogConfig.data = { vacante, categoria };
    this._dialog.open(TrabajoDetallesComponent, dialogConfig);
  }
}


