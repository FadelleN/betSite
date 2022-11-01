import { Component, OnInit, Input } from '@angular/core';
import { BetButton } from '../models/bet-button.model'
import { BetMatch } from '../models/bet-match.model';

@Component({
  selector: 'app-bet-match',
  templateUrl: './bet-match.component.html',
  styleUrls: ['./bet-match.component.scss']
})
export class BetMatchComponent implements OnInit {

  @Input() betMatch!: BetMatch;
  betClicked?: BetButton;

  ngOnInit(): void {
  }

  chooseBet(betClicked: BetButton) {
    if (betClicked.clicked == true) {
      betClicked.clicked = false
      return
    }

    for (const betButton in this.betMatch.betButtons) {
      this.betMatch.betButtons[betButton].clicked = false
    }
    
    this.betMatch.betButtons[betClicked.id - 1].clicked = true
  }
}
