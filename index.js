import { createElement } from 'react'
import { render } from 'react-dom'
import { createApp, h, reactive } from 'vue'
import AppReact from './AppReact.jsx'
import AppSvelte from './AppSvelte.svelte'
import AppVue from './AppVue.vue'

let appSvelte
let appVue
let counter = 0
const vueProps = reactive({ counter, onClick: () => updateCounter('Vue') })
const consoleElement = document.getElementById('console')

function updateCounter(message) {
  const messageElement = document.createElement('div')
  messageElement.innerHTML = `${message} - ${
    new Date().toTimeString().split(' ')[0]
  }`
  consoleElement.prepend(messageElement)
  counter = counter + 1
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
      onClick: () => updateCounter('React'),
    }),
    document.getElementById('react-root')
  )
}

function renderSvelte() {
  appSvelte = new AppSvelte({
    target: document.getElementById('svelte-root'),
    props: {
      counter,
      onClick: () => updateCounter('Svelte'),
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
