import { createElement } from 'react'
import { render } from 'react-dom'
import AppReact from './AppReact.jsx'
import AppSvelte from './AppSvelte.svelte'

let appSvelte
let counter = 0

function updateCounter() {
  counter = counter + 1
  renderReact()
  appSvelte.$destroy()
  renderSvelte()
}

function renderReact() {
  render(
    createElement(AppReact, {
      counter,
      onClick: () => {
        console.log('React Button Clicked!')
        updateCounter()
      },
    }),
    document.getElementById('react-root')
  )
}

function renderSvelte() {
  appSvelte = new AppSvelte({
    target: document.getElementById('svelte-root'),
    props: {
      counter,
      onClick: () => {
        console.log('Svelte Button Clicked!')
        updateCounter()
      },
    },
  })
}

renderReact()
renderSvelte()
