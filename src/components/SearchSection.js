/* eslint-disable no-new */
import api from '../api/TheCatAPI.js';
import DescriptionSection from './DescriptionSection.js';
import GallerySection from './GallerySection.js';
import Toast from './Toast.js';

export default class SearchSection {
  constructor($target, $props) {
    this.$props = $props;
    this.$wrapper = document.createElement('section');
    this.$wrapper.className = 'search-section';
    $target.appendChild(this.$wrapper);

    // 초기 상태 설정
    this.$state = { breeds: new Map() };

    api.getBreeds().then((data) => {
      data.forEach((breed) => {
        this.$state.breeds.set(breed.name, breed.id);
      });
      this.render(); // 렌더링
      this.$props.setLoaderState({ isLoading: false });
      if (this.selectBox) this.selectBox.focus();
    });
  }

  onSearch(id) {
    this.$props.setLoaderState({ isLoading: true });
    api.getSpecificCats(id).then((data) => {
      const resultSection = document.querySelector('.result-section');
      resultSection.innerHTML = '';
      new DescriptionSection(resultSection, {
        breedInfo: data[0].breeds[0],
      });
      new GallerySection(resultSection, {
        imgList: data,
      });
      this.$props.setLoaderState({ isLoading: false });
    });
  }

  onRandomSearch() {
    this.$props.setLoaderState({ isLoading: true });
    api.getRandomCats().then((data) => {
      const resultSection = document.querySelector('.result-section');
      resultSection.innerHTML = '';
      new GallerySection(resultSection, {
        imgList: data,
        isRandom: true,
      });
      this.$props.setLoaderState({ isLoading: false });
    });
  }

  setEvent() {
    const { value } = this.selectBox;
    if (!value) {
      this.onRandomSearch();
      return;
    }
    const convertedValue = value[0].toUpperCase() + value.slice(1);
    if (this.$state.breeds.get(convertedValue)) {
      this.onSearch(this.$state.breeds.get(convertedValue));
      this.selectBox.value = '';
    } else {
      new Toast(document.querySelector('#app'), {
        message: '입력하신 검색어에 해당하는 고양이 종이 없습니다.',
      });
    }
  }

  setState(nextState) {
    this.$state = { ...this.$state, ...nextState };
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = '';
    const label = document.createElement('label');
    label.setAttribute('for', 'cat-breed-choice');
    label.textContent = '고양이 종을 선택해주세요:';

    this.selectBox = document.createElement('input');
    this.selectBox.id = 'select-box';
    this.selectBox.type = 'text';
    this.selectBox.setAttribute('list', 'cat-list');
    this.selectBox.placeholder = 'Pick a breed';

    this.selectBox.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.setEvent();
    });

    const datalist = document.createElement('datalist');
    datalist.id = 'cat-list';

    this.$state.breeds.forEach((id, name) => {
      const option = document.createElement('option');
      option.value = name;
      datalist.appendChild(option);
    });

    const button = document.createElement('button');
    button.textContent = '검색';
    button.addEventListener('click', () => {
      this.setEvent();
    });

    this.$wrapper.appendChild(label);
    this.$wrapper.appendChild(this.selectBox);
    this.$wrapper.appendChild(datalist);
    this.$wrapper.appendChild(button);
  }
}
