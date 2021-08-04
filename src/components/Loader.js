export default class Loader {
  constructor({ $app, isLoading }) {
    this.isLoading = isLoading;
    this.$target = document.createElement('div');
    this.$target.classList.add('loader-wrapper', 'reveal');
    $app.appendChild(this.$target);

    const loader = document.createElement('div');
    loader.className = 'cat';
    this.$target.appendChild(loader);

    ['cat__body', 'cat__body', 'cat__tail', 'cat__head'].forEach(
      (className) => {
        const div = document.createElement('div');
        div.className = className;
        loader.appendChild(div);
      },
    );
  }

  setState(state) {
    if (state) {
      this.$target.classList.add('reveal');
    } else {
      this.$target.classList.remove('reveal');
    }
  }
}
