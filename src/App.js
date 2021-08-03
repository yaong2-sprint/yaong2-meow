import SearchSection from './components/SearchSection.js';
import ResultSection from './components/ResultSection.js';
import Loader from './components/Loader.js';
import { api } from './api/TheCatAPI.js';

export default class App {
  constructor($app) {
    this.$app = $app;
    this.state = {
      isLoading: true,
      result: null,
      breeds: new Map(),
    };

    const searchRandomCat = () => {
      const response = api.getRandomCats();
      response.then(data => {
        resultSection.setState(data);
      });
    }
  
    const searchSpecificCat = id => {
      const response = api.getSpecificCats(id);
      response.then(data => {
        resultSection.setState(data);
      });
    }
    
    const loadingSection = new Loader({
      $app: this.$app,
      isLoading: this.state.isLoading
    });

    const searchSection = new SearchSection({
      $app: this.$app,
      breeds: this.state.breeds,
      result: this.state.result,
      isLoading: this.isLoading,
      searchRandomCat,
      searchSpecificCat
    });

    const resultSection = new ResultSection({
      $app: this.$app,
      result: this.state.result,
    });
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }
}
