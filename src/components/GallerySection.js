export default class GallerySection {
  constructor($target, $props) {
    this.$props = $props;
    this.$wrapper = document.createElement('section');
    this.$wrapper.className = 'gallery-section';
    $target.appendChild(this.$wrapper);
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = '<h2>Gallery</h2>';
    const paragraph = document.createElement('p');
    paragraph.textContent = this.$props.isRandom
      ? `검색어를 입력하지 않으셔서 랜덤으로 보여드립니다.`
      : `귀여운 ${this.$props.imgList[0].breeds[0].name} 사진들입니다.`;
    this.$wrapper.appendChild(paragraph);
    this.$props.imgList.forEach((cat, index) => {
      const catImage = document.createElement('img');
      catImage.className = 'cat-image';
      catImage.loading = 'lazy';
      catImage.src = cat.url;
      catImage.alt = `cat image ${index}`;
      this.$wrapper.appendChild(catImage);
    });
  }
}
