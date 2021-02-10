
import ButtonVue from '../core/ButtonVue.vue.js'

const defaultExport = {
  name: 'App',
  components: {
    ButtonVue,
  },
  props: {
    counter: Number,
    onChange: Function,
  },
}

import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "../../_snowpack/pkg/vue.js"

export function render(_ctx, _cache) {
  const _component_ButtonVue = _resolveComponent("ButtonVue")

  return (_openBlock(), _createBlock(_component_ButtonVue, {
    counter: _ctx.counter,
    onClick: _ctx.onChange
  }, null, 8, ["counter", "onClick"]))
}

defaultExport.render = render
export default defaultExport