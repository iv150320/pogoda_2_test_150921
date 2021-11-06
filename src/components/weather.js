import React from "react";

const Weather = (props) => (

<div className="infoWeath">

{ props.city && 

<div>

<p>Местоположение: {props.city}, {props.country} </p>

<p>Температура на данный момент:  {Math.round(props.temp)}°C</p>

<p>Мин./Макс. температура:  {Math.round(props.temp_min)}/{Math.round(props.temp_max)}°C</p>

<p>Давление: {props.pressure} hPa</p>

<p>Восход солнца:  {props.sunrise}</p>

<p>Заход солнца:  {props.sunset}</p>

<p>Влажность: {props.humidity}%</p>

<p>Видимость: {props.visibility/1000} км</p>

<p>Ветер: {props.wind} км/ч</p>

<p>Облачность: {props.clouds}%</p>

</div>

}


<p className="error"> {props.error} </p>

</div>

);

export default Weather;