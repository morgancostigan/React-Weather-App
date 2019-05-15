import React from 'react';
import './App.css';

import Title from './components/Title';
import Results from './components/Results';
import Form from './components/Form';
require('dotenv').config();

// const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const API_KEY = "6361f0d3d15bb93fea66cfbab757cc7b";
class App extends React.Component{
  state = {
    city: undefined,
    temp: undefined,
    high: undefined,
    low: undefined,
    humidity: undefined,
    windspeed: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    console.log(API_KEY);
    e.preventDefault();
    const zipcode = e.target.elements.zipcode.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      city: data.name,
      temp: data.main.temp,
      high: data.main.temp_max,
      low: data.main.temp_min,
      humidity: data.main.humidity,
      windspeed: data.wind.speed,
      description: data.weather[0].main,
      error: ""
    })
    console.log(this.state);
    
    
  }

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Results 
          city={this.state.city}
          temp={this.state.temp}
          high={this.state.high}
          low={this.state.low}
          humidity={this.state.humidity}
          windspeed={this.state.windspeed}
          description={this.state.description}
          error={this.state.error }
        />
      </div>
    )
  }
}

export default App;
