import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import Popup from "./pages/Popup";
import AddBranchCopyButton from "./pages/AddBranchCopyButton";
import { ROUTE_HOME, ROUTE_ADD_BUTTON } from "./constants/routes";

render(
  () => (
    <HashRouter>
      <Route path={ROUTE_HOME} component={Popup} />
      <Route path={ROUTE_ADD_BUTTON} component={AddBranchCopyButton} />
    </HashRouter>
  ),
  document.getElementById("root")!
);
