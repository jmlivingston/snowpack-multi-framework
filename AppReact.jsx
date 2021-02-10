import React from 'react'
import ReactButton from './components/ReactButton.jsx'

function AppReact({ counter, onClick }) {
  return <ReactButton counter={counter} onClick={onClick} />
}

export default AppReact
