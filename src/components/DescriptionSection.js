export default class DescriptionSection {
  constructor($app) {
    this.$target = document.createElement('section');
    this.$target.classList.add('description-section', 'mount');
    $app.appendChild(this.$target);
  }

  setState(nextState) {
    this.$state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = '';
    const [breedData] = this.$state;
    console.log(breedData);

    const descriptionBox = document.createElement('article');
    descriptionBox.classList.add('description-box');
    if (!breedData) {
      descriptionBox.innerHTML = `
      <h2>죄송합니다.</h2>
      <p>이 종에 대한 상세 정보는 제공되지 않습니다.</p>
    `;
    } else {
      descriptionBox.innerHTML = `
      <h2>${breedData.name}</h2>
      <p>${breedData.description}</p>
      <h3>Statistics</h3>
    `;
    }

    this.$target.appendChild(descriptionBox);
    this.$target.classList.remove('mount');
  }
}
