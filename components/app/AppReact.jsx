import React from 'react'
import ButtonReact from '../core/ButtonReact.jsx'

function AppReact({ counter, onChange }) {
  return <ButtonReact counter={counter} onClick={onChange} />
}

export default AppReact
