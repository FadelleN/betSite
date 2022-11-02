import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { BetButton } from '../models/bet-button.model';
import { BetMatchService } from '../service/bet-match.service';
import { BetInputService } from '../service/bet-input.service';

@Component({
  selector: 'app-bet-summary',
  templateUrl: './bet-summary.component.html',
  styleUrls: ['./bet-summary.component.scss']
})
export class BetSummaryComponent implements OnInit {

  selectedBets?: BetButton[];
  potentialGain?: number;

  constructor(protected betMatchService: BetMatchService, protected betInputService: BetInputService, private eRef: ElementRef) { }

  ngOnInit(): void { }

  @HostListener('document:click')
  clickout() {
    this.potentialGain = this.betInputService.betInput.bet
    this.selectedBets = []
    for (let myBetMatch of this.betMatchService.betMatchs) {
      for (const myBetButton of myBetMatch.betButtons) {
        if (myBetButton.clicked == true) {
          this.selectedBets?.push(myBetButton)
          this.potentialGain *= myBetButton.odd
        }
      }
    }
  }
}
