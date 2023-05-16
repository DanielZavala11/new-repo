import Block from './Block'
import { useEffect } from 'react'

function Window({data, handleChange, modifyRed, modifyBlue, modifyGreen}) {
    
    useEffect(() => {

    },[modifyRed])

    return (
        <div className='window'>
            {data.map((item, i) =>
                <Block key={i} red={item[0] + modifyRed} green={item[1] + modifyGreen} blue={item[2] + modifyBlue} idx={i} onClick={handleChange} margin={0} />
            )} 
           
        </div>
    )
}

export default Window