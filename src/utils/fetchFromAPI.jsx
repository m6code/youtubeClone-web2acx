import axios from 'axios';

export const {VITE_BASE_URL, VITE_API_KEY } = import.meta.env;

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': VITE_API_KEY,
    'X-RapidAPI-Host': VITE_BASE_URL,
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`https://${VITE_BASE_URL}/${url}`, options);
    console.log(data);
  return data;
};



