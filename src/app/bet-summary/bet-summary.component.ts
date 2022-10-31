import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bet-summary',
  templateUrl: './bet-summary.component.html',
  styleUrls: ['./bet-summary.component.scss']
})
export class BetSummaryComponent implements OnInit {

  test: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
