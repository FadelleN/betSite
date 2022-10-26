import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetMatchComponent } from './bet-match.component';

describe('BetMatchComponent', () => {
  let component: BetMatchComponent;
  let fixture: ComponentFixture<BetMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
