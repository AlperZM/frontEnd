<script>
  import Inputs from "./lib/Inputs.svelte";
  let squareColor = [0, 0, 0];
  function changeColor() {
    this.name === "Red"
      ? (squareColor[0] = this.value)
      : this.name === "Green"
      ? (squareColor[1] = this.value)
      : (squareColor[2] = this.value);
  }
</script>

<section id="calculator-frame">
  <span id="calculator-title">Svelte Project - Color Generator</span>
  <div class="settings">
    <Inputs cols="Red" on:change={changeColor} />
    <Inputs cols="Green" on:change={changeColor} />
    <Inputs cols="Blue" on:change={changeColor} />
  </div>
  <span>Currenet Value is:</span>
  <span id="result" style="color: rgb({squareColor})">rgb({squareColor})</span>
  <div
    class="square"
    style="background-color : rgb({squareColor.toString()})"
  />
</section>

<style>
  * {
    font-family: Arial, sans-serif;
  }
  #calculator-title {
    display: grid;
    place-items: center;
    font-size: 18px;
  }

  #calculator-frame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 400px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 5px #000;
  }
  .settings {
    display: grid;
    place-items: center;
    margin: 5px;
  }
  .square {
    width: 150px;
    height: 150px;
    margin: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 10px #aaa;
  }
  #result {
    font-size: 18px;
    font-weight: 600;
    margin: 10px;
  }
</style>
