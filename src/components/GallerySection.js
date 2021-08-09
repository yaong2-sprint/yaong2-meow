export default class GallerySection {
  constructor($target, $props) {
    this.$props = $props;
    this.$wrapper = document.createElement('section');
    this.$wrapper.className = 'gallery-section';
    $target.appendChild(this.$wrapper);
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = `<h2>Gallery</h2><hr><div>귀여운 ${this.$props.imgList[0].breeds[0].name} 사진들입니다.</div>`;
    this.$props.imgList.forEach((cat, index) => {
      const catImage = document.createElement('img');
      catImage.className = 'cat-image';
      catImage.loading = 'lazy';
      catImage.src = cat.url;
      catImage.alt = `${this.$props.imgList[0].breeds[0].name} image ${index}`;
      this.$wrapper.appendChild(catImage);
    });
  }
}
