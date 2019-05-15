import React from "react"

const Results = props => (
    <div>
        {props.city && <h3>Location: {props.city}</h3>}
        {props.temp && <h3>Current Temperature: {props.temp}°F</h3>}
        {props.description && <p>Current Conditions: {props.description}</p>}
        {props.high && props.low && <p>Temperature Range: {props.low}-{props.high}°F</p>}
        {props.humidity && <p>Humidity: {props.humidity}%</p>}
        {props.windspeed && <p>Wind: {props.windspeed} mph</p>}
        {props.error && <p>{props.error}</p>}
    </div>
)

export default Results;