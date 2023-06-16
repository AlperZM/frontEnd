<script>
  import Navbar from "./lib/Navbar.svelte";
  import Footer from "./lib/Footer.svelte";
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
  </section>
  <article id="what-is-svelte" class="articles">
    <h1>What is Svelte?</h1>
    <div class="para1-img"></div>
    <div class="para1">
      <p>
        <b>Sevelte</b> is a javaScript framework. But it has some difference from
        others. Svelte has a new aproach for the web development. With Svelte, coding
        is easy and funny.
      </p>
    </div>
  </article>
</main>
<Footer />

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
  .articles {
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    padding: 16px;
    overflow: auto;
  }
  .articles h1 {
    color: var(--fourth);
    margin: auto;
  }
  .para1-img {
    float: left;
    width: 300px;
    height: 300px;
    background: grey;
    margin: 16px;
    box-shadow: 5px 5px 10px 0px grey;
  }
  .para1 {
  }
</style>
