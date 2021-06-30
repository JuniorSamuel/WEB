import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICategoria } from 'src/app/modelo/categoria';
import { DatosService } from 'src/app/servicios/cargar/datos.service';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent implements OnInit {

  categoria: ICategoria | undefined;
  formCagoria = new FormGroup({
    idCategoria: new FormControl(''),
    nombre: new FormControl('', [Validators.required])
  });
  constructor(public dialogRef: MatDialogRef<AgregarCategoriaComponent>, private _dato: DatosService, @Inject(MAT_DIALOG_DATA) public editar: ICategoria) { }

  ngOnInit(): void {
    if(this.editar != null){
      this.onEdit();
    }
  }

  onSubmit() {
    if (this.editar == null) {
      this.categoria = {
        idCategoria: 0,
        nombre: this.formCagoria.value.nombre
      }
      this._dato.postCategoria(this.categoria);
    } else {
      this.categoria = {
        idCategoria: this.formCagoria.value.idCategoria,
        nombre: this.formCagoria.value.nombre
      }
      this._dato.putCategoria(this.categoria);
    }

    this.onClickNo()
  }

  onClickNo(): void {
    this.dialogRef.close();
  }

  onEdit() {
    this.formCagoria.controls['idCategoria'].setValue(this.editar.idCategoria);
    this.formCagoria.controls['nombre'].setValue(this.editar.nombre);
  }
}
