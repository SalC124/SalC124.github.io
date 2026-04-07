import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import "./index.css";
import Home from "./views/Home.tsx";
import Secret from "./views/Secret.tsx";
import Buoy from "./views/LivaBuoyDashboard.tsx";

const root = document.getElementById("root");

render(
  () => (
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/secret" component={Secret} />
      <Route path="/buoy" component={Buoy} />
    </HashRouter>
  ),
  root!,
);
