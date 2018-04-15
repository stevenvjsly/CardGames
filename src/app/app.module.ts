import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlackjackPlayerComponent } from './blackjack-player/blackjack-player.component';
import { BlackjackDealerComponent } from './blackjack-dealer/blackjack-dealer.component';


@NgModule({
  declarations: [
    AppComponent,
    BlackjackPlayerComponent,
    BlackjackDealerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
