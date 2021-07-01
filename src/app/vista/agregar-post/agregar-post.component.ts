import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IVacante } from 'src/app/modelo/vacante';
import { ApiService } from 'src/app/servicios/Api/api.service';
import { DatosService } from 'src/app/servicios/cargar/datos.service';

@Component({
  selector: 'app-agregar-post',
  templateUrl: './agregar-post.component.html',
  styleUrls: ['./agregar-post.component.css']
})
export class AgregarPostComponent implements OnInit {

  vacante: IVacante | undefined;

  postForm = new FormGroup({
    idCategoria: new FormControl('', [Validators.required]),
    campania: new FormControl('', [Validators.required]),
    posicion: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    horario: new FormControl('', [Validators.required]),
    ubicacion: new FormControl('', [Validators.required])
  });

  constructor(private _datos: DatosService, @Inject(MAT_DIALOG_DATA) public editar: IVacante) { }

  ngOnInit(): void {
    if (this.editar != null) {
      this.onEdit();
    } else {
      this.postForm.controls['horario'].setValue('Tiempo completo');
    }
  }



  onSubmit() {
    this.vacante =
    {
      idVacante: 0,
      idCategoria: this.postForm.value.idCategoria,
      compania: this.postForm.value.campania,
      posicion: this.postForm.value.posicion,
      descripcion: this.postForm.value.descripcion,
      telefono: this.postForm.value.telefono,
      correo: this.postForm.value.correo,
      horario: this.postForm.value.horario,
      ubicacion: this.postForm.value.ubicacion
    }
    this._datos.postVacante(this.vacante);
  }

  onEdit() {
    this.postForm.controls['idCategoria'].setValue(this.editar.idCategoria);
    this.postForm.controls['campania'].setValue(this.editar.compania);
    this.postForm.controls['posicion'].setValue(this.editar.posicion);
    this.postForm.controls['descripcion'].setValue(this.editar.descripcion);
    this.postForm.controls['telefono'].setValue(this.editar.telefono);
    this.postForm.controls['correo'].setValue(this.editar.correo);
    this.postForm.controls['horario'].setValue(this.editar.horario);
    this.postForm.controls['ubicacion'].setValue(this.editar.ubicacion);
  }
}
