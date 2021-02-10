import React, {useState} from "../_snowpack/pkg/react.js";
import styles from "./ReactButton.module.css.proxy.js";
function ReactButton({counter, onClick}) {
  const [localCounter, setLocalCounter] = useState(0);
  return /* @__PURE__ */ React.createElement("button", {
    className: styles.button,
    onClick: () => {
      onClick();
      setLocalCounter(localCounter + 1);
    }
  }, "React Button (Local: ", localCounter, " / Shared: ", counter, ")");
}
export default ReactButton;
