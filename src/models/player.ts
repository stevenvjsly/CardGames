import {Card} from "./card";
export class Player {
    constructor(name: string, score: number, hand: Card[]){
        this.name = name;
        this.score = score;
        this.hand = hand;
    }
    public name: string;
    public score: number;
    public hand: Card[];
}