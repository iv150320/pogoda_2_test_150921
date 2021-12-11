import React from "react";

import Form from "./components/form";
import Weather from "./components/weather";
import Reset1 from "./components/reset1";
import './App.css';
import './index.css';
import sun_pic from './img/sun.png';
import strom_pic from './img/strom.png';
import rain_pic from './img/rain.png';
import partly_cloudy_pic from './img/partly_cloudy.png';
import cloud_pic from './img/cloud.png';
import location_pic from './img/location_pic.png'



const API_KEY = "d5ed01a09a03b913e5cc79871b8c2a5a"; {/* http://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=d5ed01a09a03b913e5cc79871b8c2a5a&units=metric */}

class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      style_C: "Rectangle_2_blur_on",
      style_F: "Rectangle_3_blur_off",
      text_f: "text_f_off",
      text_c: "text_c_on",

      temp: undefined,
      temp_с: undefined,
      temp_f: undefined,    
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
      rain: undefined,
      weather_description: undefined,      
      windDirection_1: undefined,
      _pic: undefined,


      tablo_vvod_forma: "hidden_1",


      error: undefined   

    };


    this.style_C_handler = this.style_C_handler.bind(this);
    this.style_F_handler = this.style_F_handler.bind(this);
    this.change_city_handler = this.change_city_handler.bind(this);

  }


  gettingWeather = async (e) => {

    console.log('gettingWeather - 1 СРАБОТАЛ');

    e.preventDefault();

    const city = e.target.elements.city.value;

    if(city) {

      const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      //конвертировал секунды из Апи в нормальный формат времени

      let sunset1 = data.sys.sunset;
      let sunset2 = new Date(sunset1*1000);
      let sunset3 = sunset2.toLocaleTimeString();

      let sunrise1 = data.sys.sunrise;
      let sunrise2 = new Date(sunrise1*1000);
      let sunrise3 = sunrise2.toLocaleTimeString();

      let temp_c = data.main.temp + "º";
      let temp_f = (data.main.temp*9/5) + 32 + "º";





      let windDegree = data.wind.deg;
      let windDirection;
      
      switch (true) {
          case (337.5 <= windDegree  || windDegree <= 22.5):
              windDirection = 'северный';
              console.log('северный');
              break;
          case (22.6 <= windDegree &&  windDegree <= 67.5):
              windDirection = 'северо-восточный';
              console.log('северо-восточный');
              break;
          case (67.6 <= windDegree &&  windDegree <=  112.5):
              windDirection = 'восточный';
              console.log('восточный');
              break;
          case (112.6 <= windDegree &&  windDegree <=  157.5):
              windDirection = 'юго-восточный';
              console.log('юго-восточный');
              break;
          case (157.6 <= windDegree &&  windDegree <=  202.5):
              windDirection = 'южный';
              console.log('южный');
              break;
          case (202.6 <= windDegree &&  windDegree <=  247.5):
              windDirection = 'юго-западный';
              console.log('юго-западный');
              break;
          case (247.6 <= windDegree &&  windDegree <=  292.5):
              windDirection = 'западный';
              console.log('западный');
              break;
          case (292.6 <= windDegree &&  windDegree <=  357.4):
              windDirection = 'северо-западный';
              console.log('северо-западный');
              break;
      
          default:
              windDirection = 'непредсказуемый';
              console.log('непредсказуемый');
              break;
      }



      let w_descriprion = data.weather[0].description;
      let pic_main;

      switch(true) {

        case(w_descriprion === 'ясно'):
        pic_main = sun_pic;
        break;

        case(w_descriprion === 'облачно с прояснениями' || w_descriprion === 'переменная облачность' || w_descriprion === 'небольшая облачность'):
        pic_main = partly_cloudy_pic;
        break;

        case(w_descriprion === 'пасмурно'):
        pic_main = cloud_pic;
        break;

        case(w_descriprion === 'дождь' || w_descriprion === 'небольшая морось' || w_descriprion === 'снег'   ):
        pic_main = rain_pic;
        break;

        case(w_descriprion === 'гроза'):
        pic_main = strom_pic;
        break;

        default:
          pic_main = partly_cloudy_pic;
        break;     

      }

      
      

    this.setState({


      temp: data.main.temp + "º",

      
      temp_c: data.main.temp + "º",
      temp_f: (data.main.temp*9/5) + 32 + "º",


      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      city: data.name,
      country: data.sys.country,
      pressure: data.main.pressure + " мм рт. ст.",
      sunset: sunset3,
      humidity: data.main.humidity + "%",
      visibility: data.visibility,
      wind: data.wind.speed + " м/c," ,
      clouds: data.clouds.all,
      sunrise: sunrise3,      
      rain: "10%",
      weather_description: data.weather[0].description.toUpperCase(),
      windDirection_1: windDirection,
      _pic: pic_main,

      style_C: "Rectangle_2_blur_on",
      style_F: "Rectangle_3_blur_off",
      text_f: "text_f_off",
      text_c: "text_c_on",


      tablo_vvod_forma: "hidden_1",

      error: undefined

    });

  }
  
    else {

      this.setState({

  
        temp: undefined,

        temp_с: undefined,
        temp_f: undefined,


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
        rain: undefined,
        weather_description: undefined,
        windDirection_1: undefined,

        _pic: undefined,
        
  
        error: "Введите название города"
  
        });
  
      }
    
}






 
    style_C_handler(){



      console.log('style_C_handler');

      this.setState({

        style_C: "Rectangle_2_blur_on",
        style_F: "Rectangle_3_blur_off",
        text_f: "text_f_off",
        text_c: "text_c_on",

        temp: this.state.temp_c

   
      });
    };




      style_F_handler(){     

      console.log('style_F_handler');

      this.setState({

        style_C: "Rectangle_2_blur_off",
        style_F: "Rectangle_3_blur_on",
        text_f: "text_f_on",
        text_c: "text_c_off",

        temp: this.state.temp_f
    
      });
    };




    change_city_handler(){     

      console.log("change_city_handler");

      this.setState({

        tablo_vvod_forma: "tablo_vvod_forma"

    
      });
    };
















 /*go888 = () => { console.log('Вот так передали обработчик в компонент Info и через пропсы приняли там'); };*/ 




render() { 






return (



<div className="fon_main">




<div className="city_menu">

  <a className="city_name">{this.state.city}</a>

  <a onClick={this.change_city_handler} className="change_city">Сменить город</a>

  <a className="current_location">Мое местоположение</a>

  <div className="location_logo_parent">

    <a className="location_logo_child" > </a>

  </div>

</div>



<span className={this.state.tablo_vvod_forma}>  

</span> 




<form onSubmit={this.gettingWeather} className={this.state.tablo_vvod_forma}>

<select className="tablo_vvod_text"  name="city">   
  <option value='Сочи' type="text" >Сочи</option>
  <option value='Москва' type="text" >Москва</option>   
 
 </select>



<button className="tablo_vvod_knopka">ОК</button>

</form>










<div className="pogoda_komment_logo">    

    <img src={this.state._pic}></img>
</div>

<a className="pogoda_komment_gradusy">&emsp; &emsp;{this.state.temp}  </a>

<a className="pogoda_komment_text"> {this.state.weather_description}</a>

<a className="veter">Ветер</a>

<a className="veter_komment"> {this.state.wind} {this.state.windDirection_1}</a>

<a className="davlenie">Давление</a>

<a className="davlenie_komment">{this.state.pressure }</a>

<a className="vlaga">Влажность</a>

<a className="vlaga_komment"> {this.state.humidity} </a>

<a className="rain">Вероятность дождя</a>

<a className="rain_komment">{this.state.rain}</a>

    
    
<a className={this.state.text_c}>C</a>


<a className={this.state.text_f}>F</a>    



<a className="forma_knopka_g_f"></a>

<a className="gradus">º</a>

<a onClick={this.style_C_handler} className={this.state.style_C} ></a>

<a onClick={this.style_F_handler} className={this.state.style_F}></a>







</div>




    );
  }
}

export default App;