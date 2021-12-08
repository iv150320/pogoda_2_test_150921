import React from "react";

import _style from "react"


import pic1 from '../img/cloudy.png'

const Info = (props) => (

<div>



<div className="pogoda_komment_logo">    

    <img src={pic1}></img>
</div>



<div className="pogoda_komment_gradusy">&emsp;19°</div>

<a className="pogoda_komment_text">Преимущественно солнечно</a>

<a className="veter">Ветер</a>

<a className="veter_komment">5 м/c, западный</a>

<a className="davlenie">Давление</a>

<a className="davlenie_komment">752 мм рт. ст.</a>

<a className="vlaga">Влажность</a>

<a className="vlaga_komment">60%</a>

<a className="rain">Вероятность дождя</a>

<a className="rain_komment">10%</a>

    
    
<a className="text_c">C</a>

<a className="text_f">F</a>    

<a className="forma_knopka_g_f"></a>

<a className="gradus">º</a>

<a   onClick={props.go888} className="Rectangle_2" ></a>

<a className="Rectangle_3"></a>
 
<button style={props._style}  onClick={props.handlerButtonOnClick} >Down</button>















</div>

);


export default Info;




