import './light.css'
import Block from './components/Block'
import Window from './components/Window'
import { useState, useEffect, useRef } from 'react'

function Light() {
    const [ red, setRed ] = useState(-1)
    const [ green, setGreen ] = useState(-1)
    const [ blue, setBlue ] = useState(-1)
    const [ modifyRed, setModifyRed ] = useState(0)
    const [ modifyGreen, setModifyGreen] = useState(0)
    const [ modifyBlue, setModifyBlue ] = useState(0)
    const [val, setVal] = useState(125)
    //const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
    //const data = [0, 50, 100, 150, 200, 250]
    //const [ data, setData ] = useState([])
    let data = []
    let secondData = []
    const palette = []
    const ref = useRef(-1)
   
    
   
    for(let i = 0; i < (252); i++)
    {
        data.push([(i % 256), (i % 256), (i % 256)])
    }
    
   console.log(data)
   /*
    for(let i = 0; i < 89; i++)
    {
        secondData.push(i)
    }
*/
    for(let i = 0; i < 10; i++)
    {
        palette.push(i)
    }
    
    
  
    /*
    function handleChange(val) {
        //console.log(i)
        
        console.log(ref.current)
        console.log('Clicked')
        //handleNum(ref.current)
    }
    */
    
    function handleChange(newRed, newGreen, newBlue) {
        setRed(newRed)
        setGreen(newGreen)
        setBlue(newBlue)
        console.log(newRed)
    }

    function changeRed(){
        setModifyRed(modifyRed + 20)
    }
    
    function changeBlue(){
        setModifyBlue(modifyBlue + 20)
    }

    function changeGreen(){
        setModifyGreen(modifyGreen + 20)
    }

    useEffect(() => {
       
    }, [red, green, blue, modifyRed, modifyBlue, modifyGreen, val])
    
   
    
    function changing(){
        console.log(val)
        setVal(document.getElementById("slide-input").value)
        console.log(val)
    }
    return (
        <>
        {/*<div className='palette'></div>*/}
      
        <div className='color-palette'>
            {palette.map(i => 
            <Block key={i} value={i} onClick={handleChange} margin={20}></Block>
                )}
        </div>
        <div className='selected-color' style={{backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)`}}>{red}</div>
        {/*modify > 0 && 
        <div className='window'>
            {data.map((item, i) =>
                <Block key={i} red={item[0]} green={item[1]} blue={item[2]} target={red} idx={i} myRef={ref} onClick={handleChange} margin={0} />
            )
           
            } 
           
        </div> 
        */} 
        {/*modify < 0 && 
        <div className='window'>
            {data.map((item, i) =>
                <Block key={i} red={item[0]} green={item[1]} blue={item[2]} target={red} idx={i} myRef={ref} onClick={handleChange} margin={0} />
            )} 
           
            </div> */}
        <div>
        <span><Window data={data} handleChange={handleChange} modifyRed={modifyRed} modifyBlue={modifyBlue} modifyGreen={modifyGreen}/></span><span> <input type="range" id="color-input"></input></span>
        </div>
        <button onClick={changeRed}>New Red</button>
        <button onClick={changeBlue}>New Blue</button>
        <button onClick={changeGreen}>New Green</button>
        <div className="slide" id="one"></div>
        <div className="slide" id="second"></div>
        <input type="range" id="slide-input" defaultValue="125" min="0" max="255" onChange={changing}></input>
        <p>{val}</p>
        <div className="element">
        <input type="range" id="color-input" orientation='vertical'></input>
        </div>
        <div className="gradient"></div>
        </>
    )
}

export default Light