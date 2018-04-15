 export class Card{
    constructor(rank: string, value: number, suit: string){
        this.rank = rank;
        this.value = value;
        this.suit = suit;
    }
    public rank: string;
    public value: number;
    public suit: string;
}