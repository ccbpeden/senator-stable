import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../providers/auth.service';
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
  selectedParty = "All";
  selectedPosition = "Senator";
  isLoggedIn = false;
  user_email = null;
  user_displayName = null;

  constructor(private router: Router, private legislatorService: LegislatorService, private authService: AuthService) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          console.log(this.user_email);
        }
      }
    );
  }

  ngOnInit() {
    this.legislatorService.getLegislators().subscribe(dataLastEmittedFromObserver => {
      this.legislators = dataLastEmittedFromObserver;
    });

  }

  goToLegislator(key){
    console.log(key);
    this.router.navigate(['legis-detail', key]);
  }

  onChangeParty(optionFromMenu) {
    this.selectedParty = optionFromMenu;
  }

  onChangePosition(optionFromMenu) {
    this.selectedPosition = optionFromMenu;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
