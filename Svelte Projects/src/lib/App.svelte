<script>
  import Navbar from "./lib/Navbar.svelte";
  import Footer from "./lib/Footer.svelte";
  import LearnMore from "./lib/LearnMore.svelte";
</script>

<main>
  <Navbar />
  <section id="main-frame">
    <div id="hero">
      <div id="hero-img" />
      <div id="hero-description">
        <h1>Svelte </h1>
        <p>New Aproach for Web Development</p>
              <form action="#contact">
        <button id="hero-btn">Contact</button>
      </form>
      </div>
    </div>
  </section>
  <section id="intro" class="articles">
<div class="boxes">
<div id="what-is-svelte" class="intro-box">
  <h2>What is Svelte?</h2>
<p><b>Svelte</b> is an extra ordinary javaScript Framework. The keywords for Svelte is: "ServerSideRendering" and "Minimalist". That means less code, less page(app) size and happy developers, happy users.</p>
<LearnMore page="#" />
</div>
  <div id="why-svelte" class="intro-box">
    <h2>Why You Should Use Svelte?</h2>
    <p><b>Svelte</b> has new aproaches for the web and app development. One of them is <b>Server Side Rendering</b>, that means all javaScript and other details complies in server. And send user complied app. Other advantages is minimalizm. Thşs means write less code...</p>
    <LearnMore page="#" />
  </div>
  <div id="new-aproach" class="intro-box">
    <h2>New Aproaches</h2>
    <p>Most of javaScript frameworks or libraries compiles in client side. That is why some times page or app is seems slowly. But <b>Svelte compiles in Server</b> and send user the output of the app. </p>
    <LearnMore page="#"/>
  </div>
</div>
  </section>
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
    justify-content: center;
    align-items: center;
  }
  #hero-description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    padding: 8px;
    overflow: auto;
  }
  .boxes{
        display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: row wrap;
    -ms-flex-flow: row wrap;
  }
.intro-box{
  width: 300px;
  height: 360px;
  margin: 16px;
  padding: 16px;
  background: var(--secondary);
  border-radius: 16px;
}

</style>
