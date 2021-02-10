import React, { useState } from 'react'
import styles from './ReactButton.module.css'

function ReactButton({ counter, onClick }) {
  const [localCounter, setLocalCounter] = useState(0)

  return (
    <button
      className={styles.button}
      onClick={() => {
        onClick()
        setLocalCounter(localCounter + 1)
      }}>
      React Button (Local: {localCounter} / Shared: {counter})
    </button>
  )
}

export default ReactButton
