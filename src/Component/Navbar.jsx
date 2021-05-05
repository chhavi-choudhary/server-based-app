import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

export default function Nvbar() {
    return (
        <div>
            <ul className='navbar'>
                <li><Link to='/'>User</Link></li>
                <li><Link to='/new'>New</Link></li>
                <li><Link to='/edit'>Edit</Link></li>
                
            </ul>
        </div>
    )
}