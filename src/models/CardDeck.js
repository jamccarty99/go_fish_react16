import PlayingCard from './PlayingCard.js'

class CardDeck {
  constructor(cards) {
    this._cards = (cards ? cards : this.fullDeck());
  }

  static ranks() { return [, '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'] };
  static suits() { return [, 'Clubs', 'Diamonds', 'Hearts', 'Spades'] };

  cards() {
    return this._cards
  }

  shuffle() {
    for (let i = this.cardCount() - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards()[i], this.cards()[j]] = [this.cards()[j], this.cards()[i]];
    }
  }

  deal() {
    return this.cards().pop();
  }

  cardCount() {
    return this.cards().length
  }

  isEmpty() {
    return Boolean(this.cards() == 0);
  }

  fullDeck() {
    CardDeck.ranks().reduce((memo, rank) => memo.concat(CardDeck.suits().map((suit) => new PlayingCard(rank, suit)))).split(",")
  }
}

export default CardDeck;
