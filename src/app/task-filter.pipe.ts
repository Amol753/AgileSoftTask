import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    if (args == 'completed') {
      return value.filter((res: any) => {
        return res.status == true;
      })
    }
    if (args == 'remaining') {
      return value.filter((res: any) => {
        return res.status == false;
      })
    }

    return value;
  }

}
