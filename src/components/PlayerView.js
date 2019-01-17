class PlayerView {
  constructor(player, setRank) {
    this._player = player
    this._setRank = setRank
  }

  player() {
    return this._player
  }

  card() {
    return document.getElementById(`${this.player().name()}-hand`)
  }
  onCardClick(e) {
    if (e.target.classList.contains('selectable')) {
      document.querySelectorAll('.hand-card').forEach((card) => {
        card.classList.contains('selected-card') ? card.classList.remove('selected-card'): ''
      })
      e.target.classList.add('selected-card')
      this._setRank(e.target.dataset.rank)
    }
  }

  draw(container) {
    const playerMarkup =
    `
      <div class="player">
        <div class="player-name">
          ${this.player().name()}
        </div>
        <div class="player-sets">
          Sets: ${this.player().setsCount()}
        </div>
        <div id="${this.player().name()}-hand" class="player-hand"></div>
      </div>
    `
    const element = document.createElement('div')
    element.innerHTML = playerMarkup
    container.appendChild(element)
    this._drawCard()
  }

  _drawCard() {
    this.player().hand().forEach((card) => {
      const view = new CardView(card, this.onCardClick.bind(this))
      view.draw(this.card())
    })
  }
}
