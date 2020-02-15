import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, inputName: string, toWhat: string) {
    if (value.length === 0 || inputName === '' || inputName === undefined) {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
        if (item[toWhat] === inputName ) {
          resultArray.push(item);
        }
      }
    return resultArray;
    }


}
