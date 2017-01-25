import { Injectable } from '@angular/core';

import { Canyon } from './canyon';
import { CANYONS } from './mock-canyons';


@Injectable()
export class CanyonService {

  getCanyons(): Promise<Canyon[]> {
    return Promise.resolve(CANYONS);
  }

  getCanyonsSlowly(): Promise<Canyon[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getCanyons()), 2000);
    });
  }

  getCanyon(id: number): Promise<Canyon> {
    return this.getCanyons()
               .then(canyons => canyons.find(canyon => canyon.id === id));
  }
}
