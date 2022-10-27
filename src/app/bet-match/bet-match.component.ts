import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-match',
  templateUrl: './bet-match.component.html',
  styleUrls: ['./bet-match.component.scss']
})
export class BetMatchComponent implements OnInit {

  fakeArray = new Array(3);

  constructor() { }

  ngOnInit(): void {
  }

}
