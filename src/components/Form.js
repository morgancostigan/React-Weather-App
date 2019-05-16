import React from "react"


const Form = props => (
    <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name="zipcode" placeholder="Zip Code" />
            <button>Get Weather</button>
        </form>

    </div>
)

export default Form;