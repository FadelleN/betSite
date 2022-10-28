import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.scss']
})
export class BetListComponent implements OnInit {

  fakeArray = new Array(3);

  constructor() { }

  ngOnInit(): void {

  }

}
