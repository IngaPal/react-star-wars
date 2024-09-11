import React, { useContext } from 'react'
import Home from './Home'
import { navItems } from '../utils/constants'
import AboutMe from './AboutMe'
import StarWars from './StarWars'
import Contact from './Contact'
import { PageContext } from '../PageContext.jsx'

const Main = () => {
  const { page } = useContext(PageContext);

  return (
    <main className="container">
      {page === navItems[0] && <Home />}
      {page === navItems[1] && <AboutMe />}
      {page === navItems[2] && <StarWars />}
      {page === navItems[3] && <Contact />}
    </main>
  )
}

export default Main