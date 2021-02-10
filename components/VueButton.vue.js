
import styles from './VueButton.module.css.proxy.js'
const defaultExport = {
  name: 'VueButton',
  methods: {
    onHandleClick() {
      this.localCounter += 1
      this.onClick()
    },
  },
  data: () => ({
    localCounter: 0,
    styles,
  }),
  props: {
    counter: Number,
    onClick: Function,
  },
}

import { toDisplayString as _toDisplayString, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "../_snowpack/pkg/vue.js"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("button", {
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onHandleClick && _ctx.onHandleClick(...args))),
    class: _ctx.styles.button
  }, " Vue Button (Local: " + _toDisplayString(_ctx.localCounter.toString()) + " / Shared: " + _toDisplayString(_ctx.counter) + ") ", 3))
}

defaultExport.render = render
export default defaultExport