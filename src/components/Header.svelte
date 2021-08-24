<script lang="ts">
  import { onDestroy } from "svelte";
  let menuOpen = false;
//   import { resumeRoute, route } from "../route";
//   import Link from "../components/Link.svelte";
  
//   const unsubscribe = route.subscribe(() => {
//     menuOpen = false;
//   });
//   onDestroy(unsubscribe);
</script>

<style>
  .page-nav {
    background: hsl(125, 28%, 26%);
  }
  ul.mobile-menu {
    position: absolute;
    top: 15px;
    right: 30px;
    z-index: 10;
  }
  .mobile-menu-toggle {
    color: #fafafa;
  }
  div.mobile-menu-background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background: rgba(0, 0, 0, 0.25);
  }
</style>

<nav class="page-nav">
  <div class="nav-container">
    <div class="nav-logo">
      <!-- <Link to={resumeRoute('work')}>Sam Mohr</Link> -->
      Elie Diaz
    </div>
    <ul class="nav-links">
      <li>
        <!-- <Link
          to={resumeRoute('work')}
          className={$route.page === 'resume' ? 'active' : ''}>
          Resume
        </Link> -->
        Home
      </li>
      <li>
        <!-- <Link to={{ page: 'sudoku' }}>Sudoku</Link> -->
        Projects
      </li>
      <li>
        <!-- <Link
          to={{ page: 'reviews' }}
          className={$route.page === 'reviews' ? 'active' : ''}>
          Reviews
        </Link> -->
        Music
      </li>
      <li>
        <!-- <Link
          to={{ page: 'recipes' }}
          className={$route.page === 'recipes' ? 'active' : ''}>
          Recipes
        </Link> -->
        CV
      </li>
    </ul>
    <span class="mobile-menu-toggle" on:click={() => (menuOpen = !menuOpen)} />
    {#if menuOpen}
      <div class="mobile-menu-background" on:click={() => (menuOpen = false)} />
    {/if}
    <ul
      class="mobile-menu menu"
      style={`display: ${menuOpen ? 'block' : 'none'}`}>
      <li>
        <!-- <Link
          to={resumeRoute('work')}
          className={$route.page === 'resume' ? 'active' : ''}>
          Resume
        </Link> -->
        Home
      </li>
      <li>
        <!-- <Link to={{ page: 'sudoku' }}>Sudoku</Link> -->
        Projects
      </li>
      <li>
        <!-- <Link
          to={{ page: 'reviews' }}
          className={$route.page === 'reviews' ? 'active' : ''}>
          Reviews
        </Link> -->
        Music
      </li>
      <li>
        <!-- <Link
          to={{ page: 'recipes' }}
          className={$route.page === 'recipes' ? 'active' : ''}>
          Recipes
        </Link> -->
        CV
      </li>
    </ul>
  </div>
</nav>