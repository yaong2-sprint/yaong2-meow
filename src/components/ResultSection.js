export default class ResultSection {
  constructor($target) {
    this.$wrapper = document.createElement('section');
    this.$wrapper.className = 'result-section';
    $target.appendChild(this.$wrapper);
  }
}
