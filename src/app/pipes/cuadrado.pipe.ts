import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuadrado'
})
export class CuadradoPipe implements PipeTransform {

  transform(val: number): number {
    return Math.sqrt(val);
  }

}
