<template>
  <ButtonVue :counter="counter" :onClick="onChange" />
</template>

<script>
import ButtonVue from '../core/ButtonVue.vue'

export default {
  name: 'App',
  components: {
    ButtonVue,
  },
  props: {
    counter: Number,
    onChange: Function,
  },
}
</script>
