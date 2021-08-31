<script lang="ts">
  import { link } from "svelte-spa-router";

  let menuOpen = false;
  //   import { resumeRoute, route } from "../route";
  //   import Link from "../components/Link.svelte";

  //   const unsubscribe = route.subscribe(() => {
  //     menuOpen = false;
  //   });
  //   onDestroy(unsubscribe);
  let mobile;
  const toggleNav = () => {
    mobile = !mobile;
  };

  const turnOffOverlay = () => {
    mobile = false;
  };
</script>

<nav class="navbar is-size-5">
  <div class="navbar-brand">
    <div class="navbar-item">
      <a
        href="/"
        class="navbar-item"
        style="color: #a8d1ce"
        on:click={turnOffOverlay}
        use:link>Elie Diaz</a
      >
    </div>
    <a
      class="navbar-burger burger"
      class:is-active={mobile}
      id="burger"
      on:click={toggleNav}
    >
      <span />
      <span />
      <span />
    </a>
  </div>
  <div
    class="navbar-menu"
    class:is-active={mobile}
    class:special-back={mobile}
    id="menu"
  >
    <div class="navbar-start" />
    <div class="navbar-end">
      <a
        href="/"
        class="navbar-item"
        style="color: #a8d1ce"
        on:click={turnOffOverlay}
        use:link>Home</a
      >
      <a
        href="#/Projects"
        class="navbar-item"
        style="color: #a8d1ce"
        on:click={turnOffOverlay}
        use:link>Projects</a
      >
      <a
        href="#/Music"
        class="navbar-item"
        style="color: #a8d1ce"
        on:click={turnOffOverlay}
        use:link>Music</a
      >
      <a
        href="#/CV"
        class="navbar-item"
        style="color: #a8d1ce"
        on:click={turnOffOverlay}
        use:link>CV</a
      >
      <!-- <NavLink to="/">Home</NavLink>
      <NavLink to="/">Projects</NavLink>
      <NavLink to="/">Music</NavLink>
      <NavLink to="/">CV</NavLink> -->
    </div>
  </div>
</nav>

<style>
  .navbar {
    background: hsl(125, 28%, 26%);
  }
  /* .navbar-menu {
      display: flex;
      flex-grow: 1;
      flex-shrink: 0;
    } */
  .navbar-burger {
    color: #a8d1ce;
  }
  .navbar-item {
    font-family: "Fira Sans";
    color: #a8d1ce;
    /* background:hsl(0, 100%, 50%) */
  }

  .special-back {
    background: rgb(100, 134, 103);
  }
  /* ul.mobile-menu {
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
  } */
</style>
