import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetInputComponent } from './bet-input.component';

describe('BetInputComponent', () => {
  let component: BetInputComponent;
  let fixture: ComponentFixture<BetInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
