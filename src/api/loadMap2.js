import axios from 'axios';

const loadMap2 = () => {
  const response = axios.get('./maps/map2/map2.json');

  return response;
};

export default loadMap2;
