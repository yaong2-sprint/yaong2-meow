/* eslint-disable no-new */
import Statistics from './Statistics.js';

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
      <h3>Basic Information</h3>
      <p>기원: <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/1x1/${this.$props.breedInfo?.country_code.toLowerCase()}.svg" alt="${
        this.$props.breedInfo?.country_code
      }"/>${this.$props.breedInfo.origin}</p>
      <p>평균 수명: ${this.$props.breedInfo?.life_span}년</p>
      <p>몸무게: ${this.$props.breedInfo?.weight.metric}kg</p>
      <h3>Statistics</h3>
      `;
      new Statistics(descriptionBox, this.$props.breedInfo);
    }
    this.$wrapper.appendChild(descriptionBox);
    this.$wrapper.classList.remove('mount');
  }
}
