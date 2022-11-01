import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { BetButton } from '../models/bet-button.model';
import { BetMatchService } from '../service/bet-match.service';

@Component({
  selector: 'app-bet-summary',
  templateUrl: './bet-summary.component.html',
  styleUrls: ['./bet-summary.component.scss']
})
export class BetSummaryComponent implements OnInit {

  selectedBets?: BetButton[];

  constructor(protected betMatchService: BetMatchService, private eRef: ElementRef) { }

  ngOnInit(): void { }

  @HostListener('document:click')
  clickout() {
    this.selectedBets = []
    for (let myBetMatch of this.betMatchService.betMatchs) {
      for (const myBetButton of myBetMatch.betButtons) {
        if (myBetButton.clicked == true) {
          this.selectedBets?.push(myBetButton)
        }
      }
    }
  }
}
