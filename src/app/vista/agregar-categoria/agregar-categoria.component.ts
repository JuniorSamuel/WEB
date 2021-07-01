import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ICategoria } from 'src/app/modelo/categoria';
import { DatosService } from 'src/app/servicios/cargar/datos.service';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent implements OnInit {

  categoria: ICategoria | undefined;
  formCagoria = this.formBuilder.group({
    nombre: ['', Validators.required]
  });
  constructor(private _dato: DatosService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.categoria = {
      idCategoria: 0,
      nombre: this.formCagoria.value.nombre
    }
    this._dato.postCategoria(this.categoria);
  }
}
