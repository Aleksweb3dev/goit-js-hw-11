import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
export function getImagesByQuery(query = '') {
  const params = {
    key: '50231364-89a6adaa041ec148f09dc01d0',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(res => res.data);
}
