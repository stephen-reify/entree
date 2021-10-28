import ReactDom from "react-dom";
import { App } from "./App";

const adder = (x: number, y: number) => x + y;
adder(4, 2); //=

ReactDom.render(<App />, document.getElementById("root"));
