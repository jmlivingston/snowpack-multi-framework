import React from "../../_snowpack/pkg/react.js";
import ButtonReact from "../core/ButtonReact.js";
function AppReact({counter, onChange}) {
  return /* @__PURE__ */ React.createElement(ButtonReact, {
    counter,
    onClick: onChange
  });
}
export default AppReact;
