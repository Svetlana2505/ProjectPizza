import { StyledInput, StyledForm } from './Form.styled';

export const Form = ({ setLocation, location, fetchWeather }) => {
  const handleSubmit = e => {
    e.preventDefault();
    fetchWeather(location);
    setLocation('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Поиск..."
      />
    </StyledForm>
  );
};
