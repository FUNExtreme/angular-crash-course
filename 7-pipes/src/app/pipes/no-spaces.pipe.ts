import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noSpaces'
})
export class NoSpacesPipe implements PipeTransform {

  transform(value: any, replaceBy: string = '-'): any {
    if (typeof(value) !== 'string') {
      return value;
    }

    return value.replace(' ', replaceBy);
  }

}
