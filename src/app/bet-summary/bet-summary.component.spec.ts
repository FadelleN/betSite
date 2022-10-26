import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSummaryComponent } from './bet-summary.component';

describe('BetSummaryComponent', () => {
  let component: BetSummaryComponent;
  let fixture: ComponentFixture<BetSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
