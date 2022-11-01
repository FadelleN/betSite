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

  @Input() betButton!: BetButton;

  ngOnInit(): void {
  }

}
