import { Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Admin } from "./Admin";
import { Nav } from "./Nav";
import { ErrorBoundary } from "react-error-boundary";
import { useWindowWidth } from "./hooks/useWindowWidth";

export function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      {/*Window width: {windowWidth}*/}
      <Nav />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/admin">
        <ErrorBoundary fallback={<>Sorry, the save failed. 🤦‍♀️</>}>
          <Admin />
        </ErrorBoundary>
      </Route>
    </>
  );
}
