import React from "react"

const FiveResults = props => (
    <div className="weather__info">
        {
            props.city && <p className="weather__key">Location:
            <span className="weather__value"> {props.city}</span>
            </p>
        }
        {
            props.temp && <p className="weather__key">Current Temperature:
            <span className="weather__value"> {props.temp}°F</span>
            </p>
        }
        {
            props.description && <p className="weather__key">Current Conditions:
            <span className="weather__value"> {props.description}</span>
            </p>
        }
        {
            props.high && props.low && <p className="weather__key">Temperature Range:
            <span className="weather__value"> {props.low}-{props.high}°F</span>
            </p>
        }
        {
            props.humidity && <p className="weather__key">Humidity:
            <span className="weather__value"> {props.humidity}%</span>
            </p>
        }
        {
            props.windspeed && <p className="weather__key">Wind:
            <span className="weather__value"> {props.windspeed} mph</span>
            </p>
        }
        {
            props.error && <p>
                <span className="weather__key">{props.error}</span>
            </p>
        }
    </div>
)

export default FiveResults;