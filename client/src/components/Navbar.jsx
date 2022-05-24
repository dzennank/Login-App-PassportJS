import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <div className='navbar'>
        <span className='logo'>
          <Link className="link" to="/">Social App</Link>
        </span>
        { user ? <ul className='list'>
            <li className='listItem'>
            <img src='' alt='' className='avatar' />
            </li>
            <li className='listItem'>Camil Bagzi Plojovic</li>
            <li className='listItem'>Logout</li>
        </ul> : <ul>
        <li className='listItem'><Link className='link' to="login">Login</Link></li>
        </ul> }
        
    </div>
    
  )
}

export default Navbar