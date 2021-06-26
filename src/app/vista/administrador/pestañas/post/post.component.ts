import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IVacante } from 'src/app/modelo/vacante';
import { ApiService } from 'src/app/servicios/Api/api.service';
import { AdministradorComponent } from '../../administrador.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //#region Variables 
    datoCargada: boolean = true;

    vacantes: IVacante[] = [];
  

    //Table
    displayedColumns: string[] = ['Compañia', 'Posición', 'Ubicación', 'Opciones'];
    dataSource = new MatTableDataSource<IVacante>(this.vacantes);

    //Filtro
    filtro: string = ''

    // MatPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];
  //#endregion
  constructor(private padreComp: AdministradorComponent) { }

  ngOnInit(): void {
    this.padreComp.getVacante().subscribe((respuesta: IVacante[]) =>{
      this.table(respuesta);
    });
  }

  table(usuarios: IVacante[]){
    if(usuarios == []) this.datoCargada = false;
    this.dataSource = new MatTableDataSource<IVacante>(usuarios);
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
    this.dataSource.filter = this.filtro.trim().toLowerCase();
  }
}
