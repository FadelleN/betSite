import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BetSummaryComponent } from './bet-summary/bet-summary.component';
import { BetInputComponent } from './bet-input/bet-input.component';
import { BetListComponent } from './bet-list/bet-list.component';
import { BetMatchComponent } from './bet-match/bet-match.component';
import { BetButtonComponent } from './bet-button/bet-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BetSummaryComponent,
    BetInputComponent,
    BetListComponent,
    BetMatchComponent,
    BetButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
