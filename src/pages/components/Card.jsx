import './card.css'
import { useState, useEffect } from 'react'


function Card() {

    const [red, setRed] = useState(255)
    const [green, setGreen] = useState(255)
    const [blue, setBlue] = useState(255)

    let value = 1
    
    const toggleRed = index  => {
        setRed(index);
    };
    
    const toggleBlue = index  => {
        setBlue(index);
    };

    useEffect(() => {

    },[red, blue]);
    
    function anne (){
        console.log('triggeredred')
        let x = document.getElementById("red-value").value;
        if(x)
            document.getElementById("demo").innerHTML = x;
            toggleRed(x)
    };

    function anne1 (){
        console.log('triggeredblue')
        let x = document.getElementById("blue-value").value;
        if(x)
            document.getElementById("demo1").innerHTML = x;
            toggleBlue(x)
    };
   
    return (
        <div className='card-body'>
            <h1>Card</h1>
            <div className='colors' onClick={() => toggleRed(50)} style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></div>
            <h2>{red}</h2>
            <h2>{green}</h2>
            <h2>{blue}</h2>
            <p id="demo"></p>
            <p id="demo1"></p>
            <label>RED</label>
            <h2><input className="input-field" id="red-value" type='number' min='0' max='255' defaultValue='1' onChange={anne}/></h2>
            <label>BLUE</label>
            <h2><input className="input-field" id="blue-value" type='number' min='0' max='255' defaultValue='1' onChange={anne1}/></h2>
        </div>
    )
}

export default Card