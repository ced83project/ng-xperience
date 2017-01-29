import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Canyon } from './canyon';
import { CANYONS } from './mock-canyons';


@Injectable()
export class CanyonService {

  private canyons$: FirebaseListObservable<Canyon[]>;

  constructor(private af:AngularFire) { }

  getAllCanyons(): Observable<Canyon[]> {
    return this.af.database.list('/canyons');
  }

  getCanyonsGreen(): Observable<Canyon[]> {
    return this.af.database.list('/canyons', {
      query: {
        orderByChild: 'levelId',
        equalTo: '1',
      }
    });
  }
  getCanyonsBlue(): Observable<Canyon[]> {
    return this.af.database.list('/canyons', {
      query: {
        orderByChild: 'levelId',
        equalTo: '2',
      }
    });
  }
  getCanyonsRed(): Observable<Canyon[]> {
    return this.af.database.list('/canyons', {
      query: {
        orderByChild: 'levelId',
        equalTo: '3',
      }
    });
  }

}
