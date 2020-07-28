import React from 'react'
import './App.css'

import Header from './components/Header/Header'
import Circle from './layouts/Circle/Circle'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <Circle />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App
