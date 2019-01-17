import CardDeck from '../models/CardDeck.js'
import PlayingCard from '../models/PlayingCard.js'

describe("CardDeck", () => {
  let card
  let cards
  let deck

  describe("cards", () => {
    it("should have cards", () => {
      card = [new PlayingCard('Ace', 'Spades')];
      deck = new CardDeck(card);
      expect(deck.cards()).toEqual(card);
    });

    it("should return 52 cards of deck if no cards were passed in", () => {
      deck = new CardDeck();
      expect(deck.cardCount()).toEqual(52);
    })
  });

  describe("shuffle", () => {
    it("should shuffle the cards", () => {
      cards = [new PlayingCard('Ace', 'Spades'), new PlayingCard('King', 'Clubs'), new PlayingCard('Queen', 'Hearts')];
      deck = new CardDeck(cards);
      expect(deck.shuffle()).not.toEqual(cards);
    });
  });

  describe("deal", () => {
    it("should deal one card from the deck", () => {
      cards = [new PlayingCard('Ace', 'Spades'), new PlayingCard('King', 'Clubs'), new PlayingCard('Queen', 'Hearts')];
      deck = new CardDeck(cards);
      expect(deck.cardCount()).toEqual(3);
      deck.deal();
      expect(deck.cardCount()).toEqual(2);
    });
  });

  describe("isEmpty", () => {
    it("should return true if deck is empty", () => {
      card = [new PlayingCard('Ace', 'Spades')];
      deck = new CardDeck(card);
      expect(deck.isEmpty()).toEqual(false);
      deck.deal();
      expect(deck.isEmpty()).toEqual(true);
    });
  });

  describe("fullDeck", () => {
    it("should make an array of 52 cards", () => {
      deck = new CardDeck();
      expect(deck.cardCount()).toEqual(52);

    });
  });
});
