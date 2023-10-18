<!-- NavigationBar.svelte -->
<script>
    // Your component logic
    import '../global.css';
    import { link } from "svelte-routing";
 
</script>
     
<div class="navigation-bar">
    <a class="navigation-link" href="/" use:link >Home</a>
    <a class="navigation-link" href="/about" use:link about>About</a>
    <a class="navigation-link" href="/projects" use:link projects>Projects</a>
</div>
    

  
    