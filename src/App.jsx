import React from 'react'
import { PageProvider } from './PageContext.jsx'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <PageProvider>
      <div className='container-fluid'>
        <Header />
        <Main />
        <Footer />
      </div>
    </PageProvider>
  )
}

export default App
