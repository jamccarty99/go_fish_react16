class GoFishController {
  container() {
    return document.getElementById('main')
  }

  login() {
    const view = new LoginView(this.startGame.bind(this))
    view.draw(this.container())
  }

  startGame(name, numberOfBots) {
    const game = new Game(name, numberOfBots)
    game.start()
    const view = new GameView(game, this.playRound.bind(this))
    view.draw(this.container())
  }

  playRound(game, player, rank) {
    game.playRound(player, rank)
    const view = new GameView(game, this.playRound.bind(this))
    view.draw(this.container())
  }
}

window.controller = new GoFishController();
window.onload = controller.login.bind(window.controller)
