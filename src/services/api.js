import axios from 'axios';

export const novaPoshtaApi = axios.create({
  baseURL: 'http://localhost:3000/nova-poshta/',
});

export const getTTN = async body => {
  try {
    const { data, status } = await novaPoshtaApi.get(
      `docs/${body.methodProperties.Documents[0].DocumentNumber}/${body.methodProperties.Documents[0].Phone}`,
      ''
    );

    if (status !== 200) {
      throw new Error(`Failed to fetch data: ${status}`);
    }
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getDeps = async body => {
  console.log(body);
  try {
    const { data, status } = await novaPoshtaApi.get(
      `deps/CityName=${body.methodProperties.CityName}/page=${body.methodProperties.Page}`,
      ''
    );

    if (status !== 200) {
      throw new Error(`Failed to fetch data: ${status}`);
    }
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
