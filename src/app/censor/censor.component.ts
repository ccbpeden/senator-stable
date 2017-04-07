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
  selectedLegislator = null;
  newSenatorFormClicked = false;
  hideNewButton = true;
  showEditForm = false;

  constructor(private router: Router, private legislatorService: LegislatorService) { }

  ngOnInit() {
    this.legislatorService.getLegislators().subscribe(dataLastEmittedFromObserver => {
      this.legislators = dataLastEmittedFromObserver;
    });
  }

  selectLegislator(legislator){
    this.router.navigate(['legis-edit', legislator.$key]);
    console.log(legislator);
  }

  OpenAddSenatorForm(){
    this.newSenatorFormClicked = true;
    this.hideNewButton = false;
  }

  destroyLegislator(key){
    if(confirm("Are you sure you wish to erase the honorable gentleman from your records?  This action cannot be undone.")){
      this.legislatorService.deleteLegislator(key);
    }
  }

  addLegislator(legislator){
    this.legislatorService.newLegislator(legislator);
    this.newSenatorFormClicked = false;
  }

}
