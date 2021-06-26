import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUsuario } from 'src/app/modelo/usuario';
import { ApiService } from 'src/app/servicios/Api/api.service';
import { AdministradorComponent } from '../../administrador.component';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  datoCargada:boolean = true;

  //Table
  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'cedula', 'telefono'];
  dataSource = new MatTableDataSource<IUsuario>();

  //Filtro
  filtro: string = ''

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private _api: ApiService, private padreComp: AdministradorComponent) { 
  }

  @ViewChild(MatPaginator)  paginator!: MatPaginator;

  ngAfterViewInit(): void {
  }


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
}


