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

  constructor() { }

  ngOnInit(): void {
  }

}
