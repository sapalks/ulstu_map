import axios from 'axios';

const loadCorpus1 = async () => {
  const floor0 = axios.get('./maps/c1/c1-f0/data.json');
  const floor1 = axios.get('./maps/c1/c1-f1/data.json');
  const floor2 = axios.get('./maps/c1/c1-f2/data.json');
  const floor3 = axios.get('./maps/c1/c1-f3/data.json');
  const floor4 = axios.get('./maps/c1/c1-f4/data.json');

  const response = await Promise.all([floor0, floor1, floor2, floor3, floor4]);
  const formatedResponse = response.map(({ data }) => data);

  return { data: formatedResponse };
};

export default loadCorpus1;
