import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import Popup from "./pages/Popup";

render(
  () => (
    <HashRouter>
      <Route path="/" component={Popup} />
      {/* <Route path="/add-button" component={AddBranchCopyButton} /> */}
    </HashRouter>
  ),
  document.getElementById("root")!
);
