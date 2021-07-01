import { AgregarcategoriaComponent } from './../../../agregarcategoria/agregarcategoria.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ICategoria } from 'src/app/modelo/categoria';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { DatosService } from 'src/app/servicios/cargar/datos.service';
import { IUsuario } from 'src/app/modelo/usuario';
import { AgregarCategoriaComponent } from 'src/app/vista/agregar-categoria/agregar-categoria.component';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {


  datoCargada: boolean = true

  //Table
  displayedColumns: string[] = ['Nombre', 'Acciones'];
  dataSource = new MatTableDataSource<ICategoria>();

  //Filtro
  filtro: string = ''

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private datos: DatosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.table(this.datos.categorias)
    if(this.datos.categorias != []){
      this.datos.getCategoriasApi();
      this.datos.getCategoria().subscribe((respuesta: ICategoria[]) => {
        this.table(respuesta);
      });
    }
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
    this.dialog.open(AgregarCategoriaComponent,dialogConfig);  
  }

  eliminar(id: number){
    console.log(id);
    // this.datos.deleteCategoria(id);
    Swal.fire({
      title: 'Esta seguro que desea eliminarlo?',
      text: "No podra revertir los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminala!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Selecciono elimiar el ', id);
        this.datos.deleteCategoria(id);
        Swal.fire(
          'Eliminado!',
          'Ha sido eliminado.',
          'success'
        )
      }
    })
  }

  editar(categoria: any){
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "25%";
    dialogConfig.data = categoria

    // dialogConfig.height = "20%";
    this.dialog.open(AgregarCategoriaComponent,dialogConfig);
  }

  alertaEliminar(){
    console.log()
    Swal.fire({
      title: 'Esta seguro que desea eliminarlo?',
      text: "No podra revertir los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminala!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Selecciono elimiar el ');
        Swal.fire(
          'Eliminado!',
          'Ha sido eliminado.',
          'success'
        )
      }
    })
  }
  alertaAnadido(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ha sido guardado.',
      showConfirmButton: false,
      timer: 1500
    })
  }
  alertaEditar(){
    Swal.fire({
      title: 'Quiere guardar los cambios?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Guardar',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Editado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Los cambios no se guardaron', '', 'info')
      }
    })
  }
}
