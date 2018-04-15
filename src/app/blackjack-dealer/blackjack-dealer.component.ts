import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CARDS } from '../../models/cards';
import { Player } from "../../models/player";

@Component({
  selector: 'app-blackjack-dealer',
  templateUrl: './blackjack-dealer.component.html',
  styleUrls: ['./blackjack-dealer.component.css']
})
export class BlackjackDealerComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }
  cards = CARDS;
  dealer = new Player("Player 1", 0, []);

  DECKSIZE = 52;
  // hand = [];
  haveCards = false;
  busted = false;
  stayed = false;
  aceCheck = false;
  aceAsEleven = false;
  // score = 0;
  blackjack = false;
  shuffledDeck = this.shuffle();
  message = "Score: " + this.dealer.score;
  // --------------------------------------------------------
  dealerHand = [];
  dealerScore = 0;


  drawHand(player: Player) {
    this.drawCard(player.hand);
    this.addToScore();
    this.drawCard(player.hand);
    this.addToScore();
    this.blackjackCheck();
    this.messageGen();
    this.haveCards = true;
    console.log("score: ", player.score);
    console.log("aceAsEleven: ", this.aceAsEleven);
    console.log("aceCheck: ", this.aceCheck);
    console.log("busted: ", this.busted);
  }

  hit(player: Player) {
    this.drawCard(player.hand);
    this.addToScore();
    this.bustCheck();
    this.messageGen();
    console.log("score: ", player.score);
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
    this.dealer.score = 0;
    this.dealer.hand = [];
    this.haveCards = false;
    this.shuffledDeck = this.shuffle();
    this.busted = false;
    this.stayed = false;
    this.blackjack = false;
    this.aceCheck = false;
    this.aceAsEleven = false;
    this.message = "Score: " + this.dealer.score;
  }

  bustCheck() {
    if (this.dealer.score > 21 && this.aceAsEleven && !this.aceCheck) {
      this.dealer.score -= 10;
      this.aceCheck = true;
      console.log("score: ", this.dealer.score);
      console.log("aceAsEleven: ", this.aceAsEleven);
      console.log("aceCheck: ", this.aceCheck);
      console.log("busted: ", this.busted);
    } else if (this.dealer.score > 21) {
      this.busted = true;
    }
  }

  blackjackCheck() {
    if (this.dealer.score == 21) {
      this.blackjack = true;
      this.stayed = true;
    }
  }

  stay() {
    this.stayed = true;
    this.messageGen();
  }

  addToScore() {
    if ((this.dealer.hand[this.dealer.hand.length - 1].rank == "A") && (this.dealer.score + 11 <= 21)) {  // Ace case
      this.dealer.score += 11;
      this.aceAsEleven = true;
    } else {
      this.dealer.score += this.dealer.hand[this.dealer.hand.length - 1].value;
    }
  }

  drawCard(hand) {
    hand.push(this.shuffledDeck.pop());
    console.log(this.dealer.hand);
  }

  messageGen() {
    if (!this.busted && !this.stayed && !this.blackjack) {
      this.message = "Score: " + this.dealer.score;
    } else if (this.blackjack) {
      this.message = "blackjack!";
    } else if (this.stayed && !this.blackjack) {
      this.message = "stayed with " + this.dealer.score;
    } else if (this.busted) {
      this.message = "busted!";
    }
  }





}




