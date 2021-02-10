<script>
  export let counter
  export let onClick
</script>

<button on:click={onClick}>Svelte Button (Shared Counter: {counter})</button>

<style>
  button {
    background-color: #ff3e00;
    border-radius: 10px;
    border: none;
    color: #fff;
    padding: 10px 16px;
  }
</style>
