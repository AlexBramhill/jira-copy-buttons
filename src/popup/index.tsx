import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import Popup from "./pages/Popup";
import { ROUTE_HOME } from "./constants/routes";

render(
  () => (
    <HashRouter>
      <Route path={ROUTE_HOME} component={Popup} />
    </HashRouter>
  ),
  document.getElementById("root")!
);
