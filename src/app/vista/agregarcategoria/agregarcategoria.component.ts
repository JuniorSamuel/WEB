import { ApiService } from 'src/app/servicios/Api/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

export interface ICategoria {
    idCategoria: number;
    nombre: string;
 }

 const Datos: ICategoria[] = [
   {idCategoria: 1, nombre: "Administrador"},
   {idCategoria: 2, nombre: "Usuario"},
   {idCategoria: 3, nombre: "Poster"}
 ]

@Component({
  selector: 'app-agregarcategoria',
  templateUrl: './agregarcategoria.component.html',
  styleUrls: ['./agregarcategoria.component.css']
})
export class AgregarcategoriaComponent implements OnInit {

   //Table
   displayedColumns: string[] = ['Nombre', 'Acciones'];
   dataSource = new MatTableDataSource<ICategoria>(Datos);
   
   // MatPaginator Inputs
   length = 100;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    private service: ApiService, private dialog: MatDialog
  ) { }

  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
  
  ngOnInit(): void {
  }

  pageEvent: PageEvent = new PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(AgregarcategoriaComponent,dialogConfig);
  }

  onSubmit(){

  }

}
