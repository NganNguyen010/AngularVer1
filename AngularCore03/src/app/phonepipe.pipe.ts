import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonepipe'
})
export class PhonepipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = '(+84)' + value.replace(/-/g, ''); 
    return value;
  }

}
