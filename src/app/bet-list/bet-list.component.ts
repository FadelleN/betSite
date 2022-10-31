import { Component, OnInit } from '@angular/core';
import { BetMatch } from '../models/bet-match.model';
import { BetMatchService } from '../service/bet-match.service';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.scss']
})
export class BetListComponent implements OnInit {

  betMatchs!: BetMatch[];

  constructor(private betMatchService: BetMatchService) { }

  ngOnInit(): void {
    this.betMatchs = this.betMatchService.betMatchs;
  }

}
