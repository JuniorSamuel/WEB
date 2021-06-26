import { AgregarcategoriaComponent } from './../../../agregarcategoria/agregarcategoria.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ICategoria } from 'src/app/modelo/categoria';
import { AdministradorComponent } from '../../administrador.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {


  datoCargada: boolean = true

  //Table
  // displayedColumns: string[] = ['Nombre', 'Apellido', 'Edad', 'Acciones'];
  // dataSource = new MatTableDataSource<usuario>(posterDatos);
  displayedColumns: string[] = ['Nombre', 'Acciones'];
  dataSource = new MatTableDataSource<ICategoria>();

  //Filtro
  filtro: string = ''

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private padreComp: AdministradorComponent, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.padreComp.getCategoria().subscribe((respuesta: ICategoria[]) =>{
      this.table(respuesta);
    });
  }

  table(categoria: ICategoria[]){
    if(categoria == []) this.datoCargada = false;
    this.dataSource = new MatTableDataSource<ICategoria>(categoria);
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
    console.log(evento)

    this.dataSource.filter = this.filtro.trim().toLowerCase();
  }
  //PROBANDO MODAL
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "25%";
    // dialogConfig.height = "20%";
    this.dialog.open(AgregarcategoriaComponent,dialogConfig);  
  }
}
