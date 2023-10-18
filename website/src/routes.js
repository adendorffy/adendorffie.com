// Components
import About from "./routes/About.svelte";
import Home from "./routes/Home.svelte";
import Projects from "./routes/Projects.svelte";
import NotFound from "./routes/NotFound.svelte";

// Export the route definition object
export const routes = {
  "/": Home,
  "/projects": Projects,
  "/about": About,
  "*": NotFound,
};
