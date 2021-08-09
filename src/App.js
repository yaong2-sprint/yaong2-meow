/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint no-unused-expressions: [{ allowTernary: true }] */
import SearchSection from './components/SearchSection.js';
import ResultSection from './components/ResultSection.js';
import Loader from './components/Loader.js';
import DarkMode from './components/DarkMode.js';

export default class App {
  constructor($app) {
    const isLightMode = localStorage.getItem('isLightMode') === 'true';
    if (isLightMode) {
      document.querySelector('body').classList.remove('dark');
    } else {
      document.querySelector('body').classList.add('dark');
    }

    const searchSection = new SearchSection($app, {
      setLoaderState: (nextState) => {
        loader.setState(nextState);
      },
    });

    const resultSection = new ResultSection($app);

    const loader = new Loader($app);

    const darkMode = new DarkMode($app);

    isLightMode
      ? document.querySelector('.dark-mode-section').classList.remove('dark')
      : document.querySelector('.dark-mode-section').classList.add('dark');

    if (isLightMode) {
      document.querySelector('.dark-mode-section').classList.remove('dark');
    } else {
      document.querySelector('.dark-mode-section').classList.add('dark');
    }
  }
}
