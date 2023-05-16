import './log-in.css'
import { OnButton } from '../assets/icons/icons'
import {Link} from 'react-router-dom'

function LogIn () {

    function letterToStar() {
        if(document.getElementById('password').value)
           document.getElementById('password').value = document.getElementById('password').value.substring(0, document.getElementById('password').value.length - 1) + '*'
    }

    return (
        <>
        <h1 className='title' id='top'>Log In</h1>
        {/*
        <h1 className='title'>Username</h1>
        <h1 className='title'>Password</h1>
    */}
        <h2 className="field-title">Username</h2>
        <input className='field' placeholder='Smith'></input>
        <h2 className="field-title">Password</h2>
        <input className='field' onChange={letterToStar} id="password"></input>
        
       <div className='custom'>
       <Link to='/home'><button className='submit-button'><span className='label'>Log In</span></button></Link>
       </div> 
        </>
    )
}

export default LogIn