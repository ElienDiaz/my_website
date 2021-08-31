<script lang="ts">
	import Router from "svelte-spa-router";
	import Home from "./pages/Home.svelte";
	import Projects from "./pages/Projects.svelte";
	import Music from "./pages/Music.svelte";
	import CV from "./pages/CV.svelte";
	import Header from "./components/Header.svelte";
	// const resumeTab = derived(route, ($route) =>
	//   $route.page === "resume" ? $route.tab : "work"
	// );

	let routes = {
		"/Home": Home,
		"/Music": Music,
		"/CV": CV,
		"/Projects": Projects,
		"/": Home,
	};
</script>

<main>
	<div>
		<Header />
		<Router {routes} />
	</div>
</main>
