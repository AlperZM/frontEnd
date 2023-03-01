// to listen any event => on:... onClick => on:click...
on:mousemove={function}

// this componenet alerts only once
// "|once" => calls event just for one time.
<script>
	function handleClick() =>alert('clicked');
  //You can chain modifiers together,
on:click|once|capture={...}
//trusted — only trigger handler if event.isTrusted is true. I.e. if the event is triggered by a user action.
</script>
<button on:click|once={handleClick}>
	Click me
</button>
//dispatch
<script>
	import {createEventDispatcher} from "svelte";
	const dispatch = createEventDispatcher();

	function sayHello() {
dispatch("message", {text: "hello"});
	}
</script>

<button on:click={sayHello}>
	Click to say hello
</button>
<script>
	import Inner from './Inner.svelte';

	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>
// for bubling
<Inner on:message={handleMessage}/>
<script>
	import Inner from './Inner.svelte';
</script>

<Inner on:message/>

