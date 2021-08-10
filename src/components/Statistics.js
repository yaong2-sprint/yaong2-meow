export default class Statistics {
  constructor($target, $props) {
    this.$props = $props;
    this.$wrapper = document.createElement('article');
    this.$wrapper.className = 'statistics';
    const header = document.createElement('h3');
    header.textContent = 'Statistics';
    this.$wrapper.appendChild(header);
    $target.appendChild(this.$wrapper);
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = '';
    const itemList = [
      {
        title: '😻 애정',
        value: this.$props.affection_level,
        color: '#f1d2e7',
      },
      {
        title: '💪 건강',
        value: 5 - +this.$props.health_issues,
        color: '#bbb0dc',
      },
      {
        title: '✨ 지능',
        value: this.$props.intelligence,
        color: '#f1c3aa',
      },
      {
        title: '😺 적응력',
        value: this.$props.adaptability,
        color: '#b7d3e9',
      },
      {
        title: '😼 활동력',
        value: this.$props.energy_level,
        color: '#567ace',
      },
      {
        title: '😸 사회성',
        value: this.$props.social_needs,
        color: '#fcf695',
      },
      {
        title: '🐶 강아지 친화력',
        value: this.$props.dog_friendly,
        color: '#f3aa51',
      },
      {
        title: '🧒 어린이 친화력',
        value: this.$props.child_friendly,
        color: '#d9598c',
      },
      {
        title: '🧒 낯선 사람 친화력',
        value: this.$props.stranger_friendly,
        color: '#a7e0e1',
      },
      {
        title: '🙀 털빠짐',
        value: this.$props.shedding_level,
        color: '#cee5d5',
      },
      {
        title: '🐈 호기심',
        value: this.$props.experimental,
        color: '#db706c',
      },
      {
        title: '😿 표현력',
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
