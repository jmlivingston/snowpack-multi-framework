import { createElement } from 'react'
import { render } from 'react-dom'
import { createApp, h, reactive } from 'vue'
import AppReact from './components/app/AppReact.jsx'
import AppSvelte from './components/app/AppSvelte.svelte'
import AppVue from './components/app/AppVue.vue'

let appSvelte
let appVue
let counter = 0
const vueProps = reactive({ counter, onChange: () => updateCounter('Vue') })
const consoleElement = document.getElementById('console')

function updateCounter(message) {
  counter = counter + 1
  document.getElementById('counter').innerText = `Shared Counter: ${counter}`
  // Update console
  const messageElement = document.createElement('div')
  messageElement.innerHTML = `${message} - ${
    new Date().toTimeString().split(' ')[0]
  }`
  consoleElement.prepend(messageElement)
  // Update React, Svelte, and Vue
  renderReact()
  appSvelte.$set({
    counter,
  })
  vueProps.counter = counter
}

function renderReact() {
  render(
    createElement(AppReact, {
      counter,
      onChange: () => updateCounter('React'),
    }),
    document.getElementById('react-root')
  )
}

function renderSvelte() {
  appSvelte = new AppSvelte({
    target: document.getElementById('svelte-root'),
    props: {
      counter,
      onChange: () => updateCounter('Svelte'),
    },
  })
}

function renderVue() {
  appVue = createApp({
    render() {
      return h(AppVue, vueProps)
    },
  }).mount('#vue-root')
}

renderReact()
renderSvelte()
renderVue()
