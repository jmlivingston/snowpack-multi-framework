<template>
  <!-- TODO: Fix so we can use style tag -->
  <button
    @click="onHandleClick"
    style="
      background-color: #41b884;
      border-radius: 10px;
      border: none;
      color: #fff;
      padding: 10px 16px;
    "
  >
    Vue Button (Local: {{ localCounter.toString() }} / Shared: {{ counter }})
  </button>
</template>

<script>
export default {
  name: 'VueButton',
  methods: {
    onHandleClick() {
      this.localCounter += 1
    },
  },
  data: () => ({
    localCounter: 0,
  }),
  props: {
    counter: Number,
    onClick: Function,
  },
}
</script>
