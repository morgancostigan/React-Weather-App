import React from "react"

class Form extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="zipcode" placeholder="Zip Code"/>
                    <button>Get Weather</button>
                </form>

            </div>
        )
    }
};

export default Form;