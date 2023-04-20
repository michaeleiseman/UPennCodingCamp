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
document.getElementsByTagName("button")[0].addEventListener('click', deal, false);
let suits = ["hearts", "diamonds", "clubs", "spades"];
let faceValues = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
let myDeck = new Deck(suits, faceValues);
myDeck.shuffle();
function deal() {
    let myHand = myDeck.deal(5);
    for(let card of myHand) {
       let para = document.createElement("p");
       para.textContent = card.describe();
       document.body.append(para);
    }
}
