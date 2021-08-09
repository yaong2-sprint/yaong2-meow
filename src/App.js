/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint no-unused-expressions: [2, { allowTernary: true }] */
import SearchSection from './components/SearchSection.js';
import ResultSection from './components/ResultSection.js';
import Loader from './components/Loader.js';
import DarkMode from './components/DarkMode.js';

export default class App {
  constructor($app) {
    this.isLightMode = localStorage.getItem('isLightMode') === 'true';
    this.setDarkMode('body');

    const searchSection = new SearchSection($app, {
      setLoaderState: (nextState) => {
        loader.setState(nextState);
      },
    });

    const resultSection = new ResultSection($app);

    const loader = new Loader($app);

    const darkMode = new DarkMode($app);

    this.setDarkMode('.dark-mode-section');
  }

  setDarkMode($target) {
    this.isLightMode
      ? document.querySelector($target).classList.remove('dark')
      : document.querySelector($target).classList.add('dark');
  }
}
