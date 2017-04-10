import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LegislatorService } from '../legislator.service';
import { Legislator } from '../legislator.model';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-new-legis',
  templateUrl: './new-legis.component.html',
  styleUrls: ['./new-legis.component.css'],
  providers: [LegislatorService]
})
export class NewLegisComponent implements OnInit {
  @Output() addClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addLegislator(newName, newPosition, newParty, newConstituency1, newConstituency2, newConstituency3, newWeakness1, newWeakness2, newWeakness3, newDebt, newImgurl){
    newDebt = parseInt(newDebt);
    var newWeakness = [];
    if(newWeakness1 != ""){
      newWeakness.push(newWeakness1);
    };
    if(newWeakness2 != ""){
      newWeakness.push(newWeakness2);
    };
    if(newWeakness3 != ""){
      newWeakness.push(newWeakness3);
    };
    var newConstituency = [];
    if(newConstituency1 != ""){
      newConstituency.push(newConstituency1);
    };
    if(newConstituency2 != ""){
      newConstituency.push(newConstituency2);
    };
    if(newConstituency3 != ""){
      newConstituency.push(newConstituency3);
    };
    if(newName!="" && newPosition!="" && newParty!="" && newConstituency!=null && newWeakness!=null && typeof(newDebt)==="number" && newImgurl!="")
    {
      var newLegislator = new Legislator(newName, newPosition, newParty, newConstituency, newWeakness, newDebt, newImgurl);
      this.addClick.emit(newLegislator);
    } else {
      alert("Sorry, all new legislators must have all fields other than weaknesses and constituencies filled out and least one each of weaknesses & constituencies");
    }
  }
}
