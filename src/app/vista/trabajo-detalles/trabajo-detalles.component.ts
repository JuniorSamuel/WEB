import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IVacante } from 'src/app/modelo/vacante';

@Component({
  selector: 'app-trabajo-detalles',
  templateUrl: './trabajo-detalles.component.html',
  styleUrls: ['./trabajo-detalles.component.css']
})
export class TrabajoDetallesComponent implements OnInit {

  categoria!: string;
  vacante!: IVacante;
  constructor(private rutaParametro: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaParametro.params.subscribe((parametro: Params) => {
      console.log(parametro)
      
      // this.vacante = {
      //   idVacante: parametro.id, 
      //   idCategoria: 0, 
      //   compania: parametro.compania, 
      //   posicion: parametro.posicion,
      //   descripcion: parametro.descripcion,
      //   telefono: parametro.telenofo,
      //   correo: parametro.correo,
      //   horario: parametro.horario,
      //   ubicacion: parametro.ubicacion,
      // };
      // this.categoria = parametro.categoria;
    });
  }

}
