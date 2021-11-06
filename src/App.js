import React from "react";
import Info from "./components/info"
import Form from "./components/form";
import Weather from "./components/weather";
import Reset1 from "./components/reset1";
import './App.css';
import './index.css'
import pic1 from './img/cloudy.png'


const API_KEY = "d5ed01a09a03b913e5cc79871b8c2a5a"; {/* http://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=d5ed01a09a03b913e5cc79871b8c2a5a&units=metric */}

class App extends React.Component {




  state = {
    temp: undefined,
    temp_min: undefined,
    temp_max: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    humidity: undefined,
    visibility: undefined,
    wind: undefined,
    clouds: undefined,
    sunrise: undefined,

    error: undefined
  }

  gettingWeather = async (e) => {

    console.log('gettingWeather - 1 СРАБОТАЛ');

    e.preventDefault();

    const city = e.target.elements.city.value;

    if(city) {

      const api_url = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      //конвертировал секунды из Апи в нормальный формат времени

      let sunset1 = data.sys.sunset;
      let sunset2 = new Date(sunset1*1000);
      let sunset3 = sunset2.toLocaleTimeString();

      let sunrise1 = data.sys.sunrise;
      let sunrise2 = new Date(sunrise1*1000);
      let sunrise3 = sunrise2.toLocaleTimeString();           

    this.setState({

      temp: data.main.temp,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      city: data.name,
      country: data.sys.country,
      pressure: data.main.pressure,
      sunset: sunset3,
      humidity: data.main.humidity,
      visibility: data.visibility,
      wind: data.wind.speed,
      clouds: data.clouds.all,
      sunrise: sunrise3,     

      error: undefined

    });

  }
  
    else {

      this.setState({
  
        temp: undefined,
        temp_min: undefined,
        temp_max: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        humidity: undefined,
        visibility: undefined,
        wind: undefined,
        clouds: undefined,
        sunrise: undefined,
        
  
        error: "Введите название города"
  
        });
  
      }
    
}

clickreset1 = () => {
 
   console.log('сброс - проверка');
 
   this.setState({
 
     temp: undefined,
     temp_min: undefined,
     temp_max: undefined,
     city: undefined,
     country: undefined,
     pressure: undefined,
     sunset: undefined,
     humidity: undefined,
     visibility: undefined,
     wind: undefined,
     clouds: undefined,
     sunrise: undefined,     
 
     error: "Сброс выполнен"
 
     });
 
 }; 



 go888 = () => {

  console.log('Вот так передали обработчик в компонент Info и через пропсы приняли там');
};




render() { 

return (

<div className="fon_main">

<Form weatherMethod={this.gettingWeather} />



<Weather

temp={this.state.temp}
temp_min = {this.state.temp_min}
temp_max = {this.state.temp_max}
city={this.state.city}
country={this.state.country}
pressure={this.state.pressure}
sunset={this.state.sunset}
humidity={this.state.humidity}
visibility={this.state.visibility}
wind={this.state.wind}
clouds = {this.state.clouds}
sunrise = {this.state.sunrise}

error={this.state.error}

/>


<Info  go888={this.go888} />  {/* !!! Вот так передали обработчик в компонент Info и через пропсы приняли там*/ }








</div>

    );
  }
}

export default App;