import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';

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

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.legislatorKey = urlParameters['key'];
      console.log(this.legislatorKey);
    });
    this.legislatorService.getLegislatorByKey(this.legislatorKey).subscribe(dataLastEmittedFromObserver => {
      if (dataLastEmittedFromObserver){
        this.legislatorToDisplay = dataLastEmittedFromObserver;
        console.log(this.legislatorToDisplay);
      };
    });
  }

  updateLegislator(selectedSenator){
    this.legislatorService.updateLegislator(selectedSenator);
  }

}
