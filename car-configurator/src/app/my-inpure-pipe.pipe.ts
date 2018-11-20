import { Pipe, PipeTransform } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Pipe({
  name: 'myInpurePipe',
  pure: false
})
export class MyInpurePipePipe implements PipeTransform {

  externalValue = '';

  constructor(myService: MyServiceService) {
    this.externalValue = myService.getValueAfter2Seconds();
  }

  transform(value: any, args?: any): any {
    return value + this.externalValue;
  }
}

