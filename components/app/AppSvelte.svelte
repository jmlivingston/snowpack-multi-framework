<script>
  import ButtonSvelte from '../core/ButtonSvelte.svelte'

  export let counter
  export let onChange
</script>

<ButtonSvelte {counter} onClick={onChange} />
