<script>
  import Buttons from "./lib/Buttons.svelte";

</script>

<div id="frame">
<div id="digit">
  <span id="input">0</span>
  
</div>
  <div id="numPad">
<Buttons buttonId="1" />
    <Buttons buttonId="2" />
    <Buttons buttonId="3" />
    <Buttons buttonId="4" />
    <Buttons buttonId="5" />
    <Buttons buttonId="6" />
    <Buttons buttonId="7" />
    <Buttons buttonId="8" />
    <Buttons buttonId="9" />
    <Buttons buttonId="0" />
  </div>
</div>


<style>
  *{box-sizing: border-box;}
  #frame{
    position:absolute;
    width: 300px;
    height: 400px;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    border: 1px solid #000;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 5px 5px 5px 8px grey;
  }
  #digit{
    position: absolute;
    width: 260px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 10px;
    margin:0 10px 20px 0;
  }
  
  #input{
    font-size: 20px;
    right:0px;
    position: absolute;
    width: 258px;
    height: 48px;
    border: none;
    border-radius: 10px;
  }

  #numPad{
    position: absolute;
    top: 100px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-flow: wrap row;
    background-color: red;
  }
</style>
