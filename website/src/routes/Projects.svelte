<script>
    import { link } from "svelte-spa-router";
  import Expandable from "../components/Expandable.svelte";
</script>

<main>
    <div class="bar">
        <a class="nav-link" href="/" use:link>Home</a>  
    </div>  
    <h2>Illustration Work</h2>
    Despite not studying Graphic Design or Illustration, I harbour a great passion for this field of work and have worked on several projects. 
    <li>
       Tutoring Game Graphics
    </li>
    <Expandable title="Contact Me" description="adendorff.danel@gmail.com"/>
</main>