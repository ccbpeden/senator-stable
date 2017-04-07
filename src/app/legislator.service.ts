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

  newLegislator(legislator: Legislator){
    this.legislators.push(legislator);
  }

  getLegislatorByKey(key: string){
    return this.angularFire.database.object('legislators/' + key);
  }

  editLegislator(localLegislator, newName, newPosition, newParty, newConstituency, newWeakness, newDebt, newImgurl){
    var legislatorEntryInFirebase = this.getLegislatorByKey(localLegislator.$key);
    legislatorEntryInFirebase.update({name: newName, position: newPosition, party: newParty, constituency: newConstituency, weakness: newWeakness, debt: newDebt});
  }

  deleteLegislator(key) {
    let legislatorEntryInFirebase = this.getLegislatorByKey(key);
    legislatorEntryInFirebase.remove();
  }

}
