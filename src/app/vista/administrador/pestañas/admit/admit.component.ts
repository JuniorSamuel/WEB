import { AgregarAdministradorComponent } from 'src/app/vista/agregar-administrador/agregar-administrador.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { IUsuario } from 'src/app/modelo/usuario';
import { DatosService } from 'src/app/servicios/cargar/datos.service';

@Component({
  selector: 'app-admit',
  templateUrl: './admit.component.html',
  styleUrls: ['./admit.component.css']
})

export class AdmitComponent implements OnInit {

  // constructor(
  //   private dialog: MatDialog,
  // ) { }
 
  datoCargada: boolean = true;
   //Table
   displayedColumns: string[] =['nombre', 'correo', 'Acciones'];
   dataSource = new MatTableDataSource<IUsuario>();
 
   //Filtro
   filtro: string = ''
 
   // MatPaginator Inputs
   length = 100;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private dialog: MatDialog, private datos: DatosService) { }

  ngOnInit(): void {
    this.datos.getUsuario().subscribe((respuesta: IUsuario[]) =>{
      this.table(respuesta.filter(x => { return x.idRol == 1}));
    });
  }

  table(usuarios: IUsuario[]){
    if(usuarios == []) this.datoCargada = false;
    this.dataSource = new MatTableDataSource<IUsuario>(usuarios);
    this.dataSource.paginator = this.paginator;
    
  }

  
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
  onDetalle(usuario: IUsuario, editar: boolean){
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "96%";
    dialogConfig.data = {usuario, editar};
    this.dialog.open(AgregarAdministradorComponent,dialogConfig);  
  }

}
