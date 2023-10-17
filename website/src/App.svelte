<!-- App.svelte -->
<main>
	<div class="navigation-bar">
        <li><a class="navigation-link" href="/">Home</a></li>
        <li><a class="navigation-link" href="/about">About</a></li>
        <li><a class="navigation-link" href="/projects">Projects</a></li> 
    </div>
	<div>
		
	</div>

</main>

<script>
// Your component logic
import './global.css';
import NavigationBar from './components/NavigationBar.svelte';
import Router from 'svelte-spa-router';
import routes from './routes';

</script>

<Router {routes} />

