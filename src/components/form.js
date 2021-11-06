import React from "react";
import '../App.css';
import '../index.css'

const Form = (props)  => (
    

<form className="tablo_vvod_forma" onSubmit={props.weatherMethod}>

<p className="tablo_vvod_text"> Петропавловск Камчатский </p>


<button className="tablo_vvod_knopka">ОК</button>


</form>

);


export default Form;