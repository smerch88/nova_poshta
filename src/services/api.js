import axios from 'axios';

export const novaPoshtaApi = axios.create({
  baseURL: 'https://api.novaposhta.ua/v2.0/json/',
});

export const getRepos = async body => {
  try {
    console.log('body', body);
    const { data, status } = await novaPoshtaApi.post(``, body);
    console.log('data', data);
    console.log('status', status);
    if (status !== 200) {
      throw new Error(`Failed to fetch repository data: ${status}`);
    }
    return data;
  } catch (error) {
    return error;
  }
};
