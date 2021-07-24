import axios from 'axios';

const loadGlobalMap = async () => {
  const response = await axios.get('./maps/global/global.json');

  return response;
};

export default loadGlobalMap;
