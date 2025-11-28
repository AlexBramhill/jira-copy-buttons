import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import Popup from "./pages/Popup";
import { ROUTES } from "./constants/routes";
import DevTools from "./pages/Devtools";
import About from "./pages/About";

render(
  () => (
    <HashRouter>
      <Route path={ROUTES.HOME} component={Popup} />
      <Route path={ROUTES.DEVTOOLS} component={DevTools} />
    </HashRouter>
  ),
  document.getElementById("root")!
);
