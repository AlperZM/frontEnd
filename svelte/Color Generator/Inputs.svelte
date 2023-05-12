<script>
  let numbers = 0;
  export let cols = "";
</script>

<label
  ><span class="title">{cols}:</span>
  <input
    name={cols}
    type="number"
    min="0"
    max="255"
    bind:value={numbers}
    step="1"
    on:change
  />
  <input
    name={cols}
    type="range"
    min="0"
    max="255"
    bind:value={numbers}
    step="1"
    on:change
  />
</label>

<style>
  * {
    font-family: Arial, sans-serif;
  }
  label {
    display: flex;
  }
  input,
  span {
    margin: 10px;
  }
  .title {
    font-size: 18px;
  }
</style>
