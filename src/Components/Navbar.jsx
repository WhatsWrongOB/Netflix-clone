import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className="menu">
                    <li><Link to = "/" className='link'>Tv Shows</Link></li>
                    <li><Link to = "/" className='link'>Movies</Link></li>
                    <li><Link to = "/" className='link'>Recently Added</Link></li>
                    <li><Link to = "/" className='link'>My List</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar