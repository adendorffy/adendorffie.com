// Components
import About from "./routes/About.svelte";
import Home from "./routes/Home.svelte";
import Projects from "./routes/Projects.svelte";
import NotFound from "./routes/NotFound.svelte";

// Export the route definition object
export default {
  // Exact path
  "/": Home,

  // Using named parameters, with last being optional
  "/about/:first/:last?": About,

  // Wildcard parameter
  // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
  "/projects": Projects,
  "/projects/*": Projects,

  // Catch-all, must be last
  "*": NotFound,
};
