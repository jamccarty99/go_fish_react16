class CardView {
  constructor(card, callBack) {
    this._card = card
    this._callBack = callBack
  }

  card() {
    return this._card;
  }

  draw(container) {
    const cardMarkup =`
      <div class="hand-card selectable" data-rank="${this.card().rank()}">
        ${this.card().rank()} of ${this.card().suit()}
      </div>
    `
    const element = document.createElement('div')
    element.innerHTML = cardMarkup
    element.onclick = this._callBack.bind(this)
    container.appendChild(element)

  }
}
