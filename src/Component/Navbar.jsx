import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <ul className='navlinks'>
                <li ><Link className="linkbox" to='/'>User</Link></li>
                <li><Link className="linkbox" to='/new'>New</Link></li>
                <li><Link className="linkbox" to='/edit'>Edit</Link></li>
                
            </ul>
        </div>
    )
}