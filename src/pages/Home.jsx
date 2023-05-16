import Jobs from './Jobs'
import Settings from './Settings'
import { Link } from "react-router-dom"
import './home.css'
import { useState, useEffect } from 'react'

function Home() {
    const [deg, setDeg] = useState(0)
    const [alpha, setAlpha] = useState(.9)
    const [beta, setBeta] = useState(.3)
    const [up, setUp] = useState(true)
    const [ascending, setAscending] = useState(true)

    const arc = () => {
        if(deg >= 0 && deg < 360)
        {
            setDeg(deg + 1)
        }
      
    }
    
    useEffect(() => {
        
    }, [deg])

    useEffect(() => {
        
        const interval = setInterval(() => {
            if(up && alpha <= 1)
            {
                setAlpha(alpha + .1)
            }
            else if(alpha === .9)
            {
                setUp(true)
                setAlpha(alpha + .1)
            }
            else
            {
                setUp(false)
                setAlpha(alpha - .1)
            }
        }, 60);
        return () => clearInterval(interval);
    }, [alpha]);
    
    useEffect(() => {
      const interval = setInterval(() => {
       if(ascending && beta <= .4)
            {
                setBeta(beta + .1)
            }
            else if(beta === .3)
            {
                setAscending(true)
                setBeta(beta + .1)
            }
            else
            {
                setAscending(false)
                setBeta(beta - .1)
            }
        }, 5000);
        return () => clearInterval(interval)
    }, [beta])
    return (
        <>
        <h1 className="app-title" style={{textShadow: `0px 10px 10px rgba(11, 156, 49, ${alpha})`, color: `rgba(22, 249, 194, .5)`}}>Home</h1>
        {/*
        <div className="pac-man"></div>
        <Link to='/jobs' id="jobs"><div className="jobs-button"><span className="button-name">Jobs</span></div></Link>
        <Link to='/settings' id="settings" >Settings</Link>
        <Link to='/data'>Data</Link>
        <div className="shape" style={{ backgroundImage: `conic-gradient(blue 0deg, blue ${deg}deg, green 0deg)`}}>
           
            <div className='inner-circle' onClick={arc}>
                <p className='percentage'>{Math.floor((deg / 360) * 100)}%</p>
            </div>
        </div>
        <div className="block"><span className='part1'></span><span className='knob'></span><span className='part2'></span></div>
    */} 
        <div className="container">
          <div className='connect'><h1>Templates</h1></div>
          <Link to='/rooms'><div className='rooms'><h1>Rooms</h1></div></Link>
          <div className='scenes'><h1>Scenes</h1></div>
        </div>
        <nav className="bottom-nav"><p>Home</p></nav>
        </>
    )
}

export default Home