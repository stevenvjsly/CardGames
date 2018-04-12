import { Component } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  cards = [
    new Card('A', 1, 'Hearts'),
    new Card('2', 2, 'Hearts'),
    new Card('3', 3, 'Hearts'),
    new Card('4', 4, 'Hearts'),
    new Card('5', 5, 'Hearts'),
    new Card('6', 6, 'Hearts'),
    new Card('7', 7, 'Hearts'),
    new Card('8', 8, 'Hearts'),
    new Card('9', 9, 'Hearts'),
    new Card('10', 10, 'Hearts'),
    new Card('J', 10, 'Hearts'),
    new Card('Q', 10, 'Hearts'),
    new Card('K', 10, 'Hearts'),
    new Card('A', 1, 'Clubs'),
    new Card('2', 2, 'Clubs'),
    new Card('3', 3, 'Clubs'),
    new Card('4', 4, 'Clubs'),
    new Card('5', 5, 'Clubs'),
    new Card('6', 6, 'Clubs'),
    new Card('7', 7, 'Clubs'),
    new Card('8', 8, 'Clubs'),
    new Card('9', 9, 'Clubs'),
    new Card('10', 10, 'Clubs'),
    new Card('J', 10, 'Clubs'),
    new Card('Q', 10, 'Clubs'),
    new Card('K', 10, 'Clubs'),
    new Card('A', 1, 'Spades'),
    new Card('2', 2, 'Spades'),
    new Card('3', 3, 'Spades'),
    new Card('4', 4, 'Spades'),
    new Card('5', 5, 'Spades'),
    new Card('6', 6, 'Spades'),
    new Card('7', 7, 'Spades'),
    new Card('8', 8, 'Spades'),
    new Card('9', 9, 'Spades'),
    new Card('10', 10, 'Spades'),
    new Card('J', 10, 'Spades'),
    new Card('Q', 10, 'Spades'),
    new Card('K', 10, 'Spades'),
    new Card('A', 1, 'Diamonds'),
    new Card('2', 2, 'Diamonds'),
    new Card('3', 3, 'Diamonds'),
    new Card('4', 4, 'Diamonds'),
    new Card('5', 5, 'Diamonds'),
    new Card('6', 6, 'Diamonds'),
    new Card('7', 7, 'Diamonds'),
    new Card('8', 8, 'Diamonds'),
    new Card('9', 9, 'Diamonds'),
    new Card('10', 10, 'Diamonds'),
    new Card('J', 10, 'Diamonds'),
    new Card('Q', 10, 'Diamonds'),
    new Card('K', 10, 'Diamonds')
  ];

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
