import api from '../api/TheCatAPI.js';

export default class SearchSection {
  constructor({
    $app,
    breeds,
    result,
    isLoading,
    searchRandomCat,
    searchSpecificCat,
    setLoaderState,
    setToastMessage,
  }) {
    this.state = { breeds, result, isLoading };
    this.onSearch = { searchRandomCat, searchSpecificCat };
    this.setLoaderState = setLoaderState;
    this.setToastMessage = setToastMessage;
    this.$target = document.createElement('section');
    this.$target.className = 'search-section';
    $app.appendChild(this.$target);
    api.getBreeds().then((data) => {
      data.forEach((breed) => {
        // if (!breed.name.includes(' ') && !breed.name.includes('-'))
        this.state.breeds.set(breed.name, breed.id);
      });
      this.render();
      setLoaderState(false);
    });
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = '';
    const label = document.createElement('label');
    label.setAttribute('for', 'cat-breed-choice');
    label.textContent = '고양이 종을 선택해주세요:';

    const selectBox = document.createElement('input');
    selectBox.id = 'select-box';
    selectBox.type = 'text';
    selectBox.setAttribute('list', 'cat-list');
    selectBox.autofocus = true;
    selectBox.placeholder = 'Pick a breed';

    selectBox.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const { value } = selectBox;
        const convertedValue = value[0].toUpperCase() + value.slice(1);
        if (this.state.breeds.get(convertedValue)) {
          this.onSearch.searchSpecificCat(
            this.state.breeds.get(convertedValue),
          );
          selectBox.value = '';
        } else {
          this.setToastMessage({
            message: '검색어를 정상적으로 입력해주세요.',
            toggle: true,
          });
        }
      }
    });

    const datalist = document.createElement('datalist');
    datalist.id = 'cat-list';

    this.state.breeds.forEach((id, name) => {
      const option = document.createElement('option');
      option.value = name;
      datalist.appendChild(option);
    });

    const button = document.createElement('button');
    button.textContent = '검색';
    button.addEventListener('click', () => {
      const { value } = selectBox;
      const convertedValue = value[0].toUpperCase() + value.slice(1);
      if (this.state.breeds.get(convertedValue)) {
        this.onSearch.searchSpecificCat(this.state.breeds.get(convertedValue));
        selectBox.value = '';
      } else {
        this.setToastMessage({
          message: '검색어를 정상적으로 입력해주세요.',
          toggle: true,
        });
      }
    });

    this.$target.appendChild(label);
    this.$target.appendChild(selectBox);
    this.$target.appendChild(datalist);
    this.$target.appendChild(button);
  }
}
