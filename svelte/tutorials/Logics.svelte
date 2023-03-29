// {#if condition} js code blok {/if}

<script>
	let user = { loggedIn: false };
	function toggle() =>user.loggedIn = !user.loggedIn;
  let x = 7;
</script>
// Classical if block
{#if user.loggedIn}
	<button on:click={toggle}>Log out</button>
{/if}

{#if !user.loggedIn}
	<button on:click={toggle}>Log in</button>
{/if}

// if-else block
{#if user.loggedIn}
	<button on:click={toggle}>Log out</button>
{:else}
	<button on:click={toggle}>Log in</button>
{/if}

// multi else-if block
{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if 5 > x}
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}

// each loop
<script>
let arr = ["apple", "orange","banana"];
</script>
<h3>Shopping List</h3>
<ol>
{#each arr as i}
<li>{i.toUpperCase()}</li>
{/each}
</ol>

