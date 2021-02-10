<script>
  import SvelteButton from './components/SvelteButton.svelte'

  export let counter
  export let onClick
</script>

<SvelteButton {counter} {onClick} />
