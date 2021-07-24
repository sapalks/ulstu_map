import axios from 'axios';

const loadCorpus5 = async () => {
  const floor1 = axios.get('./maps/c5/c5-f1/data.json');
  const floor2 = axios.get('./maps/c5/c5-f2/data.json');
  const floor3 = axios.get('./maps/c5/c5-f3/data.json');
  const floor4 = axios.get('./maps/c5/c5-f4/data.json');

  const response = await Promise.all([floor1, floor2, floor3, floor4]);
  const formatedResponse = response.map(({ data }) => data);

  return { data: formatedResponse };
};

export default loadCorpus5;
