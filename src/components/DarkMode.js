export default class DarkMode {
  constructor($target) {
    this.$wrapper = document.createElement('div');
    this.$wrapper.className = 'dark-mode-section';
    $target.appendChild(this.$wrapper);

    // 초기 상태 설정
    this.$state = {
      isLightMode: localStorage.getItem('isLightMode')
        ? true
        : window.matchMedia('(prefers-color-scheme: light)').matches,
    };
    localStorage.setItem('isLightMode', this.$state.isLightMode); // Local Storage에 다크모드 설정 여부 저장
    this.$wrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelector('body').classList.toggle('dark');
      this.$wrapper.classList.toggle('dark');
      this.setState({ isLightMode: !this.$state.isLightMode });
      localStorage.setItem('isLightMode', this.$state.isLightMode);
    });

    this.render();
  }

  setState(nextState) {
    this.$state = { ...this.$state, ...nextState };
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = `다크 모드 <span class="${
      this.$state.isLightMode ? 'set">🌙 설정' : 'unset">☀️ 해제'
    }</span>하기`;
  }
}
