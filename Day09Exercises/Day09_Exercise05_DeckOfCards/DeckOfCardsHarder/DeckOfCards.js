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
    //create a method here that randomized the order of the cards in the array
    shuffle() {
        


    }
    //create a method here that returns an array of cards from the 
    //top of the deck.
    //The number of cards to put in the array should be passed in as a paramter
    //to this method.
    deal(numberOfCards) {
        
        

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
    //CREATE A NEW DECK OF CARDS USING THE suits AND faceValues ARRAYS
    //DEFINED ABOVE
    
    //SHUFFLE THEM USING THE SHUFFLE() METHOD YOU CREATED ABOVE
    
    //DEAL THE FIRST 5 CARDS FROM THE DECK AND STORE THEM IN 
    //THE ARRAY CALLED myHand

    //append a description of each of these 5 cards to our new handDiv
    for(let card of myHand) {
       let para = document.createElement("p");
       para.textContent = //CALL THE CARD METHOD HERE THAT RETURNS TEXT THAT IDENTIFIES THE CARD;
       handDiv.append(para);
    }
}
