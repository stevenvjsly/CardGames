import { Component } from '@angular/core';
import { Card } from '../models/card';
import { CARDS } from '../models/cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  cards = CARDS;

  // General Playing Card Vars and Logic
  DECKSIZE = 52;
  hand = [];
  haveCards = false;

  // Blackjack Specific Vars and Logic
  busted = false;
  stayed = false;
  aceCheck = false;
  aceAsEleven = false;
  score = 0;
  blackjack = false;
  shuffledDeck = this.shuffle();
  message = "Score: " + this.score;
  // --------------------------------------------------------
  // dealerHand = [];
  // dealerScore = 0;


  drawHand() {
    this.drawCard();
    this.addToScore();
    this.drawCard();
    this.addToScore();
    this.blackjackCheck();
    this.messageGen();
    this.haveCards = true;
    console.log("score: ", this.score);
    console.log("aceAsEleven: ", this.aceAsEleven);
    console.log("aceCheck: ", this.aceCheck);
    console.log("busted: ", this.busted);
  }

  hit() {
    this.drawCard();
    this.addToScore();
    this.bustCheck();
    this.messageGen();
    console.log("score: ", this.score);
    console.log("aceAsEleven: ", this.aceAsEleven);
    console.log("aceCheck: ", this.aceCheck);
    console.log("busted: ", this.busted);
  }

  shuffle() {
    let shuffledDeck = [];
    let deck = this.cards.slice();

    for (var i = 0; i < this.DECKSIZE; i++) {
      let randNum = Math.floor((Math.random() * deck.length));
      shuffledDeck[i] = deck[randNum];
      deck.splice(randNum, 1);
    }
    return shuffledDeck;
  }

  newDeal() {
    this.score = 0;
    this.hand = [];
    this.haveCards = false;
    this.shuffledDeck = this.shuffle();
    this.busted = false;
    this.stayed = false;
    this.blackjack = false;
    this.aceCheck = false;
    this.aceAsEleven = false;
    this.message = "Score: " + this.score;
  }

  bustCheck() {
    if (this.score > 21 && this.aceAsEleven && !this.aceCheck) {
      this.score -= 10;
      this.aceCheck = true;
      console.log("score: ", this.score);
      console.log("aceAsEleven: ", this.aceAsEleven);
      console.log("aceCheck: ", this.aceCheck);
      console.log("busted: ", this.busted);
    } else if (this.score > 21) {
      this.busted = true;
    }
  }

  blackjackCheck() {
    if (this.score == 21) {
      this.blackjack = true;
      this.stayed = true;
    }
  }

  stay() {
    this.stayed = true;
    this.messageGen();
  }

  addToScore() {
    if ((this.hand[this.hand.length - 1].rank == "A") && (this.score + 11 <= 21)) {  // Ace case
      this.score += 11;
      this.aceAsEleven = true;
    } else {
      this.score += this.hand[this.hand.length - 1].value;
    }
  }

  drawCard() {
    this.hand.push(this.shuffledDeck.pop());
  }

  messageGen() {
    if (!this.busted && !this.stayed && !this.blackjack) {
      this.message = "Score: " + this.score;
    } else if (this.blackjack) {
      this.message = "blackjack!";
    } else if (this.stayed && !this.blackjack) {
      this.message = "stayed with " + this.score;
    } else if (this.busted) {
      this.message = "busted!";
    }
  }





}
