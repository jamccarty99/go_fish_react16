import PlayingCard from '../models/PlayingCard.js'
import CardDeck from '../models/CardDeck.js'
import Player from '../models/Player.js'
import Game from '../models/Game.js'

describe("Game", () => {
  let player, game, card, deck, largeGame;

  beforeEach(() => {
    player = "Player 1"
    game = new Game(player);
  });

  describe("_addPlayer", () => {
    it("should add a player to the game", () => {
      expect(game._addPlayer().name()).toEqual(player);
    });
  });

  describe("_addBots", () => {
    it("should add at least one bot to the game", () => {
      expect(game._botCount()).toEqual(1);
    });
  });

  describe("_createPlayers", () => {
    it("should create and return an array of new players", () => {
      expect(game.players()).toEqual([]);
      expect(game._createPlayers()).toEqual(jasmine.any(Array));
      expect(game.players()[0].name()).toMatch("Player 1");
    });
  });

  describe("players", () => {
    it("should return a list of the player and bots", () => {
      game.start();
      expect(game.players()[0].name()).toMatch("Player 1");
      expect(game.players()[1].name()).toMatch("Bot 1");
    });
  });

  describe("deck", () => {
    it("should return a new CardDeck", () => {
      expect(game.deck().cards()[0].rank()).toMatch('2');
      expect(game.deck().cards()[0].suit()).toMatch('Clubs');
      deck = game.deck()
      expect(deck.cardCount()).toEqual(52);
    });
  });

  describe("_botCount", () => {
    it("should return the number of bots selected by the player or default to 1", () => {
      expect(game._botCount()).toEqual(1);
    });
  });

  describe("distributeCards", () => {
    it("should deal out 7 cards to each person in a 2 player game", () => {
      game.start();
      expect(game.players()[0].handCount()).toEqual(7);
      expect(game.players()[1].handCount()).toEqual(7);
    });

    it("should deal out 5 cards to each person in a 4+ player game", () => {
      largeGame = new Game(player, 3)
      largeGame.start();
      expect(largeGame.players()[0].handCount()).toEqual(5);
      expect(largeGame.players()[1].handCount()).toEqual(5);
    });
  });

  describe("currentPlayer", () => {
    it("should return the current player", () => {
      game.start();
      expect(game.currentPlayer().name()).toMatch('Player 1');
    });
  });
});
