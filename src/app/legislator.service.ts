import { Injectable } from '@angular/core';
import { Legislator } from './legislator.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class LegislatorService {
  legislators: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.legislators = angularFire.database.list('legislators');
  }

  getLegislators(){
    return this.legislators;
  }

  addLegislator(newLegislator: Legislator){
    this.legislators.push(newLegislator);
  }

  getLegislatorByKey(key: string){
    return this.angularFire.database.object('legislators/' + key);
  }

  updateLegislator(legislator, newName, newPosition, newParty, newConstituency, newWeakness, newDebt){
    var legislatorEntryInFirebase = this.getLegislatorByKey(legislator.$key);
    legislatorEntryInFirebase.update({name: newName, position: newPosition, party: newParty, constituency: newConstituency, weakness: newWeakness, debt: newDebt});
  }

  deleteLegislator(legislator) {
    let legislatorEntryInFirebase = this.getLegislatorByKey(legislator.$key);
    legislatorEntryInFirebase.remove();
  }

}
