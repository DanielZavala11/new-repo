import triangle from '../assets/triangle.svg'
import reactLogo from '../assets/react.svg'
import pic from '../assets/object.svg'
import './initial-page.css'
import {Link} from 'react-router-dom'

function InitialPage() {
    return (
        <div className='page'>
          <h1 className='initial-title'>
            <span>Illuminate</span>
            <p id='with'>with</p>
            <span>BBC</span>
          </h1>
          <div className='logo'>
            <img src={triangle} className='triangle'/> 
          </div> 
          <div className="options">
            <Link to='/login'><p className='designation'>Log In</p></Link>
            <Link to='/signup'><p className='designation'>Sign Up</p></Link>
          </div>  
        </div>
       )
}

export default InitialPage