import React from "react";

//import Titles from "./components/Titles";
import CurrentWeather from "./components/CurrentWeather"
import HourlyWeather from "./components/HourlyWeather"
import Form from "./components/Form"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // by default no location is available until user enters information
      city: undefined,
      country: undefined,
    }
  }
getWeather = (e) => {
  // only allows individual components to update rather than whole page
  e.preventDefault();

  // allows for location to be updatdd via form component
  this.setState({
    city: e.target.elements.city.value,
    country: e.target.elements.country.value,
  });
}
// main output of all components plus updated states
  render() {
    return (
        <div>
          <CurrentWeather city={this.state.city} country={this.state.country}/>
          <Form getWeather={this.getWeather}/>
          <HourlyWeather city={this.state.city} country={this.state.country} />


        </div>
    );
  }
};

export default App;
