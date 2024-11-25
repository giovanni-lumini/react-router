import { useState, useEffect } from 'react'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

import './App.css'

function App() {
  return (
    <>
      <AppHeader />
      <div className="container">
        <AppMain />
      </div>
    </>
  )
}

export default App




