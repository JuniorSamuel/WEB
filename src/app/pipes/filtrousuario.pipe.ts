import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrousuario'
})
export class FiltrousuarioPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
