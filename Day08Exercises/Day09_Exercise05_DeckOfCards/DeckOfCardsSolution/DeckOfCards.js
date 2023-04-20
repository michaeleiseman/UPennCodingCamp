class Deck {
    constructor(suits, faceValues) {
        this.suits = suits,
        this.faceValues = faceValues,
        this.cards = this.constructCards();
    }
    constructCards() {
        let cards = [];
        for(let suit of this.suits) {
            for(let faceValue of this.faceValues) {
                cards.push(new Card(suit, faceValue));
            }
        }
        return cards;
    }
    shuffle() {
        let shuffledCards = [];
        while(this.cards.length > 0) {
            //pick a card, any card
            let index = Math.floor(this.cards.length * Math.random());
            shuffledCards.push(this.cards.splice(index, 1)[0]);
        }
        this.cards = shuffledCards;
    }
    deal(numberOfCards) {
        let hand = [];
        for(let i = 0; i < numberOfCards; i++) {
            hand.push(this.cards.pop());
        }
        return hand;
    }
}
class Card {
    constructor(suit, faceValue) {
        this.suit = suit;
        this.faceValue = faceValue;
    }
    describe() {
        return "The " + this.faceValue + " of " + this.suit;
    }
}
let suits = ["hearts", "diamonds", "clubs", "spades"];
let faceValues = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
let myDeck = new Deck(suits, faceValues);
myDeck.shuffle();
let myhand = myDeck.deal(5);