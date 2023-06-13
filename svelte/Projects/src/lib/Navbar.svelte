<script>
</script>

<nav id="navigation">
  <a href="#main">Main</a>
  <a href="project1">Project1</a>
</nav>

<style>
  #navigation {
    display: flex;
    justify-content: start;
    align-content: start;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 120px;
    height: 100%;
    background: var(--primary);
    color: var(--secondary);
  }
  #navigation a {
    display: block;
    width: 104px;
    height: 20px;
    margin: 8px 0;
    padding: 8px 0 8px 16px;
    font-size: 16px;
    color: var(--third);
    text-decoration: none;
    transition: all 0.4s ease;
    text-align: left;
  }
  #navigation a:hover {
    background-color: var(--third);
    color: var(--primary);
    font-weight: 600;
    transition: all 0.4s ease;
  }
  #navigation a:active {
    background-color: var(--secondary);
    color: var(--fourth);
    font-size: 18px;
    font-weight: 600;
    transition: all 0.4s ease;
  }
</style>
