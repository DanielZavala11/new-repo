import './block.css'
import { useEffect, useState } from 'react'

function Block(props) {
    /*
    const [ data, setData ] = useState(0)
    
    function change() {
        setData(data + 1)
    }

    useEffect(() => {

    }, [data])
    */
    /*
    function change() {
        myRef.current = value
        console.log(myRef.current)
        target = value
        console.log(target)
    }
    */

    function handleChange() {
        props.onClick(props.red, props.green, props.blue)
    }

    return (
        <div className="color-block" onClick={handleChange} key={props.idx} style={{backgroundColor: `rgba(${props.red}, ${props.green}, ${props.blue}, 1)`, margin: `${props.margin}px`}}></div>
    )
}

export default Block