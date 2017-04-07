import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { LegislatorService } from '../legislator.service';
import { Legislator } from '../legislator.model';

@Component({
  selector: 'app-censor',
  templateUrl: './censor.component.html',
  styleUrls: ['./censor.component.css'],
  providers: [LegislatorService]
})
export class CensorComponent implements OnInit {
  legislators;
  selectedLegislatorKey = null;
  newSenatorFormClicked = false;

  constructor(private router: Router, private legislatorService: LegislatorService) { }

  ngOnInit() {
    this.legislatorService.getLegislators().subscribe(dataLastEmittedFromObserver => {
      this.legislators = dataLastEmittedFromObserver;
    });
  }

  selectLegislator(key){
    this.selectedLegislatorKey = key;
  }

  OpenAddSenatorForm(){
    this.newSenatorFormClicked = true;
  }

  destroyLegislator(key){
    if(confirm("Are you sure you wish to erase the honorable gentleman from your records?  This action cannot be undone.")){
      this.legislatorService.deleteLegislator(key);
    }
  }

}
