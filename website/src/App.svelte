<!-- App.svelte -->

<script>
	// Your component logic
	import './global.css';
	import NavigationBar from './components/NavigationBar.svelte';
	import Router from "svelte-spa-router";
  	import { routes } from "./routes.js";
	function routeLoaded(event) {
		console.log('RouteLoaded event: ', event.detail.route);
	}
	import {location} from 'svelte-spa-router'
	console.log('location: ', $location);

</script>
	
	
<main>
	<NavigationBar route={$location}/>
</main>

<Router {routes} on:routeLoaded={routeLoaded} />
