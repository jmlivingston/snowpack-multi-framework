import { createElement } from './_snowpack/pkg/react.js'
import { render } from './_snowpack/pkg/react-dom.js'
import { createApp, h, reactive } from './_snowpack/pkg/vue.js'
import AppReact from './AppReact.js'
import AppSvelte from './AppSvelte.svelte.js'
import AppVue from './AppVue.vue.js'

let appSvelte
let appVue
let counter = 0
const vueProps = reactive({ counter, onChange: () => updateCounter('Vue') })
const consoleElement = document.getElementById('console')

function updateCounter(message) {
  counter = counter + 1
  document.getElementById('counter').innerHTML = `Shared Counter: ${counter}`
  console.log(document.getElementById('counter'))
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
