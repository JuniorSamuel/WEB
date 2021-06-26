import { AgregarPostComponent } from './../../../agregar-post/agregar-post.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
<<<<<<< HEAD
import { IUsuario } from 'src/app/modelo/usuario';
import { ApiService } from 'src/app/servicios/Api/api.service';
import { AdministradorComponent } from '../../administrador.component';
import { AdmitComponent } from '../admit/admit.component';
=======
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';


export interface usuario{
  nombre:string,
  apellido:string,
  edad:number
}

const posterDatos: usuario[] = [
  {nombre: 'Junior', apellido: 'De Los Santos', edad: 17},
  {nombre: 'Elian', apellido: 'mtg', edad: 19},
  {nombre: 'Jose', apellido: 'Upia', edad: 20},
  {nombre: 'Keutyn', apellido: 'Ramirez', edad: 20},
]
>>>>>>> d799e155d2a5a298c11023901f1cb729dea18206

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

<<<<<<< HEAD
  datoCargada: boolean = true;

  constructor(private _api: ApiService, private padreComp: AdministradorComponent) { }
=======
  
  constructor(
    private dialog: MatDialog,
  ) { }
>>>>>>> d799e155d2a5a298c11023901f1cb729dea18206

  ngOnInit(): void {
    this.padreComp.getUsuario().subscribe((respuesta: IUsuario[]) =>{
      this.table(respuesta);
    });
  }

  table(usuarios: IUsuario[]){
    if(usuarios == []) this.datoCargada = false;
    this.dataSource = new MatTableDataSource<IUsuario>(usuarios);
    this.dataSource.paginator = this.paginator;
    
  }
  //Table
  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'cedula', 'telefono'];
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
    this.dialog.open(AgregarPostComponent,dialogConfig);  
  }
}
