import React, { useContext } from 'react'
import { PageContext } from '../PageContext.jsx'

const NavItem = ({ itemTitle }) => {
  const { setPage } = useContext(PageContext);

  console.log('NavItem rendered:', itemTitle); // Добавьте эту строку для отладки

  return (
    <li onClick={() => setPage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
  )
}

export default NavItem