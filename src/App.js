/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import SearchSection from './components/SearchSection.js';
import DescriptionSection from './components/DescriptionSection.js';
import GallerySection from './components/GallerySection.js';
import Loader from './components/Loader.js';
import api from './api/TheCatAPI.js';
import Toast from './components/Toast.js';

export default class App {
  constructor($app) {
    this.$state = {
      isLoading: true,
      breedData: null,
      imageData: null,
      breeds: new Map(),
    };

    const loader = new Loader({
      $app,
      isLoading: this.$state.isLoading,
    });

    const setLoaderState = (nextState) => {
      loader.setState(nextState);
    };

    const searchRandomCat = () => {
      setLoaderState(true);
      const response = api.getRandomCats();
      response.then((data) => {
        gallerySection.setState(data);
      });
      setLoaderState(false);
    };

    const searchSpecificCat = (id) => {
      setLoaderState(true);
      let breedSwitch = true;
      let imageSwitch = true;
      const breedResponse = api.getBreedInfo(id);
      breedResponse.then((nextState) => {
        descriptionSection.setState(nextState);
        if (!imageSwitch) setLoaderState(false);
        breedSwitch = false;
      });
      const imageResponse = api.getSpecificCats(id);
      imageResponse.then((data) => {
        gallerySection.setState(data);
        if (!breedSwitch) setLoaderState(false);
        imageSwitch = false;
      });
    };

    const setToastMessage = (nextState) => {
      toast.setState(nextState);
    };

    const searchSection = new SearchSection({
      $app,
      breeds: this.$state.breeds,
      result: this.$state.imageData,
      isLoading: this.$state.isLoading,
      searchRandomCat,
      searchSpecificCat,
      setLoaderState,
      setToastMessage,
    });

    const descriptionSection = new DescriptionSection($app);

    const gallerySection = new GallerySection($app);

    const toast = new Toast({
      $app,
      message: '',
      toggle: false,
    });
  }
}
