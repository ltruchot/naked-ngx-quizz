import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score',
})
export class ScorePipe implements PipeTransform {
  transform(value: number, args?: any): any {
    if (!value || value === Infinity) {
      return '0 %';
    } else {
      return Math.round(value * 100) + '%';
    }
  }
}
