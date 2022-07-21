function randRange(max) {
    return Math.round(Math.random() / (1 / (max - 1)));
}

class Deck {
    cards = [];

    constructor(totalJokers = 0, decks = 1) {
        let suits = ['S', 'T', 'H', 'D'];
        let ranks = [];
        for (let i = 1; i < 11; i++) {
            ranks.push(i.toString());
        }
        ranks = ranks.concat(['J', 'Q', 'K']);

        suits.forEach(suit => {
            let currentSuit = ranks.map(rank => {
                return rank + suit;
            });

            for (let i = 0; i < decks; i++) {
                this.cards = this.cards.concat(currentSuit);
            }
        })

        for (let i = 0; i < totalJokers; i++) {
            this.cards.push('X');
        }
    }

    shuffle() {
        shuffled = [null * this.cards.length];
        unshuffled = [...this.cards];

        unshuffled.forEach(card => {
            let empty = false;
            let slot;
            while (!empty) {
                slot = randRange(shuffled.length);
                empty = !shuffled[slot];
            }
            shuffled[slot] = card;
            unshuffled. 
        })
    }
}

let deck = new Deck();

console.log(deck.cards.length);