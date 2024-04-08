import { useState } from 'react';

function WeatherDashboard() {
  // instead of requesting data from an API, use this mock data
  const mockWeatherData = {
    'New York': {
      temperature: '22°C',
      humidity: '56%',
      windSpeed: '15 km/h',
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h',
    },
    London: {
      temperature: '15°C',
      humidity: '70%',
      windSpeed: '20 km/h',
    },
  };

  const [inputValue, setInputValue] = useState('');
  const [currentCityDetail, setCurrentCityDetail] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [searchCities, setSearchCities] = useState({});

  const addCity = (inputValue, city) => {
    if (!searchCities[inputValue]) {
      setSearchCities({ ...searchCities, [inputValue]: city });
    }
  };

  const onSubmit = (e) => {
    setIsSubmit(false);
    e.preventDefault();

    if (inputValue.trim() === '') return;

    setCurrentCityDetail({});
    const cityDetail = mockWeatherData[inputValue];
    if (cityDetail && Object.keys(cityDetail).length > 0) {
      setCurrentCityDetail(cityDetail);
      addCity(inputValue, cityDetail);
    }
    setIsSubmit(true);
  };

  const changeDisplayCity = (cityName) => {
    setInputValue(cityName);
    setCurrentCityDetail(searchCities[cityName]);
  };

  console.log('cities=', searchCities);
  console.log('Object.keys(cities)=', Object.keys(searchCities));
  console.log('isSubmit && !currentCityDetail', isSubmit && !currentCityDetail);

  return (
    <div style={{ display: 'grid', placeContent: 'center', marginTop: '2em' }}>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          id='citySearch'
          placeholder='Search for a city...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button id='searchButton' type='submit'>
          Search
        </button>
      </form>
      <div id='weatherData'>
        {Object.keys(currentCityDetail).length > 0 && (
          <>
            <div>Temperature: {currentCityDetail.temperature}</div>{' '}
            <div>Humidity: {currentCityDetail.humidity}</div>{' '}
            <div>Wind Speed: {currentCityDetail.windSpeed}</div>{' '}
          </>
        )}
        {isSubmit && Object.keys(currentCityDetail).length === 0 && (
          <div>City not found.</div>
        )}
      </div>
      {Object.keys(searchCities).length > 0 && (
        <div id='previousSearches' style={{ display: 'flex', gap: '1em' }}>
          {Object.keys(searchCities).map((item) => (
            <button
              type='button'
              key={item}
              onClick={() => changeDisplayCity(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default WeatherDashboard;
