import React from "react";
import Style from "./form.css";

// middle component, updates the undefined state
// passes location via props to current weather and hourly weather

const Form = props => (

<div className="container2">


  <form onSubmit={props.getWeather}>

    <input className="formF"  type ="text" name="city" placeholder="City.." />
    <input className="formF" type ="text" name="country" placeholder="Country.." />

    <button className="buttonF" >Update</button>

  </form>

</div>

);
export default Form;
