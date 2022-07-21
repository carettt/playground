function randRange(max: number): number {
    return Math.round(Math.random() / (1 / (max - 1)));
}

class Deck {
    cards: string[] = new Array<string>();

    constructor(totalJokers = 0, decks = 1) {
        let suits: string[] = ['S', 'T', 'H', 'D'];
        let ranks: string[] = new Array<string>();
        for (let i = 1; i < 11; i++) {
            ranks.push(i.toString());
        }
        ranks = ranks.concat(['J', 'Q', 'K']);

        suits.forEach((suit) => {
            let currentSuit = ranks.map((rank) => {
                return rank + suit;
            });

            for (let i = 0; i < decks; i++) {
                this.cards = this.cards.concat(currentSuit);
            }
        });

        for (let i = 0; i < totalJokers; i++) {
            this.cards.push('X');
        }
    }

    shuffle() {
        let shuffled: string[] = new Array<string>();
        let unshuffled: string[] = [...this.cards];

        // unshuffled.forEach(card => {
        //     let empty = false;
        //     let slot;
        //     while (!empty) {
        //         slot = randRange(shuffled.length);
        //         empty = !shuffled[slot];
        //     }
        //     shuffled[slot] = card;
        //     unshuffled.
        // })
    }
}

let deck = new Deck();

console.log(deck.cards.length);
