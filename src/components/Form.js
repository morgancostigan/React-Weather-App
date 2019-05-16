import React from "react"


const Form = props => (
    <div>
        <form onSubmit={props.getWeather}>
            <input type="number" name="zipcode" placeholder="Zip Code" />
            <button>Get Weather</button>
        </form>

    </div>
)

export default Form;