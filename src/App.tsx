import { Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Admin } from "./Admin";
import { Nav } from "./Nav";

export function App() {
  return (
    <>
      <Nav />
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/admin">
        <Admin />
      </Route>
    </>
  );
}
