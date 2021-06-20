import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatTableModule,
    MatPaginatorModule
  ],

  exports : [
    MatTableModule,
    MatPaginatorModule
  ]
})

export class MaterialModule { }
