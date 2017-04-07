import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegisDetailComponent } from './legis-detail.component';

describe('LegisDetailComponent', () => {
  let component: LegisDetailComponent;
  let fixture: ComponentFixture<LegisDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegisDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
