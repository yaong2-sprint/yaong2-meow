export default class ResultSection {
  constructor({ $app, result }) {
    this.result = result;

    this.$target = document.createElement('div');
    this.$target.className = 'result-section';
    $app.appendChild(this.$target);

    this.render();
  }

  setState(result) {
    this.result = result;
    this.render();
  }

  render() {
    this.$target.innerHTML = "";
  
    if (this.result) {
      for (let cat of this.result) {
        const catImage = document.createElement('img');
        catImage.className = 'cat-image';
        catImage.src = cat.url;
        
        this.$target.appendChild(catImage);
      }
      return;
    }
  }
}