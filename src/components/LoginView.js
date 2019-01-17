class LoginView {
  constructor(onLogin) {
    this.onLogin = onLogin
  }

  onSubmit(event) {
    event.preventDefault();
    const numberOfBots = Number(event.target.numberOfBots.value)
    this.onLogin(event.target.name.value, numberOfBots)
  }

  nameInput() {
    return document.getElementById('name')
  }

  botInput() {
    return document.getElementById('numberOfBots')
  }

  submitButton() {
    return document.getElementById('submit')
  }

  draw(container) {
    const formMarkup = `
      <form class="user-form">
        <label for="name">Name</label>
        <input type="text" id="name" />
        <label for="numberOfBots">Number of Bots</label>
        <input type="number" id="numberOfBots" value="1"/>

        <input id="submit" type="submit" value="Login">
      </form>
    `

    const element = document.createElement('div')
    element.innerHTML = formMarkup
    element.onsubmit = this.onSubmit.bind(this)
    container.appendChild(element)
    return element
  }
}
