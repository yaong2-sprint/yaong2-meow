import { api } from "../api/TheCatAPI.js";

export default class SearchSection {
  constructor({ $app, breeds, result, isLoading, searchRandomCat, searchSpecificCat }) {
    this.$app = app;
    this.state = { breeds, result, isLoading };
    this.onSearch = { searchRandomCat, searchSpecificCat };

    this.$target = document.createElement('section');
    this.$target.className = 'search-section';
    $app.appendChild(this.$target);

    api.getBreeds().then(data => {
      for (let breed of data) {
        this.state.breeds.set(breed.name, breed.id);
      }
      this.render();
    });
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = "";
    const label = document.createElement('label');
    label.setAttribute('for', 'cat-breed-choice');
    // label.textContent = '고양이 종을 선택해주세요:';

    const selectBox = document.createElement('input');
    selectBox.id = 'select-box';
    selectBox.type = 'text';
    selectBox.setAttribute('list', 'cat-list');
    selectBox.autofocus = true;
    selectBox.placeholder = 'Pick a breed';

    selectBox.addEventListener('keypress', e => {
      if (e.key === 'Enter' && selectBox.value) {
        this.searchRandomCat();
      }
    });
    
    const datalist = document.createElement('datalist');
    datalist.id = 'cat-list';

    for (let breed of this.state.breeds) {
      const option = document.createElement('option');
      option.value = breed[0];
      datalist.appendChild(option);
    }

    const button = document.createElement('button');
    button.textContent = '검색';
    button.addEventListener('click', e => {
      e.preventDefault();
      if (selectBox.value && this.state.breeds.get(selectBox.value)) {
        this.onSearch.searchSpecificCat(this.state.breeds.get(selectBox.value));
      } else {
        alert('검색어를 정상적으로 입력해주세요.');
      }
    });

    this.$target.appendChild(label);
    this.$target.appendChild(selectBox);
    this.$target.appendChild(datalist);
    this.$target.appendChild(button);
  }
}