import React, {Component} from 'react';
import './App.css';

import Title from './components/Title';
import Results from './components/Results';
import FiveResults from './components/FiveResults';
import Form from './components/Form';
// require('dotenv').config();

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
class App extends Component{
  state = {
    city: undefined,
    temp: undefined,
    high: undefined,
    low: undefined,
    humidity: undefined,
    windspeed: undefined,
    description: undefined,
    return_error: undefined,
    error: undefined
  }//end state
  
  getWeather = async (e) => {
    // console.log(API_KEY);
    e.preventDefault();
    const zipcode = e.target.elements.zipcode.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${API_KEY}&units=imperial`);  //current conditions
    // const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&appid=${API_KEY}&units=imperial`); //5 day forecast
    const data = await api_call.json();
    if (data.cod == 404 || zipcode == false){ //== rather than === to prevent crash on bad data 
      console.log(data);
      this.setState({
        city: undefined,
        temp: undefined,
        high: undefined,
        low: undefined,
        humidity: undefined,
        windspeed: undefined,
        description: undefined,
        button: undefined,
        return_error: "",
        error: "Please enter a valid zipcode."
      })
    } else {
      console.log(data);
      this.setState({
        city: data.name,
        temp: data.main.temp,
        high: data.main.temp_max,
        low: data.main.temp_min,
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        description: data.weather[0].main,
        button: <form onSubmit={this.getFive}>
          <button>Get Five Day Forecast</button>
        </form>,
        return_error: "",
        error: ""
      })
    } //end if/else    
    
  } //end getWeather

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Results
                    city={this.state.city}
                    temp={this.state.temp}
                    high={this.state.high}
                    low={this.state.low}
                    humidity={this.state.humidity}
                    windspeed={this.state.windspeed}
                    description={this.state.description}
                    button={this.state.button}
                    error={this.state.error}
                  />
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;



