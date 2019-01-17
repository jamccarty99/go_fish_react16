import React from 'react';
import ReactDOM from 'react-dom';
import PlayingCard from '../models/PlayingCard'


describe("PlayingCard", () => {
  let rank
  let suit
  let card

  beforeEach(() => {
    rank = 'A';
    suit = 'S';
    card = new PlayingCard(rank, suit);
  });

  describe("rank", () => {
    it("should have a rank", () => {
      expect(card.rank()).toEqual(rank);
    });
  });

  describe("suit", () => {
    it("should have a suit", () => {
      expect(card.suit()).toEqual(suit);
    });
  });
  // it("should have a value", function() {
  //   expect(card.value).toEqual(13);
  // });
});
