export default class GallerySection {
  constructor($target, $props) {
    this.$props = $props;
    this.$wrapper = document.createElement('section');
    this.$wrapper.className = 'gallery-section';
    $target.appendChild(this.$wrapper);
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = '';
    this.$props.imgList.forEach((cat) => {
      const catImage = document.createElement('img');
      catImage.className = 'cat-image';
      catImage.src = cat.url;

      this.$wrapper.appendChild(catImage);
    });
  }
}
