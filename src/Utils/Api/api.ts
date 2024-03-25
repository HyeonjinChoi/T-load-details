import axios from 'axios';

const baseUrl = 'https://openmind-api.vercel.app/';

const getRequest = async (endpoint: string) => {
  try {
    const response = await axios.get(`${baseUrl}${endpoint}`);
    if (response.status !== 200) {
      throw new Error(`${endpoint}에서 불러오는데 실패했습니다`);
    }
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postRequest = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(`${baseUrl}${endpoint}`, data);
    if (response.status !== 201) {
      throw new Error(`${endpoint}에서 불러오는데 실패했습니다`);
    }
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const patchRequest = async (endpoint: string, data: any) => {
  try {
    const response = await axios.patch(`${baseUrl}${endpoint}`, data);

    if (response.status !== 200) {
      throw new Error(`${endpoint}에서 불러오는데 실패했습니다`);
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteRequest = async (endpoint: string) => {
  try {
    const response = await axios.delete(`${baseUrl}${endpoint}`);

    if (response.status !== 204) {
      throw new Error(`${endpoint}에서 불러오는데 실패했습니다`);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
