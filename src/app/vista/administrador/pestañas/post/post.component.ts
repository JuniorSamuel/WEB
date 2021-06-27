import { AgregarPostComponent } from './../../../agregar-post/agregar-post.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { IVacante } from 'src/app/modelo/vacante';
import { DatosService } from 'src/app/servicios/cargar/datos.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
    datoCargada: boolean = true;
    vacantes: IVacante[] = [];
  

    //Table
    displayedColumns: string[] = ['Compañia', 'Posición', 'Ubicación', 'Opciones'];
    dataSource = new MatTableDataSource<IVacante>(this.vacantes);

    //Filtro
    filtro: string = ''

    // MatPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];
  //#endregion
  constructor(private datos: DatosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.datos.getVacante().subscribe((respuesta: IVacante[]) =>{
      this.table(respuesta);
    });
  }

  table(usuarios: IVacante[]){
    if(usuarios == []) this.datoCargada = false;
    this.dataSource = new MatTableDataSource<IVacante>(usuarios);
    this.dataSource.paginator = this.paginator;
    
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

  setFiltro(evento: Event) {
    this.dataSource.filter = this.filtro.trim().toLowerCase();
  }
  //PROBANDO MODAL
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "96%";
    this.dialog.open(AgregarPostComponent,dialogConfig);
  }
}
