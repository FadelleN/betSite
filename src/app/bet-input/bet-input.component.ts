import { Component, OnInit } from '@angular/core';
import { BetInputService } from '../service/bet-input.service';

@Component({
  selector: 'app-bet-input',
  templateUrl: './bet-input.component.html',
  styleUrls: ['./bet-input.component.scss']
})
export class BetInputComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private betInputService: BetInputService) {  }

  onKey(event: any) {
    this.betInputService.betInput.bet = event.target.value;
  }

}
