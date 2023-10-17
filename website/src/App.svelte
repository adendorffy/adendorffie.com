<!-- App.svelte -->
<script>
// Your component logic
import './global.css';
import Router from 'svelte-spa-router';
import routes from './routes';
</script>


<main>
<div >
	<h1>Adendorffie </h1>
</div>


<!-- Navigation links -->
<ul>
<li><a href="#/">Home</a></li>
<li><a href="#/about/svelte">About Me</a></li>
<li><a href="#/projects/card">Projects</a></li>
<li><a href="#/does/not/exist">Not found</a></li>
</ul>

<!-- Show the router -->
<Router {routes} />
</main>

