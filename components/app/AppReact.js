import React, {lazy, Suspense} from "../../_snowpack/pkg/react.js";
const ButtonReact = lazy(() => import("../core/ButtonReact.js"));
function AppReact({counter, onChange}) {
  return /* @__PURE__ */ React.createElement(Suspense, {
    fallback: null
  }, /* @__PURE__ */ React.createElement(ButtonReact, {
    counter,
    onClick: onChange
  }));
}
export default AppReact;
