<template>
  <VueButton :counter="counter" />
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
  },
}
</script>
