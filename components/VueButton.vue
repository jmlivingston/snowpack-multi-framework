<template>
  <button @click="onHandleClick" :class="styles.button">
    Vue Button (Local: {{ localCounter.toString() }} / Shared: {{ counter }})
  </button>
</template>

<script>
import styles from './VueButton.module.css'
export default {
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
</script>

<style scoped>
@import './VueButton.module.css';
</style>
