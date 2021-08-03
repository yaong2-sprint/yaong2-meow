export default class Loader {
  constructor({ $app, isLoading }) {
    this.isLoading = isLoading;
    this.loaderWrapper = document.createElement('div');
    this.loaderWrapper.className = 'loader-wrapper';
    $app.appendChild(this.loaderWrapper);
    this.render();
  }

  setState(status) {
    this.isLoading = status;
    this.render();
  }

  render() {
    const loader = document.createElement('div');
    loader.className = 'cat';
    this.loaderWrapper.appendChild(loader);

    ['cat__body', 'cat__body', 'cat__tail', 'cat__head'].forEach(
      (className) => {
        const div = document.createElement('div');
        div.className = className;
        loader.appendChild(div);
      },
    );

    if (this.isLoading) {
      this.loaderWrapper.removeAttribute('style');
    } else {
      this.loaderWrapper.setAttribute('style', 'display: none !important;');
    }
  }
}
