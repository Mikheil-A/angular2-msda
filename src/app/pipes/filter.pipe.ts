import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any[], term: string): any {
        if (value) {
            return value.filter((x: any) =>
                x.name.toLowerCase().startsWith(term.toLowerCase()));
        }

    }
}
