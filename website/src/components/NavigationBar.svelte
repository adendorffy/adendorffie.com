<!-- NavigationBar.svelte -->
<script>
    // Your component logic
    import '../global.css';
    import { link } from "svelte-spa-router";
    export let route;
    console.log('route: ', route);

</script>
     
<div class="navigation-bar">
    <a class="navigation-link {route === '/' && 'active'}" href="/" use:link>Home</a>
    <a class="navigation-link {route === '/about' && 'active'}" href="/about" use:link>About</a>
    <a class="navigation-link {route === '/projects' && 'active'}" href="/projects" use:link>Projects</a>
</div>


  
    