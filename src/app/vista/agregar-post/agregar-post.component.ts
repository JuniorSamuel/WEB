import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
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
  
  // postForm = new FormGroup({
  //   idCategoria: new FormControl ('',[Validators.required]),
  //   campania: new FormControl ('',[Validators.required]),
  //   posicion: new FormControl ('', [Validators.required]),
  //   descripcion: new FormControl('',[ Validators.required]),
  //   telefono: new FormControl('', [Validators.required]),
  //   correo: new FormControl('', [Validators.required, Validators.email]),
  //   horario: new FormControl('', [Validators.required]),
  //   ubicacion: new FormControl('',[Validators.required])
  // });
    postForm = this.formBuilder.group({
    idCategoria: ['',Validators.required],
    campania: ['',Validators.required],
    posicion: ['', Validators.required],
    descripcion: ['',[Validators.required, Validators.maxLength(80)]],
    telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
    correo: ['',[Validators.required, Validators.email]],
    horario: ['', Validators.required],
    ubicacion: ['',Validators.required]
  });
// get campania(){return this.postForm.get('campania'); }

  constructor(private _api: ApiService, private _datos: DatosService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }



  onSubmit(){
    this.vacante = 
      { idVacante: 0,
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
}
