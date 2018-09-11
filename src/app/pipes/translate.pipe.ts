import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  translations: any = { herbalism: 'herboristerie' };
  transform(value: any, args?: any): any {
    return this.translations[value] || value;
  }
}
