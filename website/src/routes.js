// Components
import About from "./routes/About.svelte";
import Home from "./routes/Home.svelte";
import Projects from "./routes/Projects.svelte";

// Export the route definition object
const routes = [
  {
    name: "/",
    component: Home,
  },
  { name: "about", component: About },
  {
    name: "projects",
    component: Projects,
  },
];

export { routes };
