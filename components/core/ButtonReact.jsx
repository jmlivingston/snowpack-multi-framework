import React, { useState } from 'react'
import styles from './ButtonReact.module.css'

function ButtonReact({ counter, onClick }) {
  const [localCounter, setLocalCounter] = useState(0)

  return (
    <button
      className={styles.button}
      onClick={() => {
        onClick()
        setLocalCounter(localCounter + 1)
      }}>
      React Button (Local Counter: {localCounter} / Shared Counter: {counter})
    </button>
  )
}

export default ButtonReact
