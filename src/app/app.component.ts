import { Component } from '@angular/core';
import { BetButton } from './models/bet-button.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  betButtons!:  BetButton[];
  title = 'betSite';

  ngOnInit(): void {
    
  }
}
