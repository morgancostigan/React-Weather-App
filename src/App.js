import React from 'react';
import './App.css';

import Title from './components/Title';
import Results from './components/Results';
import Form from './components/Form';

class App extends React.Component{
  getWeather = async () => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=55413,us&appid=${OPEN_WEATHER_API_KEY}&units=metric`);
    const data = await api_call.json();
  }

  render() {
    return (
      <div>
        <p>Kia Ora World
          <Title />
          <Form />
          <Results />
        </p>
      </div>
    )
  }
}

export default App;
