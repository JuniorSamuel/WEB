import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';



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

export const materialComponent = [
    MatTableModule,
    MatPaginatorModule
]