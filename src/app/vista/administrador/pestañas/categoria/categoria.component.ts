import { AgregarcategoriaComponent } from './../../../agregarcategoria/agregarcategoria.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
<<<<<<< HEAD
import { ICategoria } from 'src/app/modelo/categoria';
import { ApiService } from 'src/app/servicios/Api/api.service';
import { AdministradorComponent } from '../../administrador.component';
=======
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
>>>>>>> d799e155d2a5a298c11023901f1cb729dea18206



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

<<<<<<< HEAD
=======
  constructor(
    private dialog: MatDialog,
  ) { }
>>>>>>> d799e155d2a5a298c11023901f1cb729dea18206

  datoCargada: boolean = true

  //Table
  displayedColumns: string[] = ['Nombre'];
  dataSource = new MatTableDataSource<ICategoria>();

  //Filtro
  filtro: string = ''

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private padreComp: AdministradorComponent) { }

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
    dialogConfig.width = "50%";
    dialogConfig.height = "30%";
    this.dialog.open(AgregarcategoriaComponent,dialogConfig);  
  }
}
