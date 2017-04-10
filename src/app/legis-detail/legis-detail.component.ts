import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';

import { LegislatorService } from '../legislator.service';
import { Legislator } from '../legislator.model';
import { AuthService } from '../providers/auth.service';


@Component({
  selector: 'app-legis-detail',
  templateUrl: './legis-detail.component.html',
  styleUrls: ['./legis-detail.component.css'],
    providers: [LegislatorService]
})
export class LegisDetailComponent implements OnInit {
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
}
