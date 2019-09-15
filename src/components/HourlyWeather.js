import React from "react";
import Style from "./hourlyWeather.css";

// lower part of display, shows hourly weather for next 6 hours
class HourlyWeather extends React.Component {

  state = {
    // by default no state loaded
    current_weather: undefined,
    city: undefined,
    country: undefined,

  }


  async componentWillUpdate(nextProps) {
    // on mount will check if undefined wont print anything
    // if state is defined, will update the whole component
    if((this.state.city !== this.props.city) || (this.state.country !== this.props.country)){
      console.log(this.props.city);
      console.log(this.state.city);
      this.setState({
        city : this.props.city,
        country : this.props.country,
      });
      const country = nextProps.country;
      const city = nextProps.city;

      // calls hourly api data to print
      const api_callhr = await fetch(`http://api.wunderground.com/api/5806a480e41ac556/hourly/q/${country}/${city}.json`);
      // puts it into json format
      const dataHr = await api_callhr.json();
      console.log(dataHr);

      let cur_wea = () => {
        return (
                // every table row is an hour of data
                // goes from 0-5 of hourly api array data
        <div>

           <table className = "hourlyTable">
             <tbody>
              <tr>
                  <td className = "hourlyTemp"> { dataHr.hourly_forecast[0].temp.metric }° </td>
                  <td> <img className="hourlyIcon" src={ dataHr.hourly_forecast[0].icon_url } alt="forecast icon"/> </td>
                  <td className = "hourlyPrecip"> { dataHr.hourly_forecast[0].pop }% <img alt="forecast icon" src ={require('./images/umbrella.png')}/></td>
                  <td className = "hourlyHumid"> { dataHr.hourly_forecast[0].humidity }% <img alt="forecast icon" src ={require('./images/humidity.png')}/></td>
                  <td className = "hourlyWind"> { dataHr.hourly_forecast[0].wspd.metric }kph <img alt="forecast icon" src ={require('./images/wind.png')}/></td>
                  <td id ="hourlyTimeTop"> { dataHr.hourly_forecast[0].FCTTIME.civil } </td>
              </tr>

              <tr>
                <td className = "hourlyTemp"> { dataHr.hourly_forecast[1].temp.metric }° </td>
                <td> <img className="hourlyIcon" src={ dataHr.hourly_forecast[1].icon_url } alt="forecast icon" /> </td>
                <td className = "hourlyPrecip"> { dataHr.hourly_forecast[1].pop }% <img alt="forecast icon" src ={require('./images/umbrella.png')}/></td>
                <td className = "hourlyHumid"> { dataHr.hourly_forecast[1].humidity }% <img alt="forecast icon" src ={require('./images/humidity.png')}/></td>
                <td className = "hourlyWind"> { dataHr.hourly_forecast[1].wspd.metric }kph <img alt="forecast icon" src ={require('./images/wind.png')}/></td>
                <td id ="hourlyTime1"> { dataHr.hourly_forecast[1].FCTTIME.civil } </td>
              </tr>

              <tr>
                <td className = "hourlyTemp"> { dataHr.hourly_forecast[2].temp.metric }° </td>
                <td> <img className="hourlyIcon" src={ dataHr.hourly_forecast[2].icon_url } alt="forecast icon"/> </td>
                <td className = "hourlyPrecip"> { dataHr.hourly_forecast[2].pop }% <img alt="forecast icon" src ={require('./images/umbrella.png')}/></td>
                <td className = "hourlyHumid"> { dataHr.hourly_forecast[2].humidity }% <img alt="forecast icon" src ={require('./images/humidity.png')}/></td>
                <td className = "hourlyWind"> { dataHr.hourly_forecast[2].wspd.metric }kph <img alt="forecast icon" src ={require('./images/wind.png')}/></td>
                <td id ="hourlyTime2"> { dataHr.hourly_forecast[2].FCTTIME.civil }</td>
              </tr>

              <tr>
                <td className = "hourlyTemp"> { dataHr.hourly_forecast[3].temp.metric }° </td>
                <td> <img className="hourlyIcon" src={ dataHr.hourly_forecast[3].icon_url } alt="forecast icon"/> </td>
                <td className = "hourlyPrecip"> { dataHr.hourly_forecast[3].pop }% <img src ={require('./images/umbrella.png')} alt="forecast icon"/></td>
                <td className = "hourlyHumid"> { dataHr.hourly_forecast[3].humidity }% <img src ={require('./images/humidity.png')} alt="forecast icon"/></td>
                <td className = "hourlyWind"> { dataHr.hourly_forecast[3].wspd.metric }kph <img src ={require('./images/wind.png')} alt="forecast icon"/></td>
                <td id ="hourlyTime3"> { dataHr.hourly_forecast[3].FCTTIME.civil }</td>
              </tr>

              <tr>
                <td className = "hourlyTemp"> { dataHr.hourly_forecast[4].temp.metric }° </td>
                <td> <img className="hourlyIcon" src={ dataHr.hourly_forecast[4].icon_url } alt="forecast icon"/> </td>
                <td className = "hourlyPrecip"> { dataHr.hourly_forecast[4].pop }% <img src ={require('./images/umbrella.png')} alt="forecast icon"/></td>
                <td className = "hourlyHumid"> { dataHr.hourly_forecast[4].humidity }% <img src ={require('./images/humidity.png')} alt="forecast icon"/></td>
                <td className = "hourlyWind"> { dataHr.hourly_forecast[4].wspd.metric }kph <img src ={require('./images/wind.png')} alt="forecast icon"/></td>
                <td id ="hourlyTime4"> { dataHr.hourly_forecast[4].FCTTIME.civil } </td>
              </tr>

              <tr>
                <td className = "hourlyTemp"> { dataHr.hourly_forecast[5].temp.metric }° </td>
                <td> <img className="hourlyIcon" src={ dataHr.hourly_forecast[5].icon_url } alt="forecast icon"/> </td>
                <td className = "hourlyPrecip"> { dataHr.hourly_forecast[5].pop }% <img src ={require('./images/umbrella.png')} alt="forecast icon"/></td>
                <td className = "hourlyHumid"> { dataHr.hourly_forecast[5].humidity }% <img src ={require('./images/humidity.png')} alt="forecast icon"/></td>
                <td className = "hourlyWind"> { dataHr.hourly_forecast[5].wspd.metric } kph <img src ={require('./images/wind.png')} alt="forecast icon"/></td>
                <td id ="hourlyTimeBottom"> { dataHr.hourly_forecast[5].FCTTIME.civil } </td>
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

  return(
    <div className ="container3">
      {this.state.current_weather}
    </div>
  );

}

};

export default HourlyWeather;
