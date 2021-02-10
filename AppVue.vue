<template>
  <VueButton :counter="counter" :onClick="onClick" />
</template>

<script>
import VueButton from './components/VueButton.vue'

export default {
  name: 'App',
  components: {
    VueButton,
  },
  props: {
    counter: Number,
    onClick: Function,
  },
}
</script>
