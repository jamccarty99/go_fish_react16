import React, { Component } from 'react';
import './App.css';
import './models/PlayingCard.js'
import './models/Player.js'
import './models/CardDeck.js'
import './models/Game.js'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { game: this.props.game }
  }

  login = () => {
    const view = new LoginView(this.startGame.bind(this))
    view.draw(this.container())
  }

  startGame = (name, numberOfBots) => {
    const game = new Game(name, numberOfBots)
    game.start()
    const view = new GameView(game, this.playRound.bind(this))
    view.draw(this.container())
  }

  playRound = (game, player, rank) => {
    game.playRound(player, rank)
    const view = new GameView(game, this.playRound.bind(this))
    view.draw(this.container())
  }

  render() {
    if (this.state) {
      return startGame();
    } else {
      return login();
    }
  }
}
