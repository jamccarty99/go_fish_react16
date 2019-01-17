import PlayingCard from '../models/PlayingCard'
import Player from '../models/Player'

describe("Player", () => {
  let card = new PlayingCard('Ace', 'Spades');
  let name, player, playerHand;

  beforeEach(() => {
    name = 'Player 1';
    player = new Player(name);
    playerHand = player.hand()
  });

  describe("name", () => {
    it("should return the players name", () => {
      expect(player.name()).toEqual(name);
    });
  });

  describe("hand", () => {
    it("should return the players hand", () => {
      playerHand.push(card)
      expect(player.hand().length).toEqual(1);
    });
  });

  describe("sets", () => {
    it("should returns the players sets", () => {
      expect(player.sets().length).toEqual(0);
    });
  });

  describe("handCount", () => {
    it("should return the number of cards in hand", () => {
      expect(player.handCount()).toEqual(0);
      playerHand.push(card);
      expect(player.handCount()).toEqual(1);
    });
  });

  describe("setsCount", () => {
    it("should return the number of sets in hand", () => {
      expect(player.setsCount()).toEqual(0);
      player.sets().push(card);
      expect(player.setsCount()).toEqual(1);
    });
  });

  describe("addCards", () => {
    it("should add cards to players hand", () => {
      expect(player.handCount()).toEqual(0);
      player.addCards(card);
      expect(player.handCount()).toEqual(1);
    });
  });

  describe("isEmpty", () => {
    it("should return true if hand is empty", () => {
      expect(player.isEmpty()).toEqual(true);
      player.addCards(card);
      expect(player.isEmpty()).toEqual(false);
    });
  });

  // describe("ranksInHand", () => {
  //   it("checks if player has the rank requested", () => {
  //     playerHand.push(card)
  //     expect(player.hasAny()).toEqual(true);
  //     player.addCards(card);
  //     expect(player.hasAny()).toEqual(false);
  //   });
  // });

  // describe("hasAny", () => {
  //   it("checks if player has the rank requested", () => {
  //     playerHand.push(card)
  //     let requested = player.hasAny('Ace')
  //     expect(requested).toMatch('Ace');
  //     player.addCards(requested);
  //     expect(player.hasAny('Ace')).toEqual([]);
  //   });
  // });
});
