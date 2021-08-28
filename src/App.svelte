<script lang="ts">
	import { derived } from "svelte/store";
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./pages/Home.svelte";
	import Projects from "./pages/Projects.svelte";
	import Music from "./pages/Music.svelte";
	import CV from "./pages/CV.svelte";
	import Header from "./components/Header.svelte";
	// const resumeTab = derived(route, ($route) =>
	//   $route.page === "resume" ? $route.tab : "work"
	// );
	export let url = "";
</script>

<main>
	<Router {url}>
		<Header />
		<Route path="Projects" component={Projects} />
		<Route path="Music" component={Music} />
		<Route path="CV" component={CV} />
		<Route path="Home" component={Home} />
		<Route path="/" component={Home} />
	</Router>
</main>
