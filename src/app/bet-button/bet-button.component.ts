import { Component, OnInit, Input } from '@angular/core';
import { BetButton } from '../models/bet-button.model';

@Component({
  selector: 'app-bet-button',
  templateUrl: './bet-button.component.html',
  styleUrls: ['./bet-button.component.scss']
})
export class BetButtonComponent implements OnInit {

  town!: string;
  odd!: number;

  clicked!: boolean;


  @Input() betButton!: BetButton;

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
