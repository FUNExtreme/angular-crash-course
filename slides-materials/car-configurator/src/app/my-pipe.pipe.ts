import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  prefix = 'km/h';

  transform(value: any, args?: any): any {
    return value + this.prefix;
  }
}


