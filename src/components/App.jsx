import { Form } from './Form/Form';
import { Container } from './Container';
import { Data } from './Data/Data';
import { Wrapper } from './Data/Data.styled';
import { useState } from 'react';
import { fetch } from './api';

export const App = () => {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState('');

  const fetchWeather = async () => {
    const { data } = await fetch(location);
    setWeather(data);
  };

  return (
    <Wrapper>
      <Container>
        <Form
          setLocation={setLocation}
          location={location}
          fetchWeather={fetchWeather}
        />
        <Data weather={weather} />
      </Container>
    </Wrapper>
  );
};
