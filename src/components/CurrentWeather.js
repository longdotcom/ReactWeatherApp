import React from "react";
import Style from "./currentWeather.css";

// top section of app



class CurrentWeather extends React.Component {

// default state when app is run
  state = {
    // takes current api data of weather right now
    APIUrl: "http://api.wunderground.com/api/5806a480e41ac556/conditions/q/UK/London.json",
    // takes hourly api data for bottom table, into array format
    APIhr: "http://api.wunderground.com/api/5806a480e41ac556/hourly/q/UK/London.json",

    current_weather: undefined,
    city: undefined,
    country: undefined,

  }


  async componentWillUpdate(nextProps) {
    //update location information if already not specified
    if((this.state.city !== this.props.city) || (this.state.country !== this.props.country)){
          // form component calls set state to change location
          this.setState({
            city : this.props.city,
            country : this.props.country,
          });
          const country = nextProps.country;
          const city = nextProps.city;

          // api locations are updated depending on form location data
          // this api call for current weather
        const api_call = await fetch(`http://api.wunderground.com/api/5806a480e41ac556/conditions/q/${country}/${city}.json`);
        const data = await api_call.json();
          // this api call updated for hourly weather
        const api_callhr = await fetch(`http://api.wunderground.com/api/5806a480e41ac556/hourly/q/${country}/${city}.json`);
        const dataHr = await api_callhr.json();
          // changes main weather in current weather from double to int
        let temper = data.current_observation.temp_c;
        temper = parseInt(temper,10);

        let cur_wea = () => {
          return (
            // main div of upper section of screen
            // current weather
      <div>
          <table id = "upper">
            <tbody>
            <tr>
              <td id = "runNow">RUN NOW </td>
              <td> <img id ="runner" alt="runner" src ={require('./images/runner.png') }/></td>
            </tr>

            <tr>
              <td id = "bigWeatherText">
                 { temper }°
              </td>
              <td>
                
                <img id= "bigWeatherIcon" src={data.current_observation.icon_url} alt="Weather icon"/>
              </td>
            </tr>

            <tr id = "feelCity">
              <td>
                Feels like: { data.current_observation.feelslike_c }°
              </td>
              <td id= "loc">
               { data.current_observation.display_location.city }
             </td>
            </tr>
          </tbody>
          </table>

          <table id = "lower">
            <tbody>
          <tr>
            <td>{ dataHr.hourly_forecast[0].pop }% <img alt="umbrella" src = {require('./images/umbrella.png') }/></td>
            <td>{ data.current_observation.relative_humidity } <img alt="humidity" src = {require('./images/humidity.png')}/></td>
            <td>{ data.current_observation.wind_kph } kph <img alt="wind" src = {require('./images/wind.png')}/></td>
          </tr>

          <tr id = "desc">
            <td>Precip</td>
            <td>Humidty</td>
            <td>Wind</td>
          </tr>
        </tbody>
        </table>
    </div>
        )};


        this.setState({
          current_weather: cur_wea(),

        });
    }
  }

render(){
  // main output of weather component imported into app
  return(
    <div className="container1">
      {this.state.current_weather}
    </div>
  );

}

};

export default CurrentWeather;

// <p>{ this.props.country }</p>
