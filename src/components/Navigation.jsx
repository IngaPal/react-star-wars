import React from 'react'
import NavItem from './NavItem'
import { navItems } from '../utils/constants'

const Navigation = () => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                {navItems.map(item => <NavItem key={item} itemTitle={item} />)}
            </ul>
        </nav>
    )
}

export default Navigation