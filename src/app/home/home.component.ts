import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { LegislatorService } from '../legislator.service';
import { Legislator } from '../legislator.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LegislatorService]
})

export class HomeComponent implements OnInit {
  legislators;


  constructor(private router: Router, private legislatorService: LegislatorService) { }

  ngOnInit() {
    this.legislatorService.getLegislators().subscribe(dataLastEmittedFromObserver => {
      this.legislators = dataLastEmittedFromObserver;
      console.log(this.legislators);
    });
  }

  goToLegislator(key){
    this.router.navigate(['legis-detail'], key);
  }



}
