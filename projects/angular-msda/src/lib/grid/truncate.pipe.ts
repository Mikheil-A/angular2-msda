import {Pipe, PipeTransform} from '@angular/core';



@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let str: string = value;

    if (str.length > 25) {
      str = str.substring(0, 25) + '...';
    }
    return str;
  }

}
