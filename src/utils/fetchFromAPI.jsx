import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
export const { VITE_RAPID_API_KEY } = import.meta.env;

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
  return data;
};


/*
//const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': 'VITE_RAPID_API_KEY',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async () => {

try {
	    const response = await axios.request(options);
	    console.log(response.data);
    } catch (error) {
	    console.error(error);
    }

}
*/
