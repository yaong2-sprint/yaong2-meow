export default class GallerySection {
  constructor($app) {
    this.$target = document.createElement('section');
    this.$target.className = 'gallery-section';
    $app.appendChild(this.$target);
  }

  setState(nextState) {
    this.$state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = '';
    this.$state.forEach((cat) => {
      const catImage = document.createElement('img');
      catImage.className = 'cat-image';
      catImage.src = cat.url;

      this.$target.appendChild(catImage);
    });
  }
}
