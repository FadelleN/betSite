import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-button',
  templateUrl: './bet-button.component.html',
  styleUrls: ['./bet-button.component.scss']
})
export class BetButtonComponent implements OnInit {

  clicked!: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.clicked = false
  }

  chooseBet() {
    if (this.clicked == false) {
      this.clicked = true
    }
    else {
      this.clicked = false
    }
  }

}
