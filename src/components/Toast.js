export default class Toast {
  constructor({ $app, message, toggle }) {
    this.message = message;
    this.toggle = toggle;
    this.$target = document.createElement('div');
    this.$target.className = 'toast';
    $app.appendChild(this.$target);
    this.render();
  }

  offToggle() {
    this.$target.classList.remove('reveal');
    this.toggle = false;
  }

  setState(state) {
    this.message = state.message;
    if (state.toggle) this.$target.classList.add('reveal');
    setTimeout(this.offToggle.bind(this), 1500);
    this.render();
  }

  render() {
    this.$target.innerHTML = '';
    const span = document.createElement('span');
    span.className = 'closeBtn';
    span.innerHTML = '&times;';
    span.addEventListener('click', this.offToggle.bind(this));
    const message = document.createElement('span');
    message.textContent = this.message;
    this.$target.appendChild(message);
    this.$target.appendChild(span);
  }
}
