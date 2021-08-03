import ApiError from '../error/APIError.js';
import axios from 'axios';

const API_ENDPOINT = "https://api.thecatapi.com/v1";
const ERROR_MESSAGE = "서버와의 통신 도중 오류가 발생했습니다. 잠시 후 다시 시도해 주십시오."

const request = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    throw new ApiError(ERROR_MESSAGE, 'API Error', 500);
  }
}

export const api = {
  getBreeds: () => request(`${API_ENDPOINT}/breeds/`),
  getSpecificCats: id => request(`${API_ENDPOINT}/images/search?breed_ids=${id}&limit=12`),
  getRandomCats: () => request(`${API_ENDPOINT}/images/search?limit=12`),
}
