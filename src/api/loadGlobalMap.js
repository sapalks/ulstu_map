import axios from 'axios';

const loadGlobalMap = () => {
  const response = axios.get('./maps/global/global.json');

  return response;
};

export default loadGlobalMap;
