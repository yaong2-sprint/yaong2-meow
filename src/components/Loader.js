export default class Loader {
  constructor($target) {
    this.$wrapper = document.createElement('div');
    this.$wrapper.classList.add('loader-wrapper', 'reveal');
    $target.appendChild(this.$wrapper);

    // 초기 상태 설정
    this.setState({
      isLoading: true,
    });

    this.render(); // 렌더링
  }

  setState(nextState) {
    this.$state = { ...this.$state, ...nextState };
    this.render();
  }

  render() {
    if (this.$state.isLoading) {
      this.$wrapper.classList.add('reveal');
    } else {
      this.$wrapper.classList.remove('reveal');
    }
    this.$wrapper.innerHTML = '';
    const $loader = document.createElement('div');
    $loader.className = 'cat';
    this.$wrapper.appendChild($loader);
    ['cat__body', 'cat__body', 'cat__tail', 'cat__head'].forEach(
      (className) => {
        const div = document.createElement('div');
        div.className = className;
        $loader.appendChild(div);
      },
    );
  }
}
