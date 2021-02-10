<script>
  export let counter
  export let onClick
  let localCounter = 0
</script>

<button
  class="button"
  on:click={() => {
    localCounter += 1
    onClick()
  }}
  >Svelte Button (Local Counter: {localCounter} / Shared Counter: {counter})</button
>

<style>
  .button {
    background-color: #ff3e00;
  }
</style>
