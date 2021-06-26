import { AgregarAdministradorComponent } from 'src/app/vista/agregar-administrador/agregar-administrador.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

export interface usuario{
  nombre:string,
  apellido:string,
  edad:number
}

const usuarioDatos: usuario[] = [
  {nombre: 'Junior', apellido: 'De Los Santos', edad: 17},
  {nombre: 'maria', apellido: 'Lorenzo', edad: 19},
  {nombre: 'Jose', apellido: 'Upia', edad: 20},
  {nombre: 'Keutyn', apellido: 'Ramirez', edad: 20},
  {nombre: 'Wilkendry', apellido: 'trujillo', edad: 18},
  {nombre: 'Ramon', apellido: 'De Los Santos', edad: 17},
  {nombre: 'Alfredo', apellido: 'Saliens', edad: 19},
  {nombre: 'Matias', apellido: 'Mella', edad: 20},
  {nombre: 'El lider', apellido: 'Leo', edad: 20},
  {nombre: 'Samuel', apellido: 'El mejor', edad: 18}
]


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  //Table
  displayedColumns: string[] = ['Nombre', 'Apellido', 'Edad', 'Acciones'];
  dataSource = new MatTableDataSource<usuario>(usuarioDatos);

  //Filtro
  filtro: string = ''

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(
    private dialog: MatDialog,
  ) { }

  @ViewChild(MatPaginator)  paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }

  ngOnInit(): void {
  }

  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  setFiltro(evento: Event){
    console.log(evento)
    
    this.dataSource.filter = this.filtro.trim().toLowerCase();
  }
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "96%";
    this.dialog.open(AgregarAdministradorComponent,dialogConfig);  
  }
}


