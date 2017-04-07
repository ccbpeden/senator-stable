import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LegislatorService } from '../legislator.service';
import { Legislator } from '../legislator.model';

@Component({
  selector: 'app-legis-edit',
  templateUrl: './legis-edit.component.html',
  styleUrls: ['./legis-edit.component.css'],
  providers: [LegislatorService]
})
export class LegisEditComponent implements OnInit {
  legislatorToDisplay;
  legislatorKey;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private legislatorService: LegislatorService) { }

  updateLegislator(newName,  newPosition,  newParty,  newConstituency1,  newConstituency2,  newConstituency3,  newWeakness1,  newWeakness2,  newWeakness3,  newDebt,
  newImgurl){
    if(this.legislatorToDisplay){
      console.log(newConstituency1);
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
        this.legislatorService.editLegislator(this.legislatorToDisplay, newName, newPosition, newParty, newConstituency, newWeakness, newDebt, newImgurl);
        this.router.navigate([''])
      } else {
        alert("Sorry, all you must have all fields other than weaknesses and constituencies filled out and least one each of weaknesses & constituencies");
      }
    }

  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.legislatorKey = urlParameters['key'];
      console.log(this.legislatorKey);
    });
    this.legislatorService.getLegislatorByKey(this.legislatorKey).subscribe(dataLastEmittedFromObserver => {
      if (dataLastEmittedFromObserver)
      {
      this.legislatorToDisplay = dataLastEmittedFromObserver;
      console.log(this.legislatorToDisplay);
      };
    });
  }

}
