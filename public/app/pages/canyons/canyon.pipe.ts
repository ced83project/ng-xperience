import {Injectable, Pipe, PipeTransform} from '@angular/core';

import { Canyon } from './canyon';

@Pipe({
  name: 'canyonLevelFilter'
})
@Injectable()
export class CanyonLevelFilter implements PipeTransform {
  
  transform(canyons: any[], args: any[]): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    if (canyons==null) {
      return null;
    }

    return canyons.filter(canyon => canyon.levelId.indexOf(args[0]) !== -1);
  }

}