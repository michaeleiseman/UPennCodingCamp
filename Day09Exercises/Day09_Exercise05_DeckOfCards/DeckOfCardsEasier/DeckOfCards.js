class Deck {
    constructor(suits, faceValues) {
        this.suits = suits,
        this.faceValues = faceValues,
        this.cards = this.constructCards();
    }
    constructCards() {
        let cards = [];
        //Note that these nested for loops with make every combination of face value and suit
        //but the cards will not be in random order
        for(let suit of this.suits) {
            for(let faceValue of this.faceValues) {
                var card = //GENERATE A NEW CARD HERE USING suit AND faceValue AS PARAMETERS
                cards.push(card);
            }
        }
        return cards;
    }
    //a function that randomizes the order of elements in an array
    shuffle() {
        let shuffledCards = [];
        while(this.cards.length > 0) {
            //pick a card, any card from the new deck
            let index = Math.floor(this.cards.length * Math.random());
            //take the card out of the deck and place it on top of the suffled cards pile
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
//CREATE YOUR CARD CLASS HERE
//The card class should take its suit and face value as parameters and assign them
//as properties of the object it generates.
//Cards should also have a method that return text that identifies the card.







document.getElementsByTagName("button")[0].addEventListener('click', deal, false);
let suits = ["hearts", "diamonds", "clubs", "spades"];
let faceValues = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

function deal() {
    //clear any hand that is currently posted
    document.body.removeChild(document.getElementById("hand"));
    //create a place to post a new hand
    var handDiv = document.createElement("div");
    handDiv.id = "hand";
    document.body.appendChild(handDiv);
    //create a new deck of cards
    let myDeck = new Deck(suits, faceValues);
    //and shuffle them
    myDeck.shuffle();
    //take the first five cards from the shuffled deck
    let myHand = myDeck.deal(5);
    //append a description of each of these 5 cards to our new handDiv
    for(let card of myHand) {
       let para = document.createElement("p");
       para.textContent = //CALL THE CARD METHOD HERE THAT RETURNS TEXT THAT IDENTIFIES THE CARD;
       handDiv.append(para);
    }
}
