import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetButtonComponent } from './bet-button.component';

describe('BetButtonComponent', () => {
  let component: BetButtonComponent;
  let fixture: ComponentFixture<BetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
