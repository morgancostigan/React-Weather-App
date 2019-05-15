import React from "react"

class Results extends React.Component {
    render() {
        return (
            <div>
                <h3>Location: {this.props.city}</h3>
                <h3>Current Temperature: {this.props.temp}</h3>
                <p>Current Conditions: {this.props.description}</p>
                <p>Temperature Range: {this.props.low}-{this.props.high}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>Wind: {this.props.windspeed} mph</p>
                <p>{this.props.error}</p>
            </div>
        )
    }
};

export default Results;