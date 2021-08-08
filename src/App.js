/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import SearchSection from './components/SearchSection.js';
import ResultSection from './components/ResultSection.js';
import Loader from './components/Loader.js';

export default class App {
  constructor($app) {
    const searchSection = new SearchSection($app, {
      setLoaderState: (nextState) => {
        loader.setState(nextState);
      },
    });

    const resultSection = new ResultSection($app);

    const loader = new Loader($app);
  }
}
