import { AgregarAdministradorComponent } from 'src/app/vista/agregar-administrador/agregar-administrador.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUsuario } from 'src/app/modelo/usuario';

import { AdministradorComponent } from '../../administrador.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DatosService } from 'src/app/servicios/cargar/datos.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  datoCargada: boolean = true;

  constructor(private datos: DatosService, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.datos.getUsuario().subscribe((respuesta: IUsuario[]) =>{
      this.table(respuesta.filter(x => {return x.idRol == 2}));
    });
  }

  table(usuarios: IUsuario[]){
    if(usuarios == []) this.datoCargada = false;
    this.dataSource = new MatTableDataSource<IUsuario>(usuarios);
    this.dataSource.paginator = this.paginator;
    
  }
  //Table
  // displayedColumns: string[] = ['Nombre', 'Apellido', 'Edad', 'Acciones'];
  // dataSource = new MatTableDataSource<usuario>(posterDatos);
  displayedColumns: string[] = ['nombre','correo', 'Acciones'];
  dataSource = new MatTableDataSource<IUsuario>();

  //Filtro
  filtro: string = ''

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];


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
    dialogConfig.height = "96%";
    this.dialog.open(AgregarAdministradorComponent,dialogConfig);  
  }

  eliminar(id: number){
    this.datos.deleteUsuario(id);
  }

  editar(usuario: IUsuario){
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "96%";
    dialogConfig.data = usuario;
    this.dialog.open(AgregarAdministradorComponent,dialogConfig);  
  }
}
