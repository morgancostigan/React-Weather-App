import React from "react"

class Results extends React.Component {
    render() {
        return (
            <div>
                {this.props.city && <h3>Location: {this.props.city}</h3>}
                {this.props.temp && <h3>Current Temperature: {this.props.temp}°F</h3>}
                {this.props.description && <p>Current Conditions: {this.props.description}</p>}
                {this.props.high && this.props.low && <p>Temperature Range: {this.props.low}-{this.props.high}°F</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
                {this.props.windspeed && <p>Wind: {this.props.windspeed} mph</p>}
                <p>{this.props.error}</p>
            </div>
        )
    }
};

export default Results;