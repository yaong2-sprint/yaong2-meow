export default class Statistics {
  constructor($target, $props) {
    this.$props = $props;
    this.$wrapper = document.createElement('article');
    this.$wrapper.className = 'statistics';
    $target.appendChild(this.$wrapper);
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = '';
    const header = document.createElement('h3');
    header.textContent = 'Statistics';
    this.$wrapper.appendChild(header);
    const itemList = [
      {
        title: 'π» μ μ ',
        value: this.$props.affection_level,
        color: '#f1d2e7',
      },
      {
        title: 'πͺ κ±΄κ°',
        value: 5 - +this.$props.health_issues,
        color: '#bbb0dc',
      },
      {
        title: 'β¨ μ§λ₯',
        value: this.$props.intelligence,
        color: '#f1c3aa',
      },
      {
        title: 'πΊ μ μλ ₯',
        value: this.$props.adaptability,
        color: '#b7d3e9',
      },
      {
        title: 'πΌ νλλ ₯',
        value: this.$props.energy_level,
        color: '#567ace',
      },
      {
        title: 'πΈ μ¬νμ±',
        value: this.$props.social_needs,
        color: '#fcf695',
      },
      {
        title: 'πΆ κ°μμ§ μΉνλ ₯',
        value: this.$props.dog_friendly,
        color: '#f3aa51',
      },
      {
        title: 'π§ μ΄λ¦°μ΄ μΉνλ ₯',
        value: this.$props.child_friendly,
        color: '#d9598c',
      },
      {
        title: 'π§ λ―μ  μ¬λ μΉνλ ₯',
        value: this.$props.stranger_friendly,
        color: '#a7e0e1',
      },
      {
        title: 'π νΈλΉ μ§',
        value: this.$props.shedding_level,
        color: '#cee5d5',
      },
      {
        title: 'π νΈκΈ°μ¬',
        value: this.$props.experimental,
        color: '#db706c',
      },
      {
        title: 'πΏ ννλ ₯',
        value: this.$props.vocalisation,
        color: '#f2f2f2',
      },
    ];
    itemList.forEach((item) => {
      const graph = document.createElement('div');
      graph.className = 'graph';
      const span = document.createElement('span');
      span.textContent = `${item.title}`;
      span.style.width = `${31 + 0.7 * (+item.value * 20)}%`;
      span.style.background = `${item.color}`;
      graph.appendChild(span);
      this.$wrapper.appendChild(graph);
    });
  }
}
