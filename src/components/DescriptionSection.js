export default class DescriptionSection {
  constructor($target, $props) {
    this.$props = $props;
    this.$wrapper = document.createElement('section');
    this.$wrapper.classList.add('description-section', 'mount');
    $target.appendChild(this.$wrapper);
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = '';
    const descriptionBox = document.createElement('article');
    descriptionBox.classList.add('description-box');
    if (!this.$props.breedInfo) {
      descriptionBox.innerHTML = `
      <h2>죄송합니다.</h2>
      <p>이 종에 대한 상세 정보는 제공되지 않습니다.</p>
    `;
    } else {
      descriptionBox.innerHTML = `
      <h2>${this.$props.breedInfo?.name}</h2>
      <p>${this.$props.breedInfo?.description}</p>
      <h3>Statistics</h3>
    `;
    }

    this.$wrapper.appendChild(descriptionBox);
    this.$wrapper.classList.remove('mount');
  }
}
