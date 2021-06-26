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

const posterDatos: usuario[] = [
  {nombre: 'Junior', apellido: 'De Los Santos', edad: 17},
  {nombre: 'Elian', apellido: 'mtg', edad: 19},
  {nombre: 'Jose', apellido: 'Upia', edad: 20},
  {nombre: 'Keutyn', apellido: 'Ramirez', edad: 20},
]

@Component({
  selector: 'app-admit',
  templateUrl: './admit.component.html',
  styleUrls: ['./admit.component.css']
})

export class AdmitComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  //Table
  displayedColumns: string[] = ['Nombre', 'Apellido', 'Edad', 'Acciones'];
  dataSource = new MatTableDataSource<usuario>(posterDatos);

  //Filtro
  filtro: string = ''

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  
  @ViewChild(MatPaginator)  paginator!: MatPaginator;

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

  	setFiltro(evento: Event){
    console.log(evento)
    
    this.dataSource.filter = this.filtro.trim().toLowerCase();
  }

  agregar(){
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    // dialogConfig.height = "20%";
    this.dialog.open(AgregarAdministradorComponent,dialogConfig);  
  }
}
