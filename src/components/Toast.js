export default class Toast {
  constructor($target, $props) {
    this.$props = $props;
    this.$wrapper = document.createElement('div');
    this.$wrapper.className = 'toast';
    $target.appendChild(this.$wrapper);
    this.render();
  }

  offToggle() {
    this.$wrapper.classList.remove('reveal');
  }

  render() {
    this.$wrapper.classList.add('reveal');
    setTimeout(this.offToggle.bind(this), 1500);
    this.$wrapper.innerHTML = '';
    const span = document.createElement('span');
    span.className = 'closeBtn';
    span.innerHTML = '&times;';
    span.addEventListener('click', this.offToggle.bind(this));
    const message = document.createElement('span');
    message.textContent = this.$props.message;
    this.$wrapper.appendChild(message);
    this.$wrapper.appendChild(span);
    setTimeout(() => {
      this.$wrapper.remove();
    }, 2000);
  }
}
