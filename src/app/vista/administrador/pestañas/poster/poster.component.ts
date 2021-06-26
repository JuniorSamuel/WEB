import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUsuario } from 'src/app/modelo/usuario';
import { ApiService } from 'src/app/servicios/Api/api.service';
import { AdministradorComponent } from '../../administrador.component';
import { AdmitComponent } from '../admit/admit.component';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  datoCargada: boolean = true;

  constructor(private _api: ApiService, private padreComp: AdministradorComponent) { }

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
}
