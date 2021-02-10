
import VueButton from './components/VueButton.vue.js'

const defaultExport = {
  name: 'App',
  components: {
    VueButton,
  },
  props: {
    counter: Number,
    onChange: Function,
  },
}

import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "./_snowpack/pkg/vue.js"

export function render(_ctx, _cache) {
  const _component_VueButton = _resolveComponent("VueButton")

  return (_openBlock(), _createBlock(_component_VueButton, {
    counter: _ctx.counter,
    onClick: _ctx.onChange
  }, null, 8, ["counter", "onClick"]))
}

defaultExport.render = render
export default defaultExport