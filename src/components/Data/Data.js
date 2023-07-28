import { Wrapper, Top, Bottom, DataDay } from './Data.styled';

export const Data = ({ weather }) => {
  return (
    <Wrapper>
      <Top>
        <div>
          {weather.main ? <h1>{Math.floor(weather.main.temp)}&deg;</h1> : null}
          {weather.weather ? (
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt=""
            />
          ) : null}
          {weather.weather ? <p>{weather.weather[0].description}</p> : null}
        </div>

        <DataDay>
          <p>{weather.name}</p>
          {weather.dt ? (
            <p>{new Date(weather.dt * 1000).toLocaleDateString('en-US')}</p>
          ) : null}
        </DataDay>
      </Top>
      {weather.main ? (
        <Bottom>
          <div>
            {weather.main ? (
              <p>{Math.floor(weather.main.feels_like)}&deg;</p>
            ) : null}
            <p>Ощущается как</p>
          </div>
          <div>
            {weather.wind ? <p>{Math.floor(weather.wind.speed)}км/ч</p> : null}
            <p>Ветер</p>
          </div>
          <div>
            {weather.main ? <p>{weather.main.humidity}%</p> : null}
            <p>Влажность</p>
          </div>
        </Bottom>
      ) : null}
    </Wrapper>
  );
};
