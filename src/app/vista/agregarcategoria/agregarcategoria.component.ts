import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


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
   displayedColumns: string[] = ['Nombre'];
   dataSource = new MatTableDataSource<ICategoria>(Datos);
   
   // MatPaginator Inputs
   length = 100;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor() { }

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
}
