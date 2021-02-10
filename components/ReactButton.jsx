import React from 'react'
import styles from './ReactButton.module.css'

function ReactButton({ counter, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      React Button (Shared Counter: {counter})
    </button>
  )
}

export default ReactButton
