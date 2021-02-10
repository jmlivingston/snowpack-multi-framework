import React from "./_snowpack/pkg/react.js";
import ReactButton from "./components/ReactButton.js";
function AppReact({counter, onChange}) {
  return /* @__PURE__ */ React.createElement(ReactButton, {
    counter,
    onClick: onChange
  });
}
export default AppReact;
