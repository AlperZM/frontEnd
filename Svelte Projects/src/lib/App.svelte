<script>
  import Navbar from "./lib/Navbar.svelte";

</script>

<main>
  <Navbar />
  <section id="main-frame">
    <div id="hero">
      <div id="hero-img" />
      <div id="hero-description">
        <span>Wellcome to Svelte</span>
      </div>
      <form action="#contact">
        <button id="hero-btn">Contact</button>
      </form>
    </div>
    <article id="tutorial" class="frame" />
  </section>
  <article id="what-is-svelte">
    <h1>What is Svelte?</h1>
  </article>
</main>

<style>
  main {
    margin: 0 0 0 120px;
  }
  #main-frame {
    position: relative;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  #hero {
    width: 100%;
    height: 300px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("/public/img/web.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
  #hero-description {
    font-size: 36px;
    color: var(--third);
    margin: 20px;
  }
  #hero-btn {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    color: var(--third);
    background: var(--primary);
    transition: all 0.4s linear;
    margin: 20px;
  }
  #hero-btn:hover {
    background: var(--third);
    color: var(--primary);
    cursor: pointer;
    transition: all 0.4s linear;
  }
  #what-is-svelte {
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    padding: 16px;
  }
  #what-is-svelte h1 {
    color: var(--fourth);
  }
</style>
