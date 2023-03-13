<script>
//  export let display;
  export let buttonId;
  let num1 = "0";
  let num2 = "0";
  let operant;
  function numbers(){
   return num1 += buttonId;
  }
</script>
<button type="button" on:click={numbers}>
  {buttonId}
</button>

<style>
  button{
    display: absolute;
    width: 40px;
    height: 40px;
    margin: 5px;
  }
</style>
