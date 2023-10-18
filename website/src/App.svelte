<!-- App.svelte -->

<script>
	// Your component logic
	import './global.css';
	import NavigationBar from './components/NavigationBar.svelte';
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";
	import Projects from './routes/Projects.svelte';
	export let url = "";
	
</script>
	
	
	
<main>
	<NavigationBar/>
</main>

<Router {url}>
        
	<div>
	  
	  <Route path="/projects" component={Projects} />
	  <Route path="/about" component={About} />
	  <Route path="/"><Home /></Route>
	</div>
  </Router>