import { Link } from 'react-router-dom'
import { useState } from 'react'

function Rooms() {
    const [rooms, setRooms] = useState([['Bedroom'],['Living Room'],['Kitchen']])
     function changeName(){

     }
    return (
        <>
        <h1>Rooms</h1>
        {rooms.map((item, i) => <div key={i} className='rooms'><span><input></input></span></div>)}
        <Link to='/light'>Light</Link>
        </>
    )
}

export default Rooms