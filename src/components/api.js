import axios from 'axios';

const API_KEY = '01d27c7b7b397ac9c2f6cbca600c60e8';

export const fetch = async location => {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=ru`
  );
  return data;
};
