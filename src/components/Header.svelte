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

<!-- <nav class="page-nav"> -->
<nav class="navbar">
  <div class="navbar-brand">
    <div class="navbar-item">Elie Diaz</div>
    <a
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarMenu"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div id="navbarMenu" class="navbar-menu">
    <div class="navbar-start"/>
    <div class="navbar-end">
      <a class="navbar-item"> Home </a>
      <a class="navbar-item"> Projects </a>
      <a class="navbar-item"> Music </a>
      <a class="navbar-item"> CV </a>
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
