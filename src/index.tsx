/* @refresh reload */
import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import "./index.css";
import Home from "./views/Home.tsx";

const root = document.getElementById("root");

render(
  () => (
    <HashRouter>
      <Route path="/" component={Home} />
    </HashRouter>
  ),
  root!,
);
