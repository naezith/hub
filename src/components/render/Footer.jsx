import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = ({user}) => 
    <footer>
        <p className='footer-copyright'>&copy; Tolga Ay 2018</p>
        <ul className='footer-links'>
            { user && <li className='logout'><Link to={'/steam/logout'}>Logout</Link></li> }
            <li><a href='https://github.com/naezith/hub' target='_blank' rel='noopener noreferrer'>Source on GitHub</a></li>
            <li><a href='https://discord.gg/naezith' target='_blank' rel='noopener noreferrer'>Discord Server</a></li>
            <li><a href='https://naezith.com' target='_blank' rel='noopener noreferrer'>Remnants of Naezith</a></li>
        </ul>
    </footer>
