<template>
  <button @click="onHandleClick" :class="styles.button">
    Vue Button (Local Counter: {{ localCounter.toString() }} / Shared Counter:
    {{ counter }})
  </button>
</template>

<script>
import styles from './ButtonVue.module.css'
export default {
  name: 'ButtonVue',
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
